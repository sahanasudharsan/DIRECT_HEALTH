import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const LockRefreshIcon = () => (
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
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <rect x="9" y="11" width="6" height="5" rx="1" />
        <path d="M10 11V9a2 2 0 1 1 4 0v2" />
      </svg>
    </div>
  </div>
);

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    
    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setSuccessMessage('OTP sent successfully! Redirecting to verification...');
    setTimeout(() => {
      // Pass the email to the OTP page via router state so we can display it dynamically
      navigate('/verify-otp', { state: { email } });
    }, 1500);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper">
        {/* Centered logo */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Form Card */}
        <div className="auth-card" style={{ padding: '36px 32px' }}>
          {/* Lock Icon */}
          <LockRefreshIcon />

          {/* Heading and description */}
          <h2 className="auth-title" style={{ fontSize: '24px', marginBottom: '12px' }}>
            Forgot Password?
          </h2>
          <p className="auth-subtitle" style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.5' }}>
            Enter your registered email address and we will send a 6-digit OTP to verify your account.
          </p>

          <form className="auth-form" onSubmit={handleSendOtp}>
            {/* Email field */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="e.g. provider@directhealth.com"
                className="form-input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage('');
                }}
                required
              />
            </div>

            {/* Error/Success Feedbacks */}
            {errorMessage && (
              <div style={{ color: '#dc2626', fontSize: '13px', textAlign: 'center', fontWeight: '500' }}>
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div style={{ color: '#16a34a', fontSize: '13px', textAlign: 'center', fontWeight: '500' }}>
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-button" style={{ marginTop: '8px' }}>
              Send OTP
            </button>
          </form>

          {/* Back to Login Link */}
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
            <span 
              onClick={() => navigate('/login')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--primary-blue)',
                cursor: 'pointer'
              }}
              role="link"
            >
              <ArrowLeft size={16} />
              <span>Back to Login</span>
            </span>
          </div>
        </div>

        {/* Support Option below card */}
        <p style={{ fontSize: '13px', color: 'var(--text-medium)', textAlign: 'center', marginTop: '8px' }}>
          Need help?{' '}
          <span 
            style={{ fontWeight: '600', textDecoration: 'underline', color: 'var(--primary-blue)', cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault();
              setSuccessMessage('A support agent has been notified. We will reach out to you shortly.');
            }}
            role="link"
          >
            Contact Provider Support
          </span>
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
