import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Bell, Check, Edit2, Upload, ChevronRight, Lock, ShieldCheck, Mail, Phone, Heart, Activity, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import sarahJohnsonImg from '../assets/sarah_johnson_profile.jpg';
import drRobertChenImg from '../assets/robert_chen.jpg';
import nurseElenaImg from '../assets/sarah_jenkins.jpg'; // Reusing nurse portrait

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    alert('You have 3 new notifications! (Upcoming session tomorrow, new treatment note, and exercise plan update.)');
  };

  const triggerMockAlert = (actionName) => {
    alert(`Triggered mock action: ${actionName}`);
  };

  return (
    <div className="page-container bg-tinted">
      
      {/* Profile Page custom Header with Back arrow */}
      <header className="main-header" style={{ padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            type="button" 
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', color: 'var(--text-dark)' }} 
            onClick={() => navigate('/dashboard')}
            aria-label="Back to Dashboard"
          >
            <ArrowLeft size={20} />
          </button>
          
          <Logo />
        </div>

        <div className="header-right">
          <button 
            type="button" 
            className="notification-bell-btn"
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>
        </div>
      </header>

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Profile Grid */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column verification + care team */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Main Avatar Profile Card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '96px', height: '96px', margin: '0 auto 16px' }}>
                <img 
                  src={sarahJohnsonImg} 
                  alt="Sarah Johnson" 
                  style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #e2e8f0' }} 
                />
                <button 
                  type="button"
                  style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'var(--primary-blue)', color: '#ffffff', border: 'none', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  onClick={() => triggerMockAlert('edit avatar photo')}
                >
                  <Edit2 size={12} />
                </button>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 4px 0' }}>Sarah Johnson</h3>
              <div style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '20px' }}>Patient ID: <strong>80396111</strong></div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  type="button"
                  className="submit-button"
                  style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', padding: '8px 12px', fontSize: '13px' }}
                  onClick={() => triggerMockAlert('edit profile details')}
                >
                  Edit Profile
                </button>
                <button 
                  type="button"
                  className="submit-button"
                  style={{ flex: 1, padding: '8px 12px', fontSize: '13px' }}
                  onClick={() => triggerMockAlert('upload medical reports')}
                >
                  Upload Medical Reports
                </button>
              </div>
            </div>

            {/* Account Verification list */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h4 style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '14px' }}>
                Account Verification
              </h4>

              <div className="verification-checklist">
                <div className="verification-checklist-item">
                  <span>
                    <Phone size={14} style={{ color: 'var(--primary-blue)' }} /> Mobile
                  </span>
                  <span className="verification-checklist-item-check">
                    <Check size={16} strokeWidth={3} />
                  </span>
                </div>

                <div className="verification-checklist-item">
                  <span>
                    <Mail size={14} style={{ color: 'var(--primary-blue)' }} /> Email
                  </span>
                  <span className="verification-checklist-item-check">
                    <Check size={16} strokeWidth={3} />
                  </span>
                </div>

                <div className="verification-checklist-item">
                  <span>
                    <ShieldCheck size={14} style={{ color: 'var(--primary-blue)' }} /> Identity
                  </span>
                  <span className="verification-checklist-item-check">
                    <Check size={16} strokeWidth={3} />
                  </span>
                </div>
              </div>
            </div>

            {/* Care Team */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h4 style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '14px' }}>
                Care Team
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="care-team-item">
                  <img src={drRobertChenImg} alt="Dr. Robert Chen" />
                  <div>
                    <div className="care-team-item-name">Dr. Robert Chen</div>
                    <div className="care-team-item-role">Primary Physician</div>
                  </div>
                </div>

                <div className="care-team-item">
                  <img src={nurseElenaImg} alt="Nurse Elena Petrova" />
                  <div>
                    <div className="care-team-item-name">Nurse Elena Petrova</div>
                    <div className="care-team-item-role">Physiotherapist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '12px', color: '#ef4444' }}>
                <AlertTriangle size={15} fill="currentColor" style={{ color: '#ef4444' }} />
                <h4 style={{ fontSize: '12.5px', fontWeight: '700', margin: 0, textTransform: 'uppercase' }}>
                  Emergency Contact
                </h4>
              </div>

              <div style={{ fontSize: '13.5px', color: 'var(--text-medium)' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Mark Johnson</strong>
                <div style={{ margin: '4px 0 2px' }}>Spouse &bull; +1 (555) 012-3456</div>
              </div>
            </div>

            {/* Password and Consent Action Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                type="button" 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#ffffff', cursor: 'pointer', textAlign: 'left', fontWeight: '700', color: 'var(--text-medium)', fontSize: '13.5px' }}
                onClick={() => triggerMockAlert('change password dialog')}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Lock size={15} /> Change Password
                </span>
                <ChevronRight size={15} />
              </button>

              <button 
                type="button" 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#ffffff', cursor: 'pointer', textAlign: 'left', fontWeight: '700', color: 'var(--text-medium)', fontSize: '13.5px' }}
                onClick={() => triggerMockAlert('consent settings list')}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={15} /> Consent Settings
                </span>
                <ChevronRight size={15} />
              </button>
            </div>

          </div>

          {/* Right Column details list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Personal Information */}
            <div className="profile-section-card">
              <div className="profile-section-header">
                <h3 className="profile-section-title">Personal Information</h3>
                <span className="profile-section-update-link" onClick={() => triggerMockAlert('update personal details')}>
                  Update
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '13.5px' }}>
                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Full Name</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Sarah Olivia Johnson</div>
                </div>
                
                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Date of Birth</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>May 14, 1982 (42 years)</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Gender</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Female</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Mobile Number</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>+1 (555) 987-6543</div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Email Address</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>sarah.j@example.com</div>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Residential Address</div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>124 Healthcare Avenue, Suite 405, San Francisco, CA 94105</div>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="profile-section-card">
              <div className="profile-section-header">
                <h3 className="profile-section-title">Medical Information</h3>
                <span className="profile-section-update-link" onClick={() => triggerMockAlert('update medical details')}>
                  Update Info
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
                  <div>
                    <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Blood Group</div>
                    <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '12px', textAlign: 'center', backgroundColor: '#f8fafc', fontWeight: '800', fontSize: '18px', color: '#ef4444' }}>
                      O Positive
                    </div>
                  </div>

                  <div>
                    <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px' }}>Allergies</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', backgroundColor: '#fee2e2', color: '#b91c1c', padding: '4px 10px', borderRadius: '4px' }}>Penicillin</span>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', backgroundColor: '#fee2e2', color: '#b91c1c', padding: '4px 10px', borderRadius: '4px' }}>Latex</span>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', backgroundColor: '#f1f5f9', color: 'var(--text-medium)', padding: '4px 10px', borderRadius: '4px' }}>Peanuts (Mild)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Medical History</div>
                  <p style={{ fontSize: '13px', color: 'var(--text-medium)', lineHeight: '1.5', margin: 0 }}>
                    Diagnosed with Type 2 Diabetes in 2018. Hypertension managed via lifestyle and medication. Previous surgical procedure: Appendectomy (2005). Family history of cardiovascular health issues.
                  </p>
                </div>

                <div>
                  <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px' }}>Current Medications</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12.5px', fontWeight: '700' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%' }}></span>
                      <div>Metformin <span style={{ fontWeight: '500', color: 'var(--text-light)' }}>(500mg, Twice daily)</span></div>
                    </div>

                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12.5px', fontWeight: '700' }}>
                      <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%' }}></span>
                      <div>Lisinopril <span style={{ fontWeight: '500', color: 'var(--text-light)' }}>(10mg, Once daily)</span></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Activity Summary timeline */}
            <div className="profile-section-card">
              <h3 className="profile-section-title" style={{ marginBottom: '20px' }}>Activity Summary</h3>

              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-icon completed" style={{ backgroundColor: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
                    <Activity size={12} />
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Quarterly Health Review</strong>
                      <span style={{ fontSize: '11.5px', color: 'var(--text-light)' }}>Oct 12, 2024</span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-medium)', margin: '4px 0 0', lineHeight: '1.4' }}>
                      Successfully completed consultation with Dr. Robert Chen. New lab reports uploaded.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon" style={{ borderColor: 'var(--primary-blue)' }}>
                    <Heart size={12} style={{ color: 'var(--primary-blue)' }} />
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Blood Panel Results</strong>
                      <span style={{ fontSize: '11.5px', color: 'var(--text-light)' }}>Sep 28, 2024</span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-medium)', margin: '4px 0 0', lineHeight: '1.4' }}>
                      Awaiting clinician review. Fasting glucose within target range.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">
                    <FileText size={12} />
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Prescription Renewed</strong>
                      <span style={{ fontSize: '11.5px', color: 'var(--text-light)' }}>Aug 15, 2024</span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-medium)', margin: '4px 0 0', lineHeight: '1.4' }}>
                      Metformin prescription refilled for 90 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
