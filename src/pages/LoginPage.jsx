import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Key, Eye, EyeOff, LogIn, UserPlus, HelpCircle } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
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
    if (!formData.usernameOrEmail || !formData.password) {
      setErrorMessage('Please enter both your username/email and password.');
      return;
    }
    
    // Mock authentication
    setSuccessMessage('Logged in successfully! Redirecting...');
    setTimeout(() => {
      navigate('/patient-registration');
    }, 1000);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper">
        {/* Centered logo above login card */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Card */}
        <div className="auth-card" style={{ paddingBottom: '24px' }}>
          <h2 className="auth-card-title-login">Login</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Username / Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="usernameOrEmail">Username / Email</label>
              <div className="input-container">
                <span className="input-icon-left">
                  <User size={18} />
                </span>
                <input
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  type="text"
                  placeholder="Username / Email"
                  className="form-input has-icon-left"
                  value={formData.usernameOrEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-container">
                <span className="input-icon-left">
                  <Key size={18} />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="form-input has-icon-left has-icon-right"
                  style={{ paddingRight: '42px' }}
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

            {/* Forgot Password */}
            <span 
              onClick={() => navigate('/forgot-password')}
              className="forgot-password-link"
              style={{ cursor: 'pointer' }}
              role="link"
            >
              Forgot Password?
            </span>

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
            <button type="submit" className="submit-button">
              <span>LOGIN</span>
              <LogIn size={18} />
            </button>
          </form>

          {/* Lower portion separated by line */}
          <div className="login-card-footer">
            <div className="login-card-footer-title">Don't have an account?</div>
            <div className="login-card-footer-links">
              <span 
                onClick={() => navigate('/register')}
                className="login-card-footer-link"
                style={{ cursor: 'pointer' }}
                role="link"
              >
                <UserPlus size={16} />
                <span>Register</span>
              </span>
              <span 
                className="login-card-footer-link"
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  setSuccessMessage('Support request received. Our team will contact you shortly.');
                }}
                role="link"
              >
                <HelpCircle size={16} />
                <span>Need help?</span>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (slightly darker tint on login page to match Figma shadow border) */}
      <Footer darkTint={true} />
    </div>
  );
}
