import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Lock, User, Mail, UserPlus, Sparkles, CheckCircle2, Stethoscope, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

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

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '20px 16px 12px', maxWidth: '480px', margin: '0 auto' }}>
        {/* Centered logo above form */}
        <div className="centered-header" style={{ marginBottom: '12px' }}>
          <Logo centered />
        </div>

        {/* Headings */}
        <div style={{ textAlign: 'center', marginBottom: '14px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#e0f2fe',
            color: 'var(--primary-blue)',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '12px',
            fontWeight: '700',
            marginBottom: '6px'
          }}>
            <UserPlus size={14} />
            <span>Join Direct Health</span>
          </div>
          <h2 className="auth-title" style={{ fontSize: '24px', margin: '0 0 4px 0' }}>
            Create Your Account
          </h2>
          <p className="auth-subtitle" style={{ margin: 0, fontSize: '13px' }}>
            {accountType === 'patient'
              ? 'Access personalized home health care & connect with providers.'
              : 'Join our certified provider network to manage patient care.'}
          </p>
        </div>

        {/* Card Wrapper with Accent Bar */}
        <div className="auth-card" style={{ maxWidth: '480px', padding: '0', margin: '0 auto 12px', overflow: 'hidden', boxShadow: '0 15px 30px -10px rgba(13, 110, 253, 0.08)' }}>
          {/* Top Gradient Bar */}
          <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--primary-blue) 0%, var(--secondary-teal) 100%)' }}></div>

          <div style={{ padding: '20px 24px' }}>
            {/* Account Category Selector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px',
              backgroundColor: '#f1f5f9',
              padding: '3px',
              borderRadius: '8px',
              marginBottom: '14px'
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
                <label className="form-label" htmlFor="fullName" style={{ fontSize: '13px' }}>Full Name</label>
                <div className="input-container">
                  <User className="input-icon-left" size={16} />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={accountType === 'patient' ? 'Sarah Olivia Johnson' : 'Dr. Jane Smith'}
                    className="form-input has-icon-left"
                    style={{ padding: '9px 12px 9px 38px', fontSize: '14px' }}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="email" style={{ fontSize: '13px' }}>Email Address</label>
                <div className="input-container">
                  <Mail className="input-icon-left" size={16} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={accountType === 'patient' ? 'sarah.johnson@example.com' : 'jane.smith@medical-group.com'}
                    className="form-input has-icon-left"
                    style={{ padding: '9px 12px 9px 38px', fontSize: '14px' }}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Create Password */}
              <div className="form-group" style={{ gap: '4px' }}>
                <label className="form-label" htmlFor="password" style={{ fontSize: '13px' }}>Create Password</label>
                <div className="input-container">
                  <Lock className="input-icon-left" size={16} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 8 characters"
                    className="form-input has-icon-left has-icon-right"
                    style={{ padding: '9px 38px 9px 38px', fontSize: '14px' }}
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
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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
                <label className="form-label" htmlFor="confirmPassword" style={{ fontSize: '13px' }}>Confirm Password</label>
                <div className="input-container">
                  <Lock className="input-icon-left" size={16} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    className="form-input has-icon-left has-icon-right"
                    style={{ padding: '9px 38px 9px 38px', fontSize: '14px' }}
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
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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

              {/* Submit */}
              <button type="submit" className="submit-button" style={{ height: '42px', marginTop: '4px', fontSize: '14px' }}>
                <span>Create {accountType === 'patient' ? 'Patient Account' : 'Provider Account'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Divider */}
            <div className="divider-container" style={{ margin: '14px 0 10px' }}>
              <div className="divider-line"></div>
              <span className="divider-text" style={{ fontSize: '11px' }}>OR</span>
              <div className="divider-line"></div>
            </div>

            {/* Alternative Link */}
            <p className="auth-alternative-text" style={{ margin: 0, fontSize: '13px' }}>
              Already have an account?{' '}
              <span
                onClick={() => navigate('/login')}
                style={{ color: 'var(--primary-blue)', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
                role="link"
              >
                Log In
              </span>
            </p>
          </div>
        </div>

        {/* Security Badges */}
        <div className="security-badges-container" style={{ gap: '16px', margin: '0 auto 8px' }}>
          <div className="security-badge">
            <ShieldCheck size={13} strokeWidth={2.5} />
            <span>HIPAA Compliant</span>
          </div>
          <div className="security-badge">
            <Lock size={13} strokeWidth={2.5} />
            <span>256-Bit Encryption</span>
          </div>
          <div className="security-badge">
            <CheckCircle2 size={13} strokeWidth={2.5} />
            <span>SOC2 Verified</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

