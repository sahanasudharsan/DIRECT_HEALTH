import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Lock, User, Mail, UserPlus, CheckCircle2, Stethoscope, ArrowRight, Building2, Image as ImageIcon } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('patient'); // 'patient' | 'provider'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrorMessage('');
  };

  // Password strength score 0 to 4
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: 'None', color: '#e2e8f0' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: 'Weak', color: '#ef4444' };
      case 2:
        return { score: 2, label: 'Fair', color: '#f59e0b' };
      case 3:
        return { score: 3, label: 'Good', color: '#3b82f6' };
      case 4:
        return { score: 4, label: 'Strong', color: '#10b981' };
      default:
        return { score: 1, label: 'Weak', color: '#ef4444' };
    }
  };

  const strength = getPasswordStrength(formData.password);

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
    if (!formData.agreeTerms) {
      setErrorMessage('Please agree to the Terms of Service & HIPAA Privacy Policy.');
      return;
    }

    setSuccessMessage('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 1800);
  };

  const handleSSOSignUp = () => {
    setSuccessMessage('Redirecting to SSO provider registration...');
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
      <main className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '36px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            minHeight: '520px',
            border: '1px solid #dbeafe'
          }}>
            {/* Image Illustration Block */}
            <div style={{
              width: '100%',
              height: '320px',
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

          {/* Right Column Account Creation Form */}
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
              Create Account
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '20px' }}>
              Join Direct Health to manage patient care seamlessly.
            </p>

            {/* Account Category Selector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              backgroundColor: '#f1f5f9',
              padding: '3px',
              borderRadius: '8px',
              marginBottom: '16px'
            }}>
              <button
                type="button"
                onClick={() => setAccountType('patient')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: accountType === 'patient' ? '#ffffff' : 'transparent',
                  color: accountType === 'patient' ? 'var(--primary-blue)' : 'var(--text-medium)',
                  boxShadow: accountType === 'patient' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <User size={15} />
                <span>Patient Account</span>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('provider')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: accountType === 'provider' ? '#ffffff' : 'transparent',
                  color: accountType === 'provider' ? 'var(--primary-blue)' : 'var(--text-medium)',
                  boxShadow: accountType === 'provider' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Stethoscope size={15} />
                <span>Healthcare Provider</span>
              </button>
            </div>

            {/* Form */}
            <form className="auth-form" onSubmit={handleSubmit} style={{ gap: '12px' }}>
              {/* Full Name */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="fullName" style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-dark)' }}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={accountType === 'patient' ? 'Sarah Olivia Johnson' : 'Dr. Jane Smith'}
                  className="form-input"
                  style={{ padding: '10px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="email" style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-dark)' }}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@medical-group.com"
                  className="form-input"
                  style={{ padding: '10px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="password" style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-dark)' }}>
                  Password
                </label>
                <div className="input-container">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="form-input has-icon-right"
                    style={{ padding: '10px 40px 10px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
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

                {/* Password Strength Bar */}
                {formData.password.length > 0 && (
                  <div style={{ marginTop: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: '600', marginBottom: '3px' }}>
                      <span style={{ color: 'var(--text-medium)' }}>Password Strength:</span>
                      <span style={{ color: strength.color }}>{strength.label}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '3px', height: '3px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          style={{
                            flex: 1,
                            backgroundColor: step <= strength.score ? strength.color : '#e2e8f0',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="confirmPassword" style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-dark)' }}>
                  Confirm Password
                </label>
                <div className="input-container">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="form-input has-icon-right"
                    style={{ padding: '10px 40px 10px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="input-icon-right"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '2px' }}>
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  style={{ marginTop: '2px', cursor: 'pointer', accentColor: 'var(--primary-blue)' }}
                />
                <label htmlFor="agreeTerms" style={{ fontSize: '12px', color: 'var(--text-medium)', cursor: 'pointer', lineHeight: '1.3' }}>
                  I agree to Direct Health's <span style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Terms of Service</span> and <span style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>HIPAA Privacy Policy</span>.
                </label>
              </div>

              {/* Error/Success Feedbacks */}
              {errorMessage && (
                <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '8px 12px', borderRadius: '6px', fontSize: '12.5px', textAlign: 'center', fontWeight: '600', border: '1px solid #fecaca' }}>
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '8px 12px', borderRadius: '6px', fontSize: '12.5px', textAlign: 'center', fontWeight: '600', border: '1px solid #bbf7d0' }}>
                  {successMessage}
                </div>
              )}

              {/* Primary Submit Button */}
              <button 
                type="submit" 
                className="submit-button" 
                style={{ height: '44px', marginTop: '4px', fontSize: '14.5px', fontWeight: '700', backgroundColor: 'var(--primary-blue)', borderRadius: '8px' }}
              >
                <span>Create {accountType === 'patient' ? 'Patient Account' : 'Provider Account'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Divider */}
            <div className="divider-container" style={{ margin: '16px 0 14px' }}>
              <div className="divider-line"></div>
              <span className="divider-text" style={{ fontSize: '11px', color: '#94a3b8' }}>OR</span>
              <div className="divider-line"></div>
            </div>

            {/* SSO Secondary Button */}
            <button
              type="button"
              onClick={handleSSOSignUp}
              style={{
                width: '100%',
                height: '42px',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                backgroundColor: '#ffffff',
                color: 'var(--text-dark)',
                fontWeight: '700',
                fontSize: '13.5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '16px'
              }}
            >
              <Building2 size={16} />
              <span>Sign up with SSO</span>
            </button>

            {/* Log In Link */}
            <p style={{ textAlign: 'center', fontSize: '13.5px', color: 'var(--text-light)', margin: '0 0 16px 0' }}>
              Already have an account?{' '}
              <span
                onClick={() => navigate('/login')}
                style={{ color: 'var(--primary-blue)', fontWeight: '700', cursor: 'pointer' }}
                role="link"
              >
                Log In
              </span>
            </p>

            {/* Security Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '11px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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


