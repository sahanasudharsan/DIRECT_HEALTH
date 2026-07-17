import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Search, Shield, UserCheck, Briefcase, Lock, Headphones, ShieldAlert } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function RegistrationSubmittedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fullName = location.state?.fullName || 'John Doe';
  const selectedService = location.state?.selectedService || 'Home Nurse Consultation';

  const handleTrackStatus = () => {
    // Navigate to the Profile Approved page, passing the name and service details
    navigate('/profile-approved', {
      state: { fullName, selectedService }
    });
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '60px 20px' }}>
        
        {/* Centered Logo branding */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Status card */}
        <div className="auth-card" style={{ maxWidth: '760px', padding: '40px 30px' }}>
          
          {/* Green Check circle */}
          <div style={{
            backgroundColor: '#e6fdf0',
            color: '#10b981',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px'
          }}>
            <Check size={32} strokeWidth={3} />
          </div>

          <h2 className="auth-title" style={{ fontSize: '26px', color: 'var(--text-dark)', marginBottom: '8px' }}>
            Registration Submitted Successfully
          </h2>
          <p className="auth-subtitle" style={{ maxWidth: '580px', margin: '0 auto 36px', fontSize: '14.5px', lineHeight: '1.6' }}>
            Our healthcare team will review your profile and contact you shortly. <br />
            We prioritize your health with clinical precision.
          </p>

          {/* 5 Stage Stepper */}
          <div className="status-stepper-wrapper">
            {/* Connecting line */}
            <div className="status-stepper-line"></div>
            {/* Green line from Submitted to Verification */}
            <div className="status-stepper-line-progress" style={{ width: '25%' }}></div>

            {/* Step 1: Registration Submitted */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle completed-green">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="status-stepper-label completed">Registration Submitted</span>
            </div>

            {/* Step 2: Verification In Progress */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle active-blue" style={{ border: '2px solid var(--primary-blue)', backgroundColor: '#ffffff', color: 'var(--primary-blue)' }}>
                <Search size={16} strokeWidth={2.5} />
              </div>
              <span className="status-stepper-label active">Verification In Progress</span>
            </div>

            {/* Step 3: Profile Approved */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle">
                <Shield size={16} />
              </div>
              <span className="status-stepper-label">Profile Approved</span>
            </div>

            {/* Step 4: Service Assignment */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle">
                <UserCheck size={16} />
              </div>
              <span className="status-stepper-label">Service Assignment</span>
            </div>

            {/* Step 5: Care Begins */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle">
                <Briefcase size={16} />
              </div>
              <span className="status-stepper-label">Care Begins</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '30px 0 20px' }} />

          {/* Card footer block */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              type="button" 
              className="submit-button"
              style={{ width: 'auto', padding: '10px 20px', fontSize: '14px', backgroundColor: '#ffffff', color: 'var(--primary-blue)', border: '1px solid var(--primary-blue)' }}
              onClick={handleTrackStatus}
            >
              Track Registration Status
            </button>
          </div>
        </div>

        {/* Value Propositions underneath the card */}
        <div className="value-props-container">
          <div className="value-prop-item">
            <div className="value-prop-icon">
              <UserCheck size={20} strokeWidth={2} />
            </div>
            <h4 className="value-prop-title">Verified Clinicians</h4>
            <p className="value-prop-desc">Every profile is reviewed by licensed professionals.</p>
          </div>

          <div className="value-prop-item">
            <div className="value-prop-icon">
              <Lock size={20} strokeWidth={2} />
            </div>
            <h4 className="value-prop-title">Secure Data</h4>
            <p className="value-prop-desc">Your medical records are encrypted and private.</p>
          </div>

          <div className="value-prop-item">
            <div className="value-prop-icon">
              <Headphones size={20} strokeWidth={2} />
            </div>
            <h4 className="value-prop-title">24/7 Support</h4>
            <p className="value-prop-desc">Our team is available if you have any questions.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
