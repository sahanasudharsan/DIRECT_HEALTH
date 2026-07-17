import React from 'react';

export default function Footer({ darkTint = false }) {
  const currentYear = 2026; // Matching the Figma layout's 2026 year

  return (
    <footer className={`app-footer ${darkTint ? 'app-footer-tint-login' : ''}`}>
      <div className="footer-copy">
        &copy; {currentYear} Direct Health. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="#privacy" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        <a href="#terms" className="footer-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
        <a href="#hipaa" className="footer-link" onClick={(e) => e.preventDefault()}>HIPAA Compliance</a>
        <a href="#support" className="footer-link" onClick={(e) => e.preventDefault()}>Contact Support</a>
      </div>
    </footer>
  );
}
