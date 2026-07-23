import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Key, ArrowRight, UserPlus, HelpCircle, Eye, EyeOff } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

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
      setErrorMessage('Please enter your username/email and password.');
      return;
    }
    
    setSuccessMessage('Signed in successfully! Redirecting to registration...');
    setTimeout(() => {
      navigate('/patient-registration');
    }, 1200);
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
                alt="Secure Clinical Access" 
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
                Secure Clinical Portal
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6',
                fontFamily: "'Inter', sans-serif"
              }}>
                Sign in to access your secure patient network, manage appointments, and review medical records.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Login Form Content (matching 1st image) */}
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
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}>
              {/* Card Main Body */}
              <div style={{ padding: '36px 36px 28px' }}>
                
                <h1 style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: '#0062E6',
                  margin: '0 0 24px 0',
                  textAlign: 'center',
                  letterSpacing: '-0.5px',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase'
                }}>
                  LOGIN
                </h1>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Username / Email Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="usernameOrEmail" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                      Username / Email
                    </label>
                    <div style={{ position: 'relative', width: '100%' }}>
                      <User size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        type="text"
                        placeholder="Username / Email"
                        value={formData.usernameOrEmail}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px 12px 42px',
                          fontSize: '14.5px',
                          fontFamily: "'Inter', sans-serif",
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          outline: 'none',
                          boxSizing: 'border-box',
                          backgroundColor: '#F8FAFC',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease'
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
                    </div>
                  </div>

                  {/* Password Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="password" style={{ fontSize: '13.5px', fontWeight: '700', color: '#1E293B', fontFamily: "'Inter', sans-serif" }}>
                      Password
                    </label>
                    <div style={{ position: 'relative', width: '100%' }}>
                      <Key size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 42px 12px 42px',
                          fontSize: '14.5px',
                          fontFamily: "'Inter', sans-serif",
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          outline: 'none',
                          boxSizing: 'border-box',
                          backgroundColor: '#F8FAFC',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease'
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

                    {/* Forgot Password Link right below password */}
                    <div style={{ textAlign: 'right', marginTop: '4px' }}>
                      <span
                        onClick={() => navigate('/forgot-password')}
                        style={{ fontSize: '13.5px', fontWeight: '600', color: '#0062E6', cursor: 'pointer', textDecoration: 'none' }}
                        role="link"
                      >
                        Forgot Password?
                      </span>
                    </div>
                  </div>

                  {/* Error / Success Feedback Messages */}
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

                  {/* LOGIN Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#0062E6',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '15px',
                      fontWeight: '700',
                      fontFamily: "'Inter', sans-serif",
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '6px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(0, 98, 230, 0.25)',
                      letterSpacing: '0.5px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004EC2'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0062E6'}
                  >
                    <span>LOGIN</span>
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>

                </form>

              </div>

              {/* Card Footer Box (Matching 1st image reference) */}
              <div style={{
                backgroundColor: '#F1F5F9',
                borderTop: '1px solid #E2E8F0',
                padding: '20px 36px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '14px', color: '#475569', fontFamily: "'Inter', sans-serif" }}>
                  Don't have an account?
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', fontWeight: '600' }}>
                  <span
                    onClick={() => navigate('/register')}
                    style={{ color: '#0062E6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    role="link"
                  >
                    <UserPlus size={16} />
                    <span>Register</span>
                  </span>

                  <span
                    onClick={() => navigate('/chat-support')}
                    style={{ color: '#0062E6', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    role="link"
                  >
                    <HelpCircle size={16} />
                    <span>Need help?</span>
                  </span>
                </div>
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
