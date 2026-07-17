import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNotificationClick = () => {
    alert('You have 3 new notifications! (Upcoming session tomorrow, new treatment note, and exercise plan update.)');
  };

  const handleProfileClick = () => {
    alert('User profile settings for Sarah J. Miller (Patient ID: 80396111) are currently set to default.');
  };

  return (
    <header className="main-header">
      
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
          <a 
            href="#records" 
            className="nav-tab"
            onClick={(e) => { e.preventDefault(); alert('Medical Records logs page is coming soon!'); }}
          >
            Records
          </a>
          <a 
            href="#prescriptions" 
            className="nav-tab"
            onClick={(e) => { e.preventDefault(); alert('Prescriptions scans page is coming soon!'); }}
          >
            Prescriptions
          </a>
        </nav>
      </div>

      {/* Utilities right */}
      <div className="header-right">
        
        {/* Notification Bell */}
        <button 
          type="button" 
          className="notification-bell-btn"
          onClick={handleNotificationClick}
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        {/* User initials circle */}
        <div 
          className="user-avatar-circle"
          onClick={handleProfileClick}
          title="Profile Settings"
        >
          S
        </div>

      </div>

    </header>
  );
}
