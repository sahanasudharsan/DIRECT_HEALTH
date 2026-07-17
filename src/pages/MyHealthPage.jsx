import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Clock, FileText, User, Headphones, Activity, AlertTriangle, ArrowRight, BookOpen, AlertCircle, FileSpreadsheet, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import drEvelynReedImg from '../assets/dr_evelyn_reed.jpg';
import robertManerImg from '../assets/robert_maner.jpg';

export default function MyHealthPage() {
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

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px' }}>
        
        {/* Title Block */}
        <div style={{ textAlign: 'left', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
            Care Plan & Session Tracking
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
            Monitor your treatment progress and upcoming care sessions.
          </p>
        </div>

        {/* 3-Card Summary Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr', gap: '20px', marginBottom: '24px' }}>
          
          {/* 1. Care Plan Summary */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-medium)', margin: 0, textTransform: 'uppercase' }}>Care Plan Summary</h3>
                <span style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  Active
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13.5px' }}>
                <div><strong>Care Plan Name:</strong> Post-Surgery Recovery</div>
                <div><strong>Treatment Duration:</strong> 12 Weeks</div>
                <div><strong>Expected Completion:</strong> Nov 24, 2023</div>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '14px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifycontent: 'space-between', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img 
                  src={drEvelynReedImg} 
                  alt="Dr. Evelyn Reed" 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--text-dark)' }}>Dr. Evelyn Reed</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>Assigned Doctor</div>
                </div>
              </div>
              
              <a 
                href="#doctor-profile" 
                style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none' }}
                onClick={(e) => { e.preventDefault(); triggerMockAlert('view doctor profile details'); }}
              >
                View Details
              </a>
            </div>
          </div>

          {/* 2. Recovery Progress */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-medium)', margin: '0 0 14px 0', textTransform: 'uppercase' }}>
              Recovery Progress
            </h3>

            <div className="progress-list">
              <div className="progress-item">
                <div className="progress-header">
                  <span>Pain Level</span>
                  <span>30%</span>
                </div>
                <div className="progress-track-bg">
                  <div className="progress-track-fill blue-bar" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-header">
                  <span>Exercise Completion</span>
                  <span>80%</span>
                </div>
                <div className="progress-track-bg">
                  <div className="progress-track-fill blue-bar" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-header">
                  <span>Mobility Improvement</span>
                  <span>55%</span>
                </div>
                <div className="progress-track-bg">
                  <div className="progress-track-fill blue-bar" style={{ width: '55%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-header" style={{ fontWeight: '800', color: 'var(--text-dark)' }}>
                  <span>Overall Progress</span>
                  <span>42%</span>
                </div>
                <div className="progress-track-bg" style={{ height: '8px' }}>
                  <div className="progress-track-fill overall" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Quick Actions */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'left' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-medium)', margin: '0 0 14px 0', textTransform: 'uppercase' }}>
              Quick Actions
            </h3>
            
            <div className="quick-action-cards-grid" style={{ gap: '10px' }}>
              <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => triggerMockAlert('view care plan document')}>
                <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                  <FileText size={15} />
                </div>
                <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>View Care Plan</span>
              </div>

              <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => navigate('/appointments')}>
                <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                  <Calendar size={15} />
                </div>
                <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Book Next Session</span>
              </div>

              <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={handleChat}>
                <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                  <Headphones size={15} />
                </div>
                <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Contact Care Team</span>
              </div>

              <div className="quick-action-button-card red-style" style={{ minHeight: '80px', padding: '12px' }} onClick={() => triggerMockAlert('dispatch emergency call')}>
                <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                  <AlertTriangle size={15} />
                </div>
                <span className="quick-action-button-card-title" style={{ fontSize: '11px', color: '#b91c1c' }}>Emergency Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2-Column Dashboard Main Section */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Treatment Timeline */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 20px 0' }}>Treatment Timeline</h3>

              <div className="timeline-horizontal-wrapper">
                <div className="timeline-horizontal-line"></div>
                <div className="timeline-horizontal-line-progress" style={{ width: '60%' }}></div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle completed">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="timeline-horizontal-label completed">Registration Completed</span>
                </div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle completed">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="timeline-horizontal-label completed">Profile Verified</span>
                </div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle completed">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="timeline-horizontal-label completed">Care Plan Created</span>
                </div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle active">
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="timeline-horizontal-label active">Current Session (Oct 15)</span>
                </div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle">5</div>
                  <span className="timeline-horizontal-label">Recovery Progress</span>
                </div>

                <div className="timeline-horizontal-step">
                  <div className="timeline-horizontal-circle">6</div>
                  <span className="timeline-horizontal-label">Treatment Completed</span>
                </div>
              </div>
            </div>

            {/* Next Scheduled Session */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary-blue)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Next Scheduled Session
                </div>
                <span style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)', fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                  Upcoming
                </span>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                  src={robertManerImg} 
                  alt="Robert Maner" 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                  <div style={{ gridColumn: 'span 2' }}>
                    <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 2px 0' }}>Robert Maner, PhD</h4>
                    <div style={{ fontSize: '12px', color: 'var(--text-medium)' }}>Senior Physiotherapist</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>Date</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '2px' }}>Oct 15, 2023</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>Time</div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '2px' }}>10:00 AM</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ flex: 1, padding: '10px', fontSize: '13.5px' }}
                  onClick={() => triggerMockAlert('view session details')}
                >
                  View Details
                </button>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '10px', fontSize: '13.5px' }}
                  onClick={handleChat}
                >
                  Contact Professional
                </button>
              </div>
            </div>

            {/* Session History Grid */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Session History</h3>
                <a 
                  href="#session-history" 
                  style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none' }}
                  onClick={(e) => { e.preventDefault(); triggerMockAlert('view all sessions list'); }}
                >
                  View All Sessions
                </a>
              </div>

              {/* Grid of session cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                
                {/* Session 4 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Session 4</strong>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10px', fontWeight: '800', padding: '2.5px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Completed
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '8px' }}>Oct 01, 2023 &bull; 45 mins</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)', marginBottom: '12px' }}>Provider: Dr. Evelyn Reed</div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px' }}
                    onClick={() => triggerMockAlert('view report Session 4')}
                  >
                    View Report
                  </button>
                </div>

                {/* Session 3 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Session 3</strong>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10px', fontWeight: '800', padding: '2.5px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Completed
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '8px' }}>Sep 15, 2023 &bull; 30 mins</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)', marginBottom: '12px' }}>Provider: Robert Maner, PhD</div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px' }}
                    onClick={() => triggerMockAlert('view report Session 3')}
                  >
                    View Report
                  </button>
                </div>

                {/* Session 2 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Session 2</strong>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10px', fontWeight: '800', padding: '2.5px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Completed
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '8px' }}>Sep 05, 2023 &bull; 60 mins</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)', marginBottom: '12px' }}>Provider: Dr. Evelyn Reed</div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px' }}
                    onClick={() => triggerMockAlert('view report Session 2')}
                  >
                    View Report
                  </button>
                </div>

                {/* Session 1 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', backgroundColor: '#f8fafc' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)' }}>Session 1</strong>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10px', fontWeight: '800', padding: '2.5px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      Completed
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '8px' }}>Sep 01, 2023 &bull; 30 mins</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)', marginBottom: '12px' }}>Provider: Dr. Evelyn Reed</div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px' }}
                    onClick={() => triggerMockAlert('view report Session 1')}
                  >
                    View Report
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Notifications Card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Notifications</h3>
                  <span style={{ backgroundColor: 'var(--primary-blue)', color: '#ffffff', fontSize: '11px', fontWeight: '800', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    3
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* Notification 1 */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ backgroundColor: '#f0f7ff', color: 'var(--primary-blue)', padding: '6px', borderRadius: '50%' }}>
                    <Clock size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Next session reminder</div>
                    <p style={{ fontSize: '12px', color: 'var(--text-medium)', margin: '2px 0 0', lineHeight: '1.4' }}>
                      Your session with Dr. Maner is tomorrow at 10 AM.
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '4px' }}>2 hours ago</div>
                  </div>
                </div>

                {/* Notification 2 */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ backgroundColor: '#f8fafc', color: 'var(--text-medium)', padding: '6px', borderRadius: '50%', border: '1px solid #cbd5e1' }}>
                    <FileText size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>New treatment note added</div>
                    <p style={{ fontSize: '12px', color: 'var(--text-medium)', margin: '2px 0 0', lineHeight: '1.4' }}>
                      Dr. Evelyn Reed added a post-session summary for Session 4.
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '4px' }}>Yesterday, 4:15 PM</div>
                  </div>
                </div>

                {/* Notification 3 */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: '#e6fdf0', color: '#10b981', padding: '6px', borderRadius: '50%' }}>
                    <RefreshCw size={14} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Exercise plan updated</div>
                    <p style={{ fontSize: '12px', color: 'var(--text-medium)', margin: '2px 0 0', lineHeight: '1.4' }}>
                      3 new exercises have been added to your daily recovery routine.
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '4px' }}>Oct 12, 2023</div>
                  </div>
                </div>

              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0 10px' }} />
              
              <a 
                href="#notifications" 
                style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none', display: 'block', textAlign: 'center' }}
                onClick={(e) => { e.preventDefault(); triggerMockAlert('view notification history logs'); }}
              >
                View Notification History
              </a>
            </div>

            {/* Plan Completion Card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>Plan Completion</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0' }}>12 Weeks total</h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '700', color: 'var(--text-medium)' }}>
                  <span>Completed: 5 Weeks</span>
                  <span>Remaining: 7 Weeks</span>
                </div>
                <div className="progress-track-bg" style={{ height: '8px' }}>
                  <div className="progress-track-fill" style={{ width: '41.6%', backgroundColor: '#10b981' }}></div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f0f7ff', border: '1px solid #d0e7ff', borderRadius: '8px', padding: '12px 14px', display: 'flex', gap: '8px', alignItems: 'flex-start', color: '#1e3a8a', fontSize: '12.5px' }}>
                <AlertCircle size={16} style={{ color: 'var(--primary-blue)', flexShrink: 0, marginTop: '1px' }} />
                <div>
                  "On track for full recovery by end of November."
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
