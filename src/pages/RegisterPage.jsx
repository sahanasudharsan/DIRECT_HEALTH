import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (formData.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setSuccessMessage('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="page-container" style={{ backgroundColor: '#F4F7FB', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar Header - Minimal with NO upper tab links as requested */}
      <header style={{ padding: '24px 60px', backgroundColor: 'transparent', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Upper tab kept completely clean as requested */}
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

          {/* LEFT COLUMN: Hero Image Panel (from 1st image) */}
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
                alt="Empowering Better Care - Clinical Dashboard" 
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
                Empowering Better Care
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Access your patient network and manage treatments in one unified clinical dashboard.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Sign Up Form Content (from 2nd image) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
            
            {/* Brand Logo Header */}
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <Logo centered />
            </div>

            {/* Heading & Subtitle */}
            <h1 style={{
              fontSize: '34px',
              fontWeight: '800',
              color: '#0062E6',
              margin: '0 0 10px 0',
              textAlign: 'center',
              letterSpacing: '-0.5px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Create your account
            </h1>
            
            <p style={{
              fontSize: '15px',
              color: '#475569',
              textAlign: 'center',
              margin: '0 0 28px 0',
              lineHeight: '1.5',
              fontFamily: "'Inter', sans-serif"
            }}>
              Join our provider network to manage patient care seamlessly.
            </p>

            {/* White Form Card Container */}
            <div style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)',
              padding: '36px',
              boxSizing: 'border-box'
            }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="fullName" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Dr. Jane Smith"
                    value={formData.fullName}
                    onChange={handleInputChange}
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

                {/* Email Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane.smith@medical-group.com"
                    value={formData.email}
                    onChange={handleInputChange}
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

                {/* Create Password */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="password" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                    Create Password
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 44px 12px 16px',
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
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                      }}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748B', marginTop: '2px', fontFamily: "'Inter', sans-serif" }}>
                    Must be at least 8 characters with a mix of letters and numbers.
                  </span>
                </div>

                {/* Confirm Password */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="confirmPassword" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                    Confirm Password
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 44px 12px 16px',
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
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#64748B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                      }}
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
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

                {/* Create Account Primary Button */}
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
                    boxShadow: '0 4px 12px rgba(0, 98, 230, 0.25)'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#004EC2'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0062E6'}
                >
                  Create Account
                </button>

              </form>

              {/* OR Divider */}
              <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0 20px', width: '100%' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
                <span style={{ padding: '0 12px', fontSize: '12px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase' }}>OR</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
              </div>

              {/* Log In Link */}
              <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748B', margin: 0, fontFamily: "'Inter', sans-serif" }}>
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/login')}
                  style={{ color: '#0062E6', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}
                  role="link"
                >
                  Login
                </span>
              </p>
            </div>

            {/* Compliance Badges under form */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '24px', fontSize: '11.5px', fontWeight: '600', color: '#94A3B8', letterSpacing: '0.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} strokeWidth={2.5} />
                <span>HIPAA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Lock size={13} strokeWidth={2.5} />
                <span>ENCRYPTED</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CheckCircle2 size={13} strokeWidth={2.5} />
                <span>SOC2</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
