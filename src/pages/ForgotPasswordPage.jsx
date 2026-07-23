import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your registered email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setSuccessMessage('OTP sent successfully! Redirecting to OTP verification...');
    setTimeout(() => {
      navigate('/verify-otp', { state: { email } });
    }, 1400);
  };

  return (
    <div className="page-container" style={{ backgroundColor: '#F4F7FB', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar Header - Clean without upper tab links */}
      <header style={{ padding: '24px 60px', backgroundColor: 'transparent', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Upper tab kept clean */}
        </div>
      </header>

      {/* Main 2-Column Layout */}
      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 24px 60px' }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>

          {/* LEFT COLUMN: Hero Image Panel */}
          <div style={{
            backgroundColor: '#EBF2FC',
            borderRadius: '24px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0, 98, 230, 0.05)',
            border: '1px solid #DCE7FA'
          }}>
            {/* Main Visual Image Box */}
            <div style={{
              width: '100%',
              height: '380px',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#DCE7FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0, 98, 230, 0.08)'
            }}>
              <img 
                src={registrationHero} 
                alt="Account Recovery & Security" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Headline & Description underneath */}
            <div style={{ marginTop: '28px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#0062E6',
                margin: '0 0 10px 0',
                letterSpacing: '-0.3px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Account Recovery & Security
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Protecting provider and patient health data with HIPAA-compliant multi-factor verification.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Forgot Password Content (matching 2nd image) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            
            {/* Brand Logo Header */}
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <Logo centered />
            </div>

            {/* White Form Card Container */}
            <div style={{
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
              {/* Circular Lock Icon Badge */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#E6F0FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0, 98, 230, 0.1)'
              }}>
                <RotateCcw size={28} color="#0062E6" strokeWidth={2.2} />
              </div>

              {/* Title & Subtitle */}
              <h1 style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#0062E6',
                margin: '0 0 12px 0',
                textAlign: 'center',
                letterSpacing: '-0.4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Forgot Password?
              </h1>

              <p style={{
                fontSize: '14.5px',
                color: '#475569',
                textAlign: 'center',
                margin: '0 0 28px 0',
                lineHeight: '1.55',
                fontFamily: "'Inter', sans-serif"
              }}>
                Enter your registered email address and we will send a 6-digit OTP to verify your account.
              </p>

              {/* Form */}
              <form onSubmit={handleSendOtp} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Email Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. provider@directhealth.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage('');
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '14.5px',
                      fontFamily: "'Inter', sans-serif",
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: '#FFFFFF',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#0062E6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 98, 230, 0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#CBD5E1';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>

                {/* Error/Success Feedbacks */}
                {errorMessage && (
                  <div style={{ backgroundColor: '#FEF2F2', color: '#DC2626', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #FECACA' }}>
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div style={{ backgroundColor: '#F0FDF4', color: '#16A34A', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #BBF7D0' }}>
                    {successMessage}
                  </div>
                )}

                {/* Send OTP Button */}
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
                    marginTop: '4px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(0, 98, 230, 0.25)'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#004EC2'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0062E6'}
                >
                  Send OTP
                </button>

              </form>

              {/* Back to Login Link */}
              <div style={{ marginTop: '24px' }}>
                <span
                  onClick={() => navigate('/login')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14.5px',
                    fontWeight: '600',
                    color: '#0062E6',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif"
                  }}
                  role="link"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                  <span>Back to Login</span>
                </span>
              </div>

            </div>

            {/* Support link under form card */}
            <p style={{ fontSize: '13.5px', color: '#64748B', textAlign: 'center', marginTop: '20px', fontFamily: "'Inter', sans-serif" }}>
              Need help?{' '}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setSuccessMessage('Contacting provider support...');
                  setTimeout(() => navigate('/chat-support'), 800);
                }}
                style={{ fontWeight: '600', color: '#0062E6', cursor: 'pointer', textDecoration: 'none' }}
                role="link"
              >
                Contact Provider Support
              </span>
            </p>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
