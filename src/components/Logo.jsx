import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BriefcaseMedical } from 'lucide-react';

export default function Logo({ centered = false }) {
  const navigate = useNavigate();

  return (
    <div 
      className="header-logo-container" 
      onClick={() => navigate('/')}
      style={{ justifyContent: centered ? 'center' : 'flex-start' }}
    >
      <div className="logo-icon-wrapper">
        <BriefcaseMedical size={18} strokeWidth={2.5} className="logo-icon" />
      </div>
      <span className="logo-text">DIRECT HEALTH</span>
    </div>
  );
}

