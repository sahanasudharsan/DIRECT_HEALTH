import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  return (
    <header className="main-header">
      <div className="main-header-inner">
        {/* Brand Logo left */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo />
          
          {/* Navigation tabs */}
          <nav className="nav-tabs">
            <Link 
              to="/dashboard" 
              className={`nav-tab ${currentPath === '/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/my-health" 
              className={`nav-tab ${currentPath === '/my-health' ? 'active' : ''}`}
            >
              My Health
            </Link>
            <Link 
              to="/appointments" 
              className={`nav-tab ${currentPath === '/appointments' ? 'active' : ''}`}
            >
              Appointments
            </Link>
            <Link 
              to="/records" 
              className={`nav-tab ${currentPath === '/records' ? 'active' : ''}`}
            >
              Records
            </Link>
            <Link 
              to="/prescriptions" 
              className={`nav-tab ${currentPath === '/prescriptions' ? 'active' : ''}`}
            >
              Prescriptions
            </Link>
          </nav>
        </div>

        {/* Utilities right */}
        <div className="header-right">
          
          {/* Notification Bell */}
          <button 
            type="button" 
            className="notification-bell-btn"
            onClick={() => navigate('/notifications')}
            aria-label="Notifications"
          >
            <Bell size={20} />
            {currentPath !== '/notifications' && <span className="notification-dot"></span>}
          </button>

          {/* User initials circle */}
          <div 
            className="user-avatar-circle"
            onClick={() => navigate('/profile')}
            title="Profile Settings"
          >
            S
          </div>

        </div>
      </div>
    </header>
  );
}
