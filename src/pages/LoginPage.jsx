import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, ShieldCheck, Lock, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
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
    if (!formData.email || !formData.password) {
      setErrorMessage('Please enter your email address and password.');
      return;
    }
    
    // Mock authentication
    setSuccessMessage('Signed in successfully! Redirecting...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  const handleSSOLogin = () => {
    setSuccessMessage('Redirecting to SSO provider authentication...');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="page-container bg-tinted" style={{ backgroundColor: '#ffffff' }}>
      
      {/* Top Navbar Header */}
      <header className="main-header" style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
        <div className="main-header-inner" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Brand Logo left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Logo />
            {/* Header Navigation Links */}
            <nav style={{ display: 'flex', gap: '24px', fontSize: '14.5px', fontWeight: '600' }}>
              <a href="#solutions" onClick={(e) => e.preventDefault()} style={{ color: '#475569' }}>Solutions</a>
              <a href="#network" onClick={(e) => e.preventDefault()} style={{ color: '#475569' }}>Network</a>
              <a href="#resources" onClick={(e) => e.preventDefault()} style={{ color: '#475569' }}>Resources</a>
            </nav>
          </div>

          {/* Right Header Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              type="button" 
              onClick={() => navigate('/login')}
              style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', fontWeight: '700', fontSize: '14.5px', cursor: 'pointer' }}
            >
              Login
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/register')}
              style={{ backgroundColor: 'var(--primary-blue)', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '8px 18px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content 2-Column Split */}
      <main className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Left Column Hero Illustration Card */}
          <div style={{
            backgroundColor: '#eff6ff',
            borderRadius: '16px',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '480px',
            border: '1px solid #dbeafe'
          }}>
            {/* Image Illustration Block */}
            <div style={{
              width: '100%',
              height: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#dbeafe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(13, 110, 253, 0.06)'
            }}>
              {registrationHero ? (
                <img 
                  src={registrationHero} 
                  alt="Clinical Care Illustration" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary-blue)' }}>
                  <ImageIcon size={48} strokeWidth={1.5} />
                </div>
              )}
            </div>

            {/* Left Card Heading & Text */}
            <div style={{ marginTop: '24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary-blue)', margin: '0 0 8px 0', letterSpacing: '-0.3px' }}>
                Empowering Better Care
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-light)', margin: 0, lineHeight: '1.55' }}>
                Access your patient network and manage treatments in one unified clinical dashboard.
              </p>
            </div>
          </div>

          {/* Right Column Sign In Form */}
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
              Sign In
            </h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', marginBottom: '28px' }}>
              Welcome back to Direct Health.
            </p>

            <form className="auth-form" onSubmit={handleSubmit} style={{ gap: '16px' }}>
              {/* Email Address */}
              <div className="form-group" style={{ gap: '6px' }}>
                <label className="form-label" htmlFor="email" style={{ fontWeight: '700', fontSize: '13.5px', color: 'var(--text-dark)' }}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@medical-group.com"
                  className="form-input"
                  style={{ padding: '11px 14px', fontSize: '14.5px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group" style={{ gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="form-label" htmlFor="password" style={{ fontWeight: '700', fontSize: '13.5px', color: 'var(--text-dark)', margin: 0 }}>
                    Password
                  </label>
                  <span 
                    onClick={() => navigate('/forgot-password')}
                    style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', cursor: 'pointer' }}
                    role="link"
                  >
                    Forgot Password?
                  </span>
                </div>
                <div className="input-container">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="form-input has-icon-right"
                    style={{ padding: '11px 40px 11px 14px', fontSize: '14.5px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="input-icon-right"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error/Success Feedbacks */}
              {errorMessage && (
                <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #fecaca' }}>
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', textAlign: 'center', fontWeight: '600', border: '1px solid #bbf7d0' }}>
                  {successMessage}
                </div>
              )}

              {/* Sign In Primary Button */}
              <button 
                type="submit" 
                className="submit-button"
                style={{ height: '46px', fontSize: '15px', fontWeight: '700', backgroundColor: 'var(--primary-blue)', borderRadius: '8px', marginTop: '6px' }}
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="divider-container" style={{ margin: '24px 0 20px' }}>
              <div className="divider-line"></div>
              <span className="divider-text" style={{ fontSize: '12px', color: '#94a3b8' }}>OR</span>
              <div className="divider-line"></div>
            </div>

            {/* SSO Secondary Button */}
            <button
              type="button"
              onClick={handleSSOLogin}
              style={{
                width: '100%',
                height: '44px',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                color: 'var(--text-dark)',
                fontWeight: '700',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '24px'
              }}
            >
              <Building2 size={18} />
              <span>Sign in with SSO</span>
            </button>

            {/* Sign Up Link */}
            <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-light)', margin: '0 0 24px 0' }}>
              Don't have an account?{' '}
              <span 
                onClick={() => navigate('/register')}
                style={{ color: 'var(--primary-blue)', fontWeight: '700', cursor: 'pointer' }}
                role="link"
              >
                Sign up
              </span>
            </p>

            {/* Security Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '11px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} />
                <span>HIPAA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Lock size={13} />
                <span>ENCRYPTED</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} />
                <span>SOC2</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

