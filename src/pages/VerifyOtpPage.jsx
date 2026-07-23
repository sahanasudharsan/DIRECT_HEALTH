import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function VerifyOtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailInput = location.state?.email || 's***h@gmail.com';

  // Masking function (e.g. s***h@gmail.com)
  const maskEmail = (emailStr) => {
    if (!emailStr || emailStr.includes('***')) return emailStr || 's***h@gmail.com';
    const [name, domain] = emailStr.split('@');
    if (name.length <= 2) return `${name}***@${domain}`;
    return `${name[0]}***${name[name.length - 1]}@${domain}`;
  };

  const maskedEmail = maskEmail(emailInput);

  // OTP inputs state (6 boxes)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Timer state (starting at 54 seconds matching screenshot)
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
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setErrorMessage('');

    // Auto-focus next input box
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else if (otp[index]) {
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
      
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length < 6) {
      setErrorMessage('Please enter the complete 6-digit OTP code.');
      return;
    }

    setSuccessMessage('OTP Verified successfully! Redirecting to dashboard...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1400);
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimeLeft(54);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    setSuccessMessage('A new 6-digit OTP code has been sent to your email.');
  };

  return (
    <div className="page-container" style={{ backgroundColor: '#F4F7FB', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header Navbar - Minimal without upper tab links */}
      <header style={{ padding: '24px 60px', backgroundColor: 'transparent', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Upper tab kept clean */}
        </div>
      </header>

      {/* Main Centered Content Wrapper */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 24px 60px' }}>
        
        {/* Centered Brand Logo */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <Logo centered />
        </div>

        {/* Main White Card Container (Matching reference image pixel-for-pixel) */}
        <div style={{
          maxWidth: '460px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)',
          padding: '40px 36px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
          {/* Circular Shield Badge */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#E6F0FA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(0, 98, 230, 0.1)'
          }}>
            <ShieldCheck size={28} color="#0062E6" strokeWidth={2.2} />
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '26px',
            fontWeight: '800',
            color: '#1E293B',
            margin: '0 0 10px 0',
            textAlign: 'center',
            letterSpacing: '-0.4px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Enter OTP
          </h1>

          {/* Subtitle with Masked Email */}
          <p style={{
            fontSize: '14.5px',
            color: '#475569',
            textAlign: 'center',
            margin: '0 0 28px 0',
            lineHeight: '1.55',
            fontFamily: "'Inter', sans-serif",
            maxWidth: '360px'
          }}>
            We've sent a 6-digit code to your email (<strong>{maskedEmail}</strong>). Please enter it below to verify your identity.
          </p>

          {/* OTP Form */}
          <form onSubmit={handleVerify} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* 6 Digit Square Boxes */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', justifyContent: 'center' }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  style={{
                    width: '48px',
                    height: '52px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#1E293B',
                    fontFamily: "'Inter', sans-serif",
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    backgroundColor: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0062E6';
                    e.target.style.backgroundColor = '#FFFFFF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 98, 230, 0.12)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#CBD5E1';
                    e.target.style.backgroundColor = '#F8FAFC';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />
              ))}
            </div>

            {/* Error/Success Feedbacks */}
            {errorMessage && (
              <div style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #FECACA', width: '100%', marginBottom: '16px', boxSizing: 'border-box' }}>
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div style={{ backgroundColor: '#F0FDF4', color: '#16A34A', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #BBF7D0', width: '100%', marginBottom: '16px', boxSizing: 'border-box' }}>
                {successMessage}
              </div>
            )}

            {/* Verify & Proceed Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                height: '46px',
                backgroundColor: '#0062E6',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(0, 98, 230, 0.25)'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#004EC2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#0062E6'}
            >
              Verify & Proceed
            </button>

          </form>

          {/* Resend Countdown Timer */}
          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#475569', fontFamily: "'Inter', sans-serif" }}>
            {timeLeft > 0 ? (
              <span>Resend code in <strong style={{ color: '#1E293B', fontWeight: '700' }}>{formatTime(timeLeft)}</strong></span>
            ) : (
              <span
                onClick={handleResend}
                style={{ color: '#0062E6', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}
              >
                Resend OTP
              </span>
            )}
          </div>

          {/* Divider Line */}
          <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E8F0', margin: '24px 0 20px' }}></div>

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
                color: '#475569',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
              role="link"
            >
              <ArrowLeft size={16} strokeWidth={2.2} />
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
