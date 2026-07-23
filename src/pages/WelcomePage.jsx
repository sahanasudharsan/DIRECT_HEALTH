import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container welcome-page-bg">
      {/* Top Header Navbar */}
      <header className="app-header welcome-header">
        <Logo />
      </header>

      {/* Hero Content Section */}
      <main className="content-wrapper welcome-content-wrapper">
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
            <span>Get Started</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          {/* Divider Line */}
          <div className="hero-divider" />

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-group">
              <img src="/avatars/avatar1.jpg" alt="Doctor 1" className="avatar" />
              <img src="/avatars/avatar2.jpg" alt="Doctor 2" className="avatar" />
              <img src="/avatars/avatar3.jpg" alt="Doctor 3" className="avatar" />
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

