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
      <main className="content-wrapper" style={{ padding: '36px 20px', maxWidth: '520px', margin: '0 auto' }}>
        {/* Centered logo above form */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Headings */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#e0f2fe',
            color: 'var(--primary-blue)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '700',
            marginBottom: '12px'
          }}>
            <UserPlus size={15} />
            <span>Join Direct Health</span>
          </div>
          <h2 className="auth-title" style={{ fontSize: '30px', margin: '0 0 6px 0' }}>
            Create Your Account
          </h2>
          <p className="auth-subtitle" style={{ margin: 0 }}>
            {accountType === 'patient'
              ? 'Access personalized home health care, track sessions & connect with providers.'
              : 'Join our certified provider network to manage patient care seamlessly.'}
          </p>
        </div>

        {/* Card Wrapper with Accent Bar */}
        <div className="auth-card" style={{ maxWidth: '520px', padding: '0', overflow: 'hidden', boxShadow: '0 20px 40px -15px rgba(13, 110, 253, 0.08)' }}>
          {/* Top Gradient Bar */}
          <div style={{ height: '5px', background: 'linear-gradient(90deg, var(--primary-blue) 0%, var(--secondary-teal) 100%)' }}></div>

          <div style={{ padding: '32px 36px' }}>
            {/* Account Category Selector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              backgroundColor: '#f1f5f9',
              padding: '4px',
              borderRadius: '10px',
              marginBottom: '24px'
            }}>
              <button
                type="button"
                onClick={() => setAccountType('patient')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: accountType === 'patient' ? '#ffffff' : 'transparent',
                  color: accountType === 'patient' ? 'var(--primary-blue)' : 'var(--text-medium)',
                  boxShadow: accountType === 'patient' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <User size={16} />
                <span>Patient Account</span>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('provider')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  backgroundColor: accountType === 'provider' ? '#ffffff' : 'transparent',
                  color: accountType === 'provider' ? 'var(--primary-blue)' : 'var(--text-medium)',
                  boxShadow: accountType === 'provider' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Stethoscope size={16} />
                <span>Healthcare Provider</span>
              </button>
            </div>

            {/* Form */}
            <form className="auth-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <div className="input-container">
                  <User className="input-icon-left" size={18} />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={accountType === 'patient' ? 'Sarah Olivia Johnson' : 'Dr. Jane Smith'}
                    className="form-input has-icon-left"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="input-container">
                  <Mail className="input-icon-left" size={18} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={accountType === 'patient' ? 'sarah.johnson@example.com' : 'jane.smith@medical-group.com'}
                    className="form-input has-icon-left"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Create Password */}
              <div className="form-group">
                <label className="form-label" htmlFor="password">Create Password</label>
                <div className="input-container">
                  <Lock className="input-icon-left" size={18} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="At least 8 characters"
                    className="form-input has-icon-left has-icon-right"
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
                  <div style={{ marginTop: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--text-medium)' }}>Password Strength:</span>
                      <span style={{ color: strength.color }}>{strength.label}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', height: '4px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
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
              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-container">
                  <Lock className="input-icon-left" size={18} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    className="form-input has-icon-left has-icon-right"
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
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  style={{ marginTop: '3px', cursor: 'pointer', accentColor: 'var(--primary-blue)' }}
                />
                <label htmlFor="agreeTerms" style={{ fontSize: '13px', color: 'var(--text-medium)', cursor: 'pointer', lineHeight: '1.4' }}>
                  I agree to Direct Health's <span style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Terms of Service</span> and <span style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>HIPAA Privacy Policy</span>.
                </label>
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

              {/* Submit */}
              <button type="submit" className="submit-button" style={{ height: '46px', marginTop: '6px' }}>
                <span>Create {accountType === 'patient' ? 'Patient Account' : 'Provider Account'}</span>
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="divider-container" style={{ margin: '24px 0 20px' }}>
              <div className="divider-line"></div>
              <span className="divider-text">OR</span>
              <div className="divider-line"></div>
            </div>

            {/* Alternative Link */}
            <p className="auth-alternative-text" style={{ margin: 0 }}>
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
        <div className="security-badges-container">
          <div className="security-badge">
            <ShieldCheck size={14} strokeWidth={2.5} />
            <span>HIPAA Compliant</span>
          </div>
          <div className="security-badge">
            <Lock size={14} strokeWidth={2.5} />
            <span>256-Bit Encryption</span>
          </div>
          <div className="security-badge">
            <CheckCircle2 size={14} strokeWidth={2.5} />
            <span>SOC2 Verified</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

