import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Heart, Activity, Calendar, User, FileText, Bell, Phone, MessageSquare, AlertTriangle, ShieldCheck, Mail, Headphones, Upload, MoreHorizontal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import drEndfarnahanImg from '../assets/dr_endfarnahan.jpg';
import robertManerImg from '../assets/robert_maner.jpg';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleChat = () => {
    navigate('/chat-support', {
      state: { fullName: 'Sarah J. Miller', selectedService: 'Physiotherapy' }
    });
  };

  const triggerMockAlert = (actionName) => {
    alert(`Triggered mock action: ${actionName}`);
  };

  return (
    <div className="page-container bg-tinted">
      {/* Global Navigation Header */}
      <Header />

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Welcome Banner */}
        <div className="dashboard-banner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
                Good Morning, Sarah!
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
                Welcome back. Here's an overview of your healthcare journey.
              </p>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '12px', fontSize: '13px', fontWeight: '700' }}>
              <div style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px', color: 'var(--text-medium)' }}>
                Patient ID: <span style={{ color: 'var(--text-dark)' }}>80396111</span>
              </div>
              <div style={{ background: '#dcfce7', padding: '6px 12px', borderRadius: '6px', color: '#15803d' }}>
                Care Status: <span>Active</span>
              </div>
              <div style={{ background: '#e0f2fe', padding: '6px 12px', borderRadius: '6px', color: 'var(--primary-blue)' }}>
                Health Status: <span>Stable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Summary Row */}
        <div className="health-summary-row">
          {/* Card 1: Heart Rate */}
          <div className="health-summary-card">
            <div className="health-summary-card-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Heart Rate</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>72 <span style={{ fontSize: '12px', fontWeight: '500' }}>BPM</span></div>
            </div>
          </div>

          {/* Card 2: Blood Pressure */}
          <div className="health-summary-card">
            <div className="health-summary-card-icon" style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)' }}>
              <Activity size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Blood Pressure</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>120/80 <span style={{ fontSize: '12px', fontWeight: '500' }}>mmHg</span></div>
            </div>
          </div>

          {/* Card 3: Upcoming Sessions */}
          <div className="health-summary-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/appointments')}>
            <div className="health-summary-card-icon" style={{ backgroundColor: '#e0f7ff', color: '#0284c7' }}>
              <Calendar size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Upcoming Sessions</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>3</div>
            </div>
          </div>

          {/* Card 4: Current Care Plan */}
          <div className="health-summary-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/my-health')}>
            <div className="health-summary-card-icon" style={{ backgroundColor: '#f3e8ff', color: '#a855f7' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Current Care Plan</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>Physiotherapy</div>
            </div>
          </div>
        </div>

        {/* Dashboard Main Grid */}
        <div className="dashboard-grid">
          
          {/* Left Column widgets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Upcoming Appointment */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Upcoming Appointment</h3>
                <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  Confirmed
                </span>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                  src={drEndfarnahanImg} 
                  alt="Dr. Endfarnahan" 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 2px 0' }}>Dr. Endfarnahan, Ph.D</h4>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '4px' }}>Specialization: General Physician</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> Mon, Sep 9, 2023 - 12:00
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Activity size={13} /> Home Visit / Online
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ flex: 1, padding: '10px', fontSize: '13.5px' }}
                  onClick={() => triggerMockAlert('view upcoming appointment details')}
                >
                  View Details
                </button>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '10px', fontSize: '13.5px' }}
                  onClick={() => triggerMockAlert('reschedule')}
                >
                  Reschedule
                </button>
              </div>
            </div>

            {/* Assigned Professional */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0' }}>Assigned Professional</h3>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                  src={robertManerImg} 
                  alt="Robert Maner" 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 2px 0' }}>Robert Maner, PhD</h4>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '2px' }}>Physiotherapist &bull; Experience: 23 years</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#f59e0b', fontSize: '13px' }}>★</span>
                    <strong>4.9</strong>
                    <span style={{ color: 'var(--text-light)' }}>(108 reviews)</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ flex: 1, backgroundColor: 'var(--primary-blue)', color: '#ffffff', border: 'none', padding: '10px', fontSize: '13.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  onClick={() => triggerMockAlert('phone call to Robert Maner')}
                >
                  <Phone size={13} />
                  <span>Call</span>
                </button>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ flex: 1, backgroundColor: '#10b981', color: '#ffffff', border: 'none', padding: '10px', fontSize: '13.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  onClick={handleChat}
                >
                  <MessageSquare size={13} />
                  <span>Chat</span>
                </button>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '10px', fontSize: '13.5px' }}
                  onClick={() => triggerMockAlert('view Robert Maner profile')}
                >
                  View Profile
                </button>
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Recent Activity Timeline</h3>
                <button type="button" style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }} onClick={() => triggerMockAlert('more timeline settings')}>
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-icon completed" style={{ backgroundColor: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-title">Registration Approved</div>
                    <div className="timeline-date">7:39 AM</div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon active" style={{ color: 'var(--primary-blue)', borderColor: 'var(--primary-blue)' }}>
                    <Upload size={12} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-title">Medical Reports Uploaded</div>
                    <div className="timeline-date">3:20 AM</div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Calendar size={12} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-title">Nurse Visit Scheduled</div>
                    <div className="timeline-date">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column widgets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Quick Actions Row */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-medium)', marginBottom: '12px', textTransform: 'uppercase' }}>Quick Actions</h4>
              <div className="quick-action-cards-grid">
                <div className="quick-action-button-card" onClick={() => triggerMockAlert('file upload')}>
                  <div className="quick-action-button-card-icon">
                    <Upload size={18} />
                  </div>
                  <span className="quick-action-button-card-title">Upload Medical Reports</span>
                </div>

                <div className="quick-action-button-card" onClick={() => triggerMockAlert('view prescriptions list')}>
                  <div className="quick-action-button-card-icon">
                    <FileText size={18} />
                  </div>
                  <span className="quick-action-button-card-title">View Prescriptions</span>
                </div>
              </div>
            </div>

            {/* Medical Records Preview */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0' }}>Medical Records Preview</h3>
              
              <div className="pdf-log-list">
                <div className="pdf-log-item" style={{ cursor: 'pointer' }} onClick={() => triggerMockAlert('download document: Latest_Document')}>
                  <div className="pdf-log-left">
                    <FileText size={18} style={{ color: '#ef4444' }} />
                    <div>
                      <div className="pdf-log-name">Latest Document</div>
                      <div className="pdf-log-date">Dec 17, 2023</div>
                    </div>
                  </div>
                  <span className="pdf-log-right">Jan 2023</span>
                </div>

                <div className="pdf-log-item" style={{ cursor: 'pointer' }} onClick={() => triggerMockAlert('download document: Medical_Document')}>
                  <div className="pdf-log-left">
                    <FileText size={18} style={{ color: 'var(--primary-blue)' }} />
                    <div>
                      <div className="pdf-log-name">Medical Document</div>
                      <div className="pdf-log-date">Dec 10, 2023</div>
                    </div>
                  </div>
                  <span className="pdf-log-right">Jan 2023</span>
                </div>

                <div className="pdf-log-item" style={{ cursor: 'pointer' }} onClick={() => triggerMockAlert('download document: Nurse_Document')}>
                  <div className="pdf-log-left">
                    <FileText size={18} style={{ color: 'var(--primary-blue)' }} />
                    <div>
                      <div className="pdf-log-name">Nurse Document</div>
                      <div className="pdf-log-date">Dec 10, 2023</div>
                    </div>
                  </div>
                  <span className="pdf-log-right">Jan 2023</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Notifications</h3>
                <button type="button" style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }} onClick={() => triggerMockAlert('clear notification logs')}>
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '6px', borderRadius: '50%' }}>
                    <Bell size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Renertatient Medical Remmessage...</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>2 months ago</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0' }}>
                  <div style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)', padding: '6px', borderRadius: '50%' }}>
                    <User size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Renertatient Contack Firoratiction...</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>3 months ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Banner */}
            <div style={{ 
              backgroundColor: '#064e3b', 
              color: '#ffffff', 
              borderRadius: '12px', 
              padding: '24px', 
              textAlign: 'left',
              boxShadow: '0 4px 12px rgba(6,78,59,0.15)'
            }}>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0' }}>Emergency Support</h4>
              <p style={{ fontSize: '12px', lineHeight: '1.4', margin: '0 0 20px 0', opacity: 0.85 }}>
                Highlight on secondary card for critical needs.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: '#ef4444', border: 'none', fontWeight: '700', fontSize: '13px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  onClick={() => triggerMockAlert('dispatch emergency call')}
                >
                  <AlertTriangle size={15} />
                  <span>Emergency Help</span>
                </button>
                
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--primary-blue)', border: 'none', fontWeight: '700', fontSize: '13px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  onClick={handleChat}
                >
                  <Headphones size={15} />
                  <span>Contact Care Coordinator</span>
                </button>
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
