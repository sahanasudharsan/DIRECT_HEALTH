import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Clock, FileText, Phone, Star, Play, Calendar, User, Activity, AlertCircle, Upload, BarChart2, MessageSquare, Headphones } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import evelynCarterImg from '../assets/evelyn_carter.jpg';

export default function CareBeginsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve user details
  const fullName = location.state?.fullName || 'Sarah J. Miller';
  const selectedService = location.state?.selectedService || 'General Wellness Consultation';

  // Live countdown state in seconds (1 day, 9 hours, 38 mins, 22 secs)
  const INITIAL_SECONDS = 1 * 86400 + 9 * 3600 + 38 * 60 + 22;
  const [timeLeft, setTimeLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format seconds to Days, Hours, Minutes, Seconds
  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const time = formatTime(timeLeft);

  const handleContinuePayment = () => {
    navigate('/payment-details', {
      state: { fullName, selectedService }
    });
  };

  const handleChat = () => {
    navigate('/chat-support', {
      state: { fullName, selectedService }
    });
  };

  const triggerMockAlert = (actionName) => {
    alert(`Triggered mock action: ${actionName}`);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '40px 20px', maxWidth: '1080px' }}>
        
        {/* Centered Logo Header */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Outer Card Wrapper */}
        <div className="auth-card" style={{ maxWidth: '1040px', padding: '40px' }}>
          
          {/* Centered Header check */}
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
            Care Begins
          </h2>
          <p className="auth-subtitle" style={{ fontSize: '14.5px', marginBottom: '36px' }}>
            Your healthcare journey has officially started.
          </p>

          {/* 2-Column Dashboard layout */}
          <div className="dashboard-grid profile-timeline-layout">
            
            {/* Left Column - Main dashboard actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* 4 grid overview cards */}
              <div className="overview-grid">
                
                {/* 1. Assigned Professional */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', textAlign: 'left' }}>
                    <img 
                      src={evelynCarterImg} 
                      alt="Dr. Evelyn Carter" 
                      style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Assigned Professional</div>
                      <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-dark)' }}>Dr. Evelyn Carter</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-medium)' }}>Physiotherapist</div>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--primary-blue)', border: '1px solid var(--primary-blue)', fontSize: '12.5px', padding: '6px 12px', width: '100%', marginTop: '8px' }}
                    onClick={handleChat}
                  >
                    Contact Professional
                  </button>
                </div>

                {/* 2. Upcoming Session */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: 'var(--primary-blue)' }}>
                      <Clock size={16} />
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Upcoming Session</span>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '4px' }}>May 20, 2024</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-medium)' }}>10:00 AM (EST)</div>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '9px', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Starts In</div>
                    <div className="countdown-timer">
                      <div className="countdown-unit">
                        <div>{time.days}</div>
                        <div className="countdown-label">D</div>
                      </div>
                      <div className="countdown-divider">:</div>
                      <div className="countdown-unit">
                        <div>{time.hours}</div>
                        <div className="countdown-label">H</div>
                      </div>
                      <div className="countdown-divider">:</div>
                      <div className="countdown-unit">
                        <div>{time.minutes}</div>
                        <div className="countdown-label">M</div>
                      </div>
                      <div className="countdown-divider">:</div>
                      <div className="countdown-unit secs">
                        <div>{time.seconds}</div>
                        <div className="countdown-label">S</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Care Plan */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: 'var(--primary-blue)' }}>
                      <FileText size={16} />
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Care Plan</span>
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>Post-Surgery recovery</div>
                    <p style={{ fontSize: '11.5px', color: 'var(--text-medium)', margin: '2px 0 0', lineHeight: '1.3', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      Focus on lower lumbar mobility and pain...
                    </p>
                  </div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#f1f5f9', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12.5px', padding: '6px 12px', width: '100%', marginTop: '8px' }}
                    onClick={() => triggerMockAlert('view care plan')}
                  >
                    View Care Plan
                  </button>
                </div>

                {/* 4. Emergency Contact */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', color: '#ef4444' }}>
                      <AlertCircle size={16} />
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Emergency Contact</span>
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>John Carter</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-medium)' }}>Brother</div>
                  </div>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ef4444', color: '#ffffff', border: 'none', fontSize: '12.5px', padding: '6px 12px', width: '100%', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onClick={() => triggerMockAlert('call brother Robert/John')}
                  >
                    <Phone size={13} />
                    <span>Call Now</span>
                  </button>
                </div>

              </div>

              {/* Today's Session card */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Today's Session</h3>
                  <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Active Now
                  </span>
                </div>
                
                <div style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '600' }}>
                  Monday, May 18, 2024
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13.5px', marginBottom: '24px' }}>
                  <div>
                    <strong style={{ color: 'var(--text-medium)' }}>Professional Name:</strong>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)', marginTop: '4px' }}>Dr. Evelyn Carter</div>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-medium)' }}>Scheduled Time:</strong>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)', marginTop: '4px' }}>10:00 AM</div>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <strong style={{ color: 'var(--text-medium)' }}>Session Type:</strong>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)', marginTop: '4px' }}>Initial Assessment & Mobility Test</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ flex: 1, padding: '10px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onClick={() => triggerMockAlert('join video consultation')}
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Join Video Session</span>
                  </button>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '10px', fontSize: '14px' }}
                    onClick={() => triggerMockAlert('reschedule')}
                  >
                    Reschedule
                  </button>
                </div>
              </div>

              {/* Action Toolbar */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', padding: '8px 14px', fontSize: '12.5px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', width: 'auto' }}
                  onClick={() => triggerMockAlert('view care plan')}
                >
                  <FileText size={14} />
                  <span>View Care Plan</span>
                </button>
                
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', padding: '8px 14px', fontSize: '12.5px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', width: 'auto' }}
                  onClick={() => triggerMockAlert('track sessions history')}
                >
                  <BarChart2 size={14} />
                  <span>Track Sessions</span>
                </button>

                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', padding: '8px 14px', fontSize: '12.5px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', width: 'auto' }}
                  onClick={handleChat}
                >
                  <MessageSquare size={14} />
                  <span>Contact Professional</span>
                </button>

                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', padding: '8px 14px', fontSize: '12.5px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', width: 'auto' }}
                  onClick={() => triggerMockAlert('upload medical reports')}
                >
                  <Upload size={14} />
                  <span>Upload Reports</span>
                </button>
              </div>

              {/* CONTINUE PAYMENT CTA */}
              <div style={{ marginTop: '16px' }}>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ padding: '12px 40px', fontSize: '15px' }}
                  onClick={handleContinuePayment}
                >
                  Continue Payment
                </button>
              </div>

            </div>

            {/* Right Column - Timeline and Help Widget */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Timeline Card */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--primary-blue)' }}>
                  <Activity size={18} />
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Treatment Timeline</h3>
                </div>

                <div className="timeline-container">
                  <div className="timeline-item">
                    <div className="timeline-icon completed">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">Session Scheduled</div>
                      <div className="timeline-date">May 15, 2024</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon completed">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">Professional Assigned</div>
                      <div className="timeline-date">May 16, 2024</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon active">
                      <Clock size={12} strokeWidth={2.5} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">First Session</div>
                      <div className="timeline-date" style={{ color: 'var(--primary-blue)', fontWeight: '700' }}>In Progress</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <User size={12} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">Progress Tracking</div>
                      <div className="timeline-date">Estimated: June 2024</div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <Star size={12} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-title">Recovery Journey</div>
                      <div className="timeline-date">Goal: Mobility Recovery</div>
                    </div>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0 12px' }} />

                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)', marginBottom: '8px', lineHeight: '1.4' }}>
                    Complete your first session to unlock detailed progress metrics.
                  </div>
                  <a 
                    href="#timeline" 
                    style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none' }}
                    onClick={(e) => { e.preventDefault(); triggerMockAlert('full timeline view'); }}
                  >
                    Full Timeline Details &rarr;
                  </a>
                </div>
              </div>

              {/* Need Help Blue Widget */}
              <div style={{ 
                backgroundColor: 'var(--primary-blue)', 
                color: '#ffffff', 
                borderRadius: '12px', 
                padding: '24px', 
                textAlign: 'left',
                boxShadow: '0 4px 14px rgba(0, 90, 204, 0.15)'
              }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <Headphones size={22} />
                  <h4 style={{ fontSize: '16px', fontWeight: '800', margin: 0 }}>Need help?</h4>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '0 0 20px', opacity: 0.9 }}>
                  Our support team is available 24/7 for technical and clinical assistance.
                </p>
                <button 
                  type="button" 
                  className="submit-button"
                  style={{ backgroundColor: '#ffffff', color: 'var(--primary-blue)', border: 'none', fontSize: '13px', padding: '10px 20px', width: '100%', fontWeight: '700' }}
                  onClick={handleChat}
                >
                  Chat Support
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
