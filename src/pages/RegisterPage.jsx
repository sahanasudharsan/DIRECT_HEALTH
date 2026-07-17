import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Lock } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

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
      setErrorMessage('Please fill in all fields.');
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

    // Success Mock
    setSuccessMessage('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper">
        {/* Centered logo above form */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Headings */}
        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">Join our provider network to manage patient care seamlessly.</p>

        {/* Card */}
        <div className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Dr. Jane Smith"
                className="form-input"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane.smith@medical-group.com"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Create Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="password">Create Password</label>
              <div className="input-container">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  className="form-input has-icon-right"
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
              <p className="input-help-text">Must be at least 8 characters with a mix of letters and numbers.</p>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-container">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  className="form-input has-icon-right"
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

            {/* Submit */}
            <button type="submit" className="submit-button">
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="divider-container">
            <div className="divider-line"></div>
            <span className="divider-text">OR</span>
            <div className="divider-line"></div>
          </div>

          {/* Alternative Link */}
          <p className="auth-alternative-text">
            Already have an account?{' '}
            <span 
              onClick={() => navigate('/login')} 
              style={{ color: 'var(--primary-blue)', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
              role="link"
            >
              Login
            </span>
          </p>
        </div>

        {/* Trust Badges */}
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
            <ShieldCheck size={14} strokeWidth={2.5} />
            <span>SOC2 Type II</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
