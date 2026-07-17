import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Shield, UserCheck, Briefcase, Info, Download } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function ProfileApprovedPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve details passed from previous steps
  const fullName = location.state?.fullName || 'John Doe';
  const selectedService = location.state?.selectedService || 'Home Nurse Consultation';

  const handleContinue = () => {
    navigate('/service-assignment', {
      state: { fullName, selectedService }
    });
  };

  const handleDownload = () => {
    alert('Downloading Approval Summary PDF (mock)...');
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '60px 20px' }}>
        
        {/* Centered Logo */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Card */}
        <div className="auth-card" style={{ maxWidth: '760px', padding: '40px 30px' }}>
          
          {/* Green Check Circle */}
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
            Profile Approved
          </h2>
          <p className="auth-subtitle" style={{ fontSize: '14.5px', marginBottom: '36px' }}>
            Your profile has been successfully verified.
          </p>

          {/* 5 Stage Stepper */}
          <div className="status-stepper-wrapper">
            {/* Connecting line */}
            <div className="status-stepper-line"></div>
            {/* Green progress line spanning to Profile Approved (50% progress) */}
            <div className="status-stepper-line-progress" style={{ width: '50%' }}></div>

            {/* Step 1: Registration Submitted */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle completed-green">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="status-stepper-label completed">Registration Submitted</span>
            </div>

            {/* Step 2: Verification Completed */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle completed-green">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="status-stepper-label completed">Verification Completed</span>
            </div>

            {/* Step 3: Profile Approved */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle active-blue">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="status-stepper-label active">Profile Approved</span>
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

          {/* Grid Patient Details */}
          <div className="patient-details-card">
            <div className="patient-detail-cell">
              <div className="patient-detail-label">Patient Name</div>
              <div className="patient-detail-value">{fullName}</div>
            </div>
            <div className="patient-detail-cell">
              <div className="patient-detail-label">Patient ID</div>
              <div className="patient-detail-value">DH-PAT-12345</div>
            </div>
            <div className="patient-detail-cell">
              <div className="patient-detail-label">Service Requested</div>
              <div className="patient-detail-value">{selectedService}</div>
            </div>
            <div className="patient-detail-cell">
              <div className="patient-detail-label">Approval Date</div>
              <div className="patient-detail-value">May 15, 2024</div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              type="button" 
              className="submit-button"
              style={{ padding: '12px 20px', fontSize: '15px' }}
              onClick={handleContinue}
            >
              Continue to Next Step
            </button>
            <button 
              type="button" 
              className="submit-button"
              style={{ 
                padding: '12px 20px', 
                fontSize: '15px', 
                backgroundColor: '#ffffff', 
                color: 'var(--primary-blue)', 
                border: '1px solid var(--primary-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onClick={handleDownload}
            >
              <Download size={18} />
              <span>Download Approval Summary (PDF)</span>
            </button>
          </div>
        </div>

        {/* Info Coordinator Alert Banner */}
        <div className="coordinator-alert-banner" style={{ maxWidth: '760px', width: '100%' }}>
          <Info size={20} />
          <div>
            Your request is now in the <strong>Service Assignment</strong> queue. A patient coordinator will contact you within 24 hours to match you with a qualified home nurse.
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
