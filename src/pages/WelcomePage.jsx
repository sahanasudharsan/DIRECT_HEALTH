import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

// Inline SVGs for the three diverse medical professional avatars to ensure self-containment
const Avatar1 = () => (
  <svg className="avatar" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#E0F2FE" />
    {/* Head */}
    <circle cx="18" cy="14" r="5" fill="#FDBA74" />
    {/* Hair */}
    <path d="M13 14C13 10.5 15.5 9 18 9C20.5 9 23 10.5 23 14C23 14.5 22.5 15 22 15C21.5 15 21 14.5 20.5 14C20 13.5 19 13.5 18 13.5C17 13.5 16 13.5 15.5 14C15 14.5 14.5 15 14 15C13.5 15 13 14.5 13 14Z" fill="#78350F" />
    {/* Glasses */}
    <rect x="14.5" y="13" width="3" height="2" rx="0.5" stroke="#1E293B" strokeWidth="0.8" />
    <rect x="18.5" y="13" width="3" height="2" rx="0.5" stroke="#1E293B" strokeWidth="0.8" />
    <line x1="17.5" y1="14" x2="18.5" y2="14" stroke="#1E293B" strokeWidth="0.8" />
    {/* Body / Scrubs (Blue) */}
    <path d="M8 30C8 24.5 12.5 22 18 22C23.5 22 28 24.5 28 30V36H8V30Z" fill="#0284C7" />
    {/* V-neck for scrubs */}
    <path d="M15 22L18 26L21 22" fill="#FDBA74" />
    {/* Stethoscope */}
    <path d="M13 22C13 25 15 27 18 27C21 27 23 25 23 22" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const Avatar2 = () => (
  <svg className="avatar" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#F0FDF4" />
    {/* Head */}
    <circle cx="18" cy="13.5" r="5" fill="#F0ABFC" />
    {/* Dark Hair */}
    <path d="M13 13C13 9 15 8 18 8C21 8 23 9 23 13V15H13V13Z" fill="#111827" />
    {/* Body / Doctor Coat (White over Teal) */}
    <path d="M8 30C8 24 12 21.5 18 21.5C24 21.5 28 24 28 30V36H8V30Z" fill="#F8FAFC" />
    {/* Inner Shirt (Teal) */}
    <path d="M14 21.5L18 27L22 21.5" fill="#0D9488" />
    {/* Coat lapels */}
    <path d="M13 21.5L18 28.5V36" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M23 21.5L18 28.5" stroke="#E2E8F0" strokeWidth="1" />
    {/* Stethoscope */}
    <path d="M14 21.5V25C14 27 15.5 28.5 18 28.5C20.5 28.5 22 27 22 25V21.5" stroke="#475569" strokeWidth="1" />
    <circle cx="18" cy="30" r="1.5" fill="#475569" />
  </svg>
);

const Avatar3 = () => (
  <svg className="avatar" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#ECFDF5" />
    {/* Head */}
    <circle cx="18" cy="14" r="5.5" fill="#FED7AA" />
    {/* Hijab/Hair (Teal/Green) */}
    <path d="M12 14.5C12 9.5 14.5 8 18 8C21.5 8 24 9.5 24 14.5C24 18 22.5 19.5 18 19.5C13.5 19.5 12 18 12 14.5Z" fill="#0F766E" />
    {/* Face cutout */}
    <path d="M14.5 14C14.5 11 16 10.5 18 10.5C20 10.5 21.5 11 21.5 14C21.5 17 20 18.5 18 18.5C16 18.5 14.5 17 14.5 14Z" fill="#FED7AA" />
    {/* Scrubs (Green) */}
    <path d="M8 30C8 24.5 12.5 22 18 22C23.5 22 28 24.5 28 30V36H8V30Z" fill="#14B8A6" />
    <path d="M15 22L18 25.5L21 22" fill="#FED7AA" />
  </svg>
);

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Top Header Navbar */}
      <header className="app-header">
        <Logo />
      </header>

      {/* Hero Content Section */}
      <main className="content-wrapper">
        <div className="welcome-hero">
          <h1 className="hero-title">
            Welcome to <span className="blue-text">Direct Health</span>
          </h1>
          <p className="hero-subtitle">
            Your trusted healthcare partner for home nursing, physiotherapy, and
            personalized medical care. Experience professional clinical excellence
            in the comfort of your own home.
          </p>

          <button className="cta-button" onClick={() => navigate('/register')}>
            Get Started
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-group">
              <Avatar1 />
              <Avatar2 />
              <Avatar3 />
            </div>
            <div className="social-text">
              Join <strong>5,000+ patients</strong> receiving expert care
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
