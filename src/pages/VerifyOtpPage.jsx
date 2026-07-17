import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const ShieldLockIcon = () => (
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
    <div style={{
      backgroundColor: '#e6f0fa',
      color: 'var(--primary-blue)',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9.5" y="11.5" width="5" height="4" rx="1" />
        <path d="M10.5 11.5V10a1.5 1.5 0 0 1 3 0v1.5" />
      </svg>
    </div>
  </div>
);

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailInput = location.state?.email || '';

  // Masking function (e.g. j***h@medical-group.com)
  const maskEmail = (emailStr) => {
    if (!emailStr) return 's***h@gmail.com';
    const [name, domain] = emailStr.split('@');
    if (name.length <= 2) return `${name}***@${domain}`;
    return `${name[0]}***${name[name.length - 1]}@${domain}`;
  };

  const maskedEmail = maskEmail(emailInput);

  // OTP inputs state (6 boxes)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Timer state (starting at 54 seconds as shown in the screenshot)
  const [timeLeft, setTimeLeft] = useState(54);
  const [canResend, setCanResend] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    // Keep only the last character entered
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace handling
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // If current box is empty, clear the previous one and focus it
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else if (otp[index]) {
        // If current box has value, clear it
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    
    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i] || '';
      }
      setOtp(newOtp);
      
      // Focus the last filled input or the next empty one
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      setErrorMessage('Please enter the full 6-digit OTP code.');
      return;
    }

    // Mock verification (e.g. checking if it is '123456' or allowing any 6 digits for testing)
    setSuccessMessage('Identity verified successfully! Redirecting...');
    setTimeout(() => {
      navigate('/patient-registration');
    }, 1500);
  };

  const handleResend = () => {
    if (!canResend) return;
    // Reset timer
    setTimeLeft(59);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0].focus();
    setSuccessMessage('A new 6-digit OTP has been sent to your email.');
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper">
        {/* Centered logo */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Card */}
        <div className="auth-card" style={{ padding: '36px 32px' }}>
          {/* Shield Icon */}
          <ShieldLockIcon />

          {/* Titles */}
          <h2 className="auth-title" style={{ fontSize: '24px', marginBottom: '12px' }}>
            Enter OTP
          </h2>
          <p className="auth-subtitle" style={{ fontSize: '14px', marginBottom: '30px', lineHeight: '1.5' }}>
            We've sent a 6-digit code to your email (<strong>{maskedEmail}</strong>). Please enter it below to verify your identity.
          </p>

          <form className="auth-form" onSubmit={handleVerify}>
            {/* 6 Digit Input Blocks */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="form-input"
                  style={{
                    width: '46px',
                    height: '46px',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    padding: '0',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    backgroundColor: '#f9fafb'
                  }}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  required
                />
              ))}
            </div>

            {/* Error/Success Feedbacks */}
            {errorMessage && (
              <div style={{ color: '#dc2626', fontSize: '13px', textAlign: 'center', fontWeight: '500', marginTop: '6px' }}>
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div style={{ color: '#16a34a', fontSize: '13px', textAlign: 'center', fontWeight: '500', marginTop: '6px' }}>
                {successMessage}
              </div>
            )}

            {/* Verify Button */}
            <button type="submit" className="submit-button" style={{ marginTop: '16px' }}>
              Verify & Proceed
            </button>
          </form>

          {/* Resend Code Info */}
          <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '14px', fontWeight: '500', color: 'var(--text-medium)' }}>
            {timeLeft > 0 ? (
              <span>Resend code in <strong style={{ color: 'var(--text-dark)' }}>{formatTime(timeLeft)}</strong></span>
            ) : (
              <span 
                onClick={handleResend} 
                style={{ color: 'var(--primary-blue)', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
              >
                Resend OTP
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="divider-container" style={{ margin: '20px 0 16px' }}>
            <div className="divider-line"></div>
          </div>

          {/* Back to Login Link */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span 
              onClick={() => navigate('/login')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-medium)',
                cursor: 'pointer'
              }}
              role="link"
            >
              <ArrowLeft size={16} />
              <span>Back to Login</span>
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
