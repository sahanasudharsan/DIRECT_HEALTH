import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Search, Shield, UserCheck, Briefcase, Phone, MessageSquare, Mail, Calendar, Clock, User, Info, ClipboardList } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import evelynCarterImg from '../assets/evelyn_carter.jpg';

export default function ServiceAssignmentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve user details from router state
  const fullName = location.state?.fullName || 'Sarah J. Miller';
  const selectedService = location.state?.selectedService || 'General Wellness Consultation';

  const handleStartCare = () => {
    navigate('/care-begins', {
      state: { fullName, selectedService }
    });
  };

  const handleChat = () => {
    navigate('/chat-support', {
      state: { fullName, selectedService }
    });
  };

  const handleCallAction = (type) => {
    alert(`Initiating mock ${type} to Dr. Evelyn Carter...`);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Centered Logo Header */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Outer container */}
        <div className="auth-card" style={{ maxWidth: '960px', padding: '40px', margin: '0 auto' }}>
          
          {/* Header Status Green Circle */}
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
            Service Assignment
          </h2>
          <p className="auth-subtitle" style={{ fontSize: '14.5px', marginBottom: '36px' }}>
            "We are matching you with the most suitable healthcare professional."
          </p>

          {/* Stepper (Stage 4 Active) */}
          <div className="status-stepper-wrapper" style={{ margin: '0 auto 40px' }}>
            <div className="status-stepper-line"></div>
            <div className="status-stepper-line-progress" style={{ width: '75%' }}></div>

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
              <div className="status-stepper-circle completed-green">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="status-stepper-label completed">Profile Approved</span>
            </div>

            {/* Step 4: Service Assigned (Active) */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle active-blue">
                <ClipboardList size={16} strokeWidth={2.5} />
              </div>
              <span className="status-stepper-label active">Service Assigned</span>
            </div>

            {/* Step 5: Care Begins */}
            <div className="status-stepper-step">
              <div className="status-stepper-circle">
                <Briefcase size={16} />
              </div>
              <span className="status-stepper-label">Care Begins</span>
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="dashboard-grid">
            
            {/* Left Card: Assigned Professional */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--primary-blue)' }}>
                <Briefcase size={18} />
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Assigned Professional</h3>
              </div>

              {/* Doctor Profile Info */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div className="clinician-image-container">
                  <img src={evelynCarterImg} alt="Dr. Evelyn Carter" />
                  <div className="verified-tag">Verified</div>
                </div>

                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
                    Dr. Evelyn Carter, DPT
                  </h4>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-medium)', marginBottom: '8px' }}>
                    <strong>Role:</strong> Physiotherapist
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-medium)', marginBottom: '4px' }}>
                    <strong>Experience:</strong> 8 Years
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-medium)', marginBottom: '4px' }}>
                    <strong>Specialization:</strong> Post-Surgery Recovery
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-medium)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <strong>Rating:</strong> 
                    <span style={{ color: '#f59e0b', fontSize: '14px' }}>★★★★★</span>
                    <span>(4.9/5)</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-medium)' }}>
                    <strong>Availability:</strong> Mon-Fri, 8 AM - 4 PM
                  </div>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0' }} />

              {/* Action Buttons */}
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-medium)', marginBottom: '12px' }}>Contact Actions</h4>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ 
                      flex: 1, 
                      backgroundColor: '#ffffff', 
                      color: 'var(--primary-blue)', 
                      border: '1px solid var(--primary-blue)',
                      padding: '10px',
                      fontSize: '13.5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                    onClick={() => handleCallAction('phone call')}
                  >
                    <Phone size={14} />
                    <span>Call</span>
                  </button>

                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ 
                      flex: 1, 
                      backgroundColor: '#ffffff', 
                      color: 'var(--primary-blue)', 
                      border: '1px solid var(--primary-blue)',
                      padding: '10px',
                      fontSize: '13.5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                    onClick={handleChat}
                  >
                    <MessageSquare size={14} />
                    <span>Chat</span>
                  </button>

                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ 
                      flex: 1, 
                      backgroundColor: '#ffffff', 
                      color: 'var(--primary-blue)', 
                      border: '1px solid var(--primary-blue)',
                      padding: '10px',
                      fontSize: '13.5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                    onClick={() => handleCallAction('secure message')}
                  >
                    <Mail size={14} />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card: Assignment Status */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--primary-blue)' }}>
                <Calendar size={18} />
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Assignment Status</h3>
              </div>

              {/* Status List Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                
                {/* Service Type */}
                <div className="status-border-row blue-border">
                  <div className="status-border-row-icon">
                    <ClipboardList size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Service Type</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-dark)' }}>{selectedService}</div>
                  </div>
                </div>

                {/* Start Date */}
                <div className="status-border-row blue-border">
                  <div className="status-border-row-icon">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Start Date</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-dark)' }}>May 15, 2024</div>
                  </div>
                </div>

                {/* Preferred Time */}
                <div className="status-border-row">
                  <div className="status-border-row-icon">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Preferred Time</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-dark)' }}>Morning (e.g., 9-11 AM)</div>
                  </div>
                </div>

                {/* Assigned Coordinator */}
                <div className="status-border-row green-border">
                  <div className="status-border-row-icon">
                    <User size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Assigned Coordinator</div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-dark)' }}>Sarah Jensen</div>
                  </div>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0' }} />

              {/* Coordinator Alert notice */}
              <div className="coordinator-alert-banner" style={{ margin: 0, padding: '12px 16px' }}>
                <Info size={18} />
                <div style={{ fontSize: '12.5px' }}>
                  Your coordinator Sarah will contact you shortly to confirm travel details and entry instructions for your first visit.
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA Panel */}
          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <button 
              type="button" 
              className="submit-button"
              style={{ width: 'auto', padding: '12px 32px', fontSize: '15px' }}
              onClick={handleStartCare}
            >
              Start Care Journey
            </button>
            <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
              By starting your journey, you agree to our patient service protocols.
            </span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
