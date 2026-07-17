import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Calendar, Clock, User, AlertTriangle, Search, ChevronLeft, ChevronRight, FileText, Headphones, Bell, Plus, MessageSquare, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import drEvelynReedImg from '../assets/dr_evelyn_reed.jpg';
import sarahJenkinsImg from '../assets/sarah_jenkins.jpg';
import robertManerImg from '../assets/robert_maner.jpg';

export default function AppointmentsPage() {
  const navigate = useNavigate();

  // Search/Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Calendar state (October 2023, Selected day 15)
  const [selectedDate, setSelectedDate] = useState(15);

  const handleChat = () => {
    navigate('/chat-support', {
      state: { fullName: 'Sarah J. Miller', selectedService: 'Physiotherapy' }
    });
  };

  const triggerMockAlert = (actionName) => {
    alert(`Triggered mock action: ${actionName}`);
  };

  // Appointment History data
  const historyData = [
    { id: '1', date: 'Oct 15, 2023', professional: 'Dr. Evelyn Reed', service: 'GP Consultation', duration: '30 mins', status: 'Completed' },
    { id: '2', date: 'Oct 15, 2023', professional: 'Sarah Jenkins, RN', service: 'Physiotherapy Session', duration: '20 mins', status: 'Cancelled' },
    { id: '3', date: 'Oct 15, 2023', professional: 'Robert Maner, PhD', service: 'Nurse Visit', duration: '25 mins', status: 'Missed' }
  ];

  // Filter history data
  const filteredHistory = historyData.filter(item => {
    const matchesSearch = item.professional.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === '' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calendar dates generation (Oct 2023 starts on Sunday, so 0 padding days)
  const octoberDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="page-container bg-tinted">
      {/* Reusable Header */}
      <Header />

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title bar & book action button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
              Appointments
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
              Manage your healthcare appointments with ease.
            </p>
          </div>

          <button 
            type="button" 
            className="submit-button"
            style={{ width: 'auto', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => triggerMockAlert('book appointment wizard')}
          >
            <Plus size={16} />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Count Metrics cards row */}
        <div className="appointment-counts-row">
          <div className="appointment-count-card upcoming">
            <div className="appointment-count-icon-box">
              <Calendar size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Upcoming</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>3 Upcoming</div>
            </div>
          </div>

          <div className="appointment-count-card completed">
            <div className="appointment-count-icon-box">
              <Check size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Completed</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>12 Completed</div>
            </div>
          </div>

          <div className="appointment-count-card cancelled">
            <div className="appointment-count-icon-box">
              <AlertTriangle size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Cancelled</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>2 Cancelled</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box">
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Next Date</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>Oct 15, 2023</div>
            </div>
          </div>
        </div>

        {/* 2-Column Appointments Layout */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column schedulers and tables */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Upcoming Appointments section */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>Upcoming Appointments</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Appointment 1 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img 
                        src={drEvelynReedImg} 
                        alt="Dr. Evelyn Reed" 
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                      />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Dr. Evelyn Reed</h4>
                        <div style={{ fontSize: '11px', color: 'var(--text-medium)', marginTop: '1px' }}>Specialization: General Physician</div>
                      </div>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      Confirmed
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '12.5px', color: 'var(--text-medium)', marginBottom: '16px', paddingLeft: '50px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> Oct 15, 2023
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> 10:00 AM
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Activity size={14} /> Consultation Type: <strong>Online</strong>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', paddingLeft: '50px' }}>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('view Dr. Evelyn Reed appointment details')}
                    >
                      View Details
                    </button>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('reschedule')}
                    >
                      Reschedule
                    </button>
                    <button 
                      type="button" 
                      style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '700', cursor: 'pointer', padding: '8px 12px' }}
                      onClick={() => triggerMockAlert('cancel appointment')}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>

                {/* Appointment 2 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img 
                        src={sarahJenkinsImg} 
                        alt="Sarah Jenkins" 
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                      />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Sarah Jenkins, RN</h4>
                        <div style={{ fontSize: '11px', color: 'var(--text-medium)', marginTop: '1px' }}>Specialization: Home Care Nurse</div>
                      </div>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      Confirmed
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '12.5px', color: 'var(--text-medium)', marginBottom: '16px', paddingLeft: '50px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> Oct 15, 2023
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> 10:00 AM
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Activity size={14} /> Consultation Type: <strong>Home Visit</strong>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', paddingLeft: '50px' }}>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('view Sarah Jenkins appointment details')}
                    >
                      View Details
                    </button>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('reschedule')}
                    >
                      Reschedule
                    </button>
                    <button 
                      type="button" 
                      style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '700', cursor: 'pointer', padding: '8px 12px' }}
                      onClick={() => triggerMockAlert('cancel appointment')}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>

                {/* Appointment 3 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <img 
                        src={robertManerImg} 
                        alt="Robert Maner" 
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                      />
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Robert Maner, PhD</h4>
                        <div style={{ fontSize: '11px', color: 'var(--text-medium)', marginTop: '1px' }}>Specialization: Senior Physiotherapist</div>
                      </div>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      Confirmed
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '12.5px', color: 'var(--text-medium)', marginBottom: '16px', paddingLeft: '50px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> Oct 15, 2023
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> 10:00 AM
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Activity size={14} /> Consultation Type: <strong>Home Visit</strong>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', paddingLeft: '50px' }}>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('view Robert Maner appointment details')}
                    >
                      View Details
                    </button>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('reschedule')}
                    >
                      Reschedule
                    </button>
                    <button 
                      type="button" 
                      style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '700', cursor: 'pointer', padding: '8px 12px' }}
                      onClick={() => triggerMockAlert('cancel appointment')}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Appointment History Search Filter Table */}
            <div className="history-table-section">
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0', textAlign: 'left' }}>
                Appointment History
              </h3>

              {/* Filter Toolbar */}
              <div className="table-filter-bar">
                <div className="table-search-input-container">
                  <Search size={16} />
                  <input 
                    type="text" 
                    placeholder="Search by professional or service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <select 
                  className="table-filter-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">Filter by Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Missed">Missed</option>
                </select>

                <select 
                  className="table-filter-select"
                  value={dateFilter}
                  onChange={(e) => { setDateFilter(e.target.value); triggerMockAlert(`filter date option: ${e.target.value}`); }}
                >
                  <option value="">Filter by Date</option>
                  <option value="Last30Days">Last 30 Days</option>
                  <option value="Last3Months">Last 3 Months</option>
                  <option value="Year2023">Year 2023</option>
                </select>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table className="appointment-history-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Healthcare Professional</th>
                      <th>Service Type</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHistory.map((row) => (
                      <tr key={row.id}>
                        <td style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{row.date}</td>
                        <td style={{ fontWeight: '600' }}>{row.professional}</td>
                        <td>{row.service}</td>
                        <td>{row.duration}</td>
                        <td>
                          <span className={`badge-status ${row.status.toLowerCase()}`}>
                            {row.status}
                          </span>
                        </td>
                        <td>
                          <a 
                            href="#view-summary" 
                            style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none' }}
                            onClick={(e) => { e.preventDefault(); triggerMockAlert(`view history summary for ${row.professional}`); }}
                          >
                            View Summary
                          </a>
                        </td>
                      </tr>
                    ))}
                    {filteredHistory.length === 0 && (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-light)', fontWeight: '600' }}>
                          No appointment history found matching query filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column calendar picker, actions, and sidebar alerts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Calendar View Widget */}
            <div className="calendar-widget-card">
              <div className="calendar-month-selector">
                <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-medium)' }} onClick={() => triggerMockAlert('previous month')}>
                  <ChevronLeft size={18} />
                </button>
                <strong style={{ fontSize: '13.5px', color: 'var(--text-dark)', fontWeight: '800', textTransform: 'uppercase' }}>October 2023</strong>
                <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-medium)' }} onClick={() => triggerMockAlert('next month')}>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Days Header */}
              <div className="calendar-days-header">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>

              {/* Days Grid */}
              <div className="calendar-days-grid">
                {/* October 1st, 2023 was Sunday, so no empty pad days needed! */}
                {octoberDays.map((day) => (
                  <div 
                    key={day}
                    className={`calendar-day-cell ${selectedDate === day ? 'selected' : ''}`}
                    onClick={() => { setSelectedDate(day); triggerMockAlert(`select calendar date day: ${day}`); }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-medium)', marginBottom: '12px', textTransform: 'uppercase' }}>Quick Actions</h4>
              
              <div className="quick-action-cards-grid" style={{ gap: '10px' }}>
                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => triggerMockAlert('book appointment wizard')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <Calendar size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Book New Appointment</span>
                </div>

                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => navigate('/my-health')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <FileText size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>View Care Plan</span>
                </div>

                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={handleChat}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <Headphones size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Contact Healthcare</span>
                </div>

                <div className="quick-action-button-card red-style" style={{ minHeight: '80px', padding: '12px' }} onClick={() => triggerMockAlert('dispatch emergency call')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <AlertTriangle size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px', color: '#b91c1c' }}>Emergency Support</span>
                </div>
              </div>
            </div>

            {/* Sidebar Notifications Alerts */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--primary-blue)' }}>
                <Bell size={18} />
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Notifications</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', marginTop: '6px' }}></span>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Appointment Tomorrow</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '1px' }}>Dec 17, 2023</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', marginTop: '6px' }}></span>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Appointment Confirmed</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '1px' }}>Dec 15, 2023</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b', marginTop: '6px' }}></span>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Appointment Rescheduled</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '1px' }}>Jan 10, 2023</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', marginTop: '6px' }}></span>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Follow-up Recommended</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '1px' }}>Jan 12, 2023</div>
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
