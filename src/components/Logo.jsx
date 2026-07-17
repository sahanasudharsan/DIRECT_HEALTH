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
        <BriefcaseMedical size={20} strokeWidth={2.5} />
      </div>
      <span className="logo-text">Direct Health</span>
    </div>
  );
}
