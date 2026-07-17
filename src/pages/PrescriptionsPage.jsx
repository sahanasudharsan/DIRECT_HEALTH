import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Clock, FileText, User, Headphones, Activity, AlertTriangle, AlertCircle, Calendar, Download, Search, Pill, ShieldAlert, ArrowDown, Bell } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrescriptionsPage() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [doctorFilter, setDoctorFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

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
      {/* Navigation Header */}
      <Header />

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
              Prescriptions
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
              View your current medications and access previous prescriptions.
            </p>
          </div>

          <button 
            type="button" 
            className="submit-button"
            style={{ width: 'auto', padding: '10px 20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => triggerMockAlert('download all prescriptions')}
          >
            <Download size={16} />
            <span>Download All Prescriptions</span>
          </button>
        </div>

        {/* 4 Counts Cards */}
        <div className="appointment-counts-row">
          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)' }}>
              <Pill size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Active Prescriptions</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>3 <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-light)' }}>Active</span></div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f7ff', color: '#0284c7' }}>
              <Pill size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Medicines Taking</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>5 <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-light)' }}>Medicines</span></div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#f1f5f9', color: 'var(--text-medium)' }}>
              <Pill size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Previous Prescriptions</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>14 <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-light)' }}>Previous</span></div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e6fdf0', color: '#10b981' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Last Updated</div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>May 10, 2024</div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="table-filter-bar" style={{ marginBottom: '24px' }}>
          <div className="table-search-input-container">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search Medicine..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select 
            className="table-filter-select"
            value={doctorFilter}
            onChange={(e) => setDoctorFilter(e.target.value)}
          >
            <option value="">Filter by Doctor</option>
            <option value="Endfarnahan">Dr. Endfarnahan</option>
            <option value="Maner">Robert Maner, PhD</option>
          </select>

          <select 
            className="table-filter-select"
            onClick={() => triggerMockAlert('filter by date')}
          >
            <option value="">Filter by Date</option>
            <option value="Last30Days">Last 30 Days</option>
            <option value="Last6Months">Last 6 Months</option>
          </select>

          <select 
            className="table-filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status (Active / Completed)</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* 2-Column Prescriptions Grid Layout */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column active list and table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Current Medicines */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>Current Medicines</h3>
              
              <div className="prescriptions-grid">
                
                {/* Medicine 1 */}
                <div className="medicine-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-blue)' }}>
                      <Pill size={18} />
                      <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Amoxicillin</h4>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      Active
                    </span>
                  </div>

                  <div className="medicine-card-grid">
                    <div>
                      <div className="medicine-card-cell-label">Dosage</div>
                      <div className="medicine-card-cell-value">500 mg</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Start Date</div>
                      <div className="medicine-card-cell-value">May 12, 2024</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Frequency</div>
                      <div className="medicine-card-cell-value">Twice Daily</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">End Date</div>
                      <div className="medicine-card-cell-value">May 19, 2024</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Duration</div>
                      <div className="medicine-card-cell-value">7 Days</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Before/After Food</div>
                      <div className="medicine-card-cell-value">After</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '16px' }}>
                    Prescribed By: <strong>Dr. Endfarnahan, Ph.D</strong>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('view prescription details for Amoxicillin')}
                    >
                      View Prescription
                    </button>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('download prescription Amoxicillin')}
                    >
                      Download
                    </button>
                  </div>
                </div>

                {/* Medicine 2 */}
                <div className="medicine-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-blue)' }}>
                      <Pill size={18} />
                      <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: 0 }}>Atorvastatin</h4>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10.5px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
                      Active
                    </span>
                  </div>

                  <div className="medicine-card-grid">
                    <div>
                      <div className="medicine-card-cell-label">Dosage</div>
                      <div className="medicine-card-cell-value">20 mg</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Start Date</div>
                      <div className="medicine-card-cell-value">May 10, 2024</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Frequency</div>
                      <div className="medicine-card-cell-value">Once Daily</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">End Date</div>
                      <div className="medicine-card-cell-value">June 9, 2024</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Duration</div>
                      <div className="medicine-card-cell-value">30 Days</div>
                    </div>
                    <div>
                      <div className="medicine-card-cell-label">Before/After Food</div>
                      <div className="medicine-card-cell-value">After</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: 'var(--text-medium)', marginBottom: '16px' }}>
                    Prescribed By: <strong>Robert Maner, PhD</strong>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('view prescription details for Atorvastatin')}
                    >
                      View Prescription
                    </button>
                    <button 
                      type="button" 
                      className="submit-button"
                      style={{ flex: 1, backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)', padding: '8px', fontSize: '13px' }}
                      onClick={() => triggerMockAlert('download prescription Atorvastatin')}
                    >
                      Download
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Previous Prescriptions History */}
            <div className="history-table-section">
              <h3 style={{ fontSize: '16.5px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0', textAlign: 'left' }}>
                Previous Prescriptions
              </h3>

              <div style={{ overflowX: 'auto' }}>
                <table className="appointment-history-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Doctor Name</th>
                      <th>Hospital</th>
                      <th>No. of Medicines</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Oct 15, 2023</td>
                      <td style={{ fontWeight: '600' }}>Dr. Endfarnahan, Ph.D</td>
                      <td>Physiotherapists</td>
                      <td>2</td>
                      <td>
                        <span className="badge-status completed">Completed</span>
                      </td>
                      <td>
                        <a 
                          href="#view-rx" 
                          style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none' }}
                          onClick={(e) => { e.preventDefault(); triggerMockAlert('view previous prescription summary (Oct 15)'); }}
                        >
                          View Download
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Aug 02, 2023</td>
                      <td style={{ fontWeight: '600' }}>Dr. Sarah Wilson</td>
                      <td>City General</td>
                      <td>1</td>
                      <td>
                        <span className="badge-status completed">Completed</span>
                      </td>
                      <td>
                        <a 
                          href="#view-rx" 
                          style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none' }}
                          onClick={(e) => { e.preventDefault(); triggerMockAlert('view previous prescription summary (Aug 02)'); }}
                        >
                          View Download
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontWeight: '700', color: 'var(--text-dark)' }}>May 12, 2023</td>
                      <td style={{ fontWeight: '600' }}>Robert Maner, PhD</td>
                      <td>Health First Clinic</td>
                      <td>4</td>
                      <td>
                        <span className="badge-status cancelled">Cancelled</span>
                      </td>
                      <td>
                        <a 
                          href="#view-rx" 
                          style={{ color: 'var(--primary-blue)', fontWeight: '700', textDecoration: 'none' }}
                          onClick={(e) => { e.preventDefault(); triggerMockAlert('view previous prescription summary (May 12)'); }}
                        >
                          View Download
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column support cards and instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Quick Actions */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-medium)', marginBottom: '12px', textTransform: 'uppercase' }}>Quick Actions</h4>
              
              <div className="quick-action-cards-grid" style={{ gap: '10px' }}>
                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => triggerMockAlert('download prescription')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <Download size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Download Prescription</span>
                </div>

                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => navigate('/records')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <FileText size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>View Medical Records</span>
                </div>

                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={() => navigate('/appointments')}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <Calendar size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Book Follow-up</span>
                </div>

                <div className="quick-action-button-card" style={{ minHeight: '80px', padding: '12px' }} onClick={handleChat}>
                  <div className="quick-action-button-card-icon" style={{ width: '28px', height: '28px' }}>
                    <Headphones size={15} />
                  </div>
                  <span className="quick-action-button-card-title" style={{ fontSize: '11px' }}>Contact Doctor</span>
                </div>
              </div>
            </div>

            {/* Doctor's Instructions */}
            <div className="yellow-instructions-card">
              <h4>
                <AlertCircle size={16} />
                <span>Doctor's Instructions</span>
              </h4>
              <ul className="instructions-list">
                <li>Take medicines after meals.</li>
                <li>Drink plenty of water.</li>
                <li>Complete the full course of medication.</li>
                <li>Schedule a follow-up visit after 7 days.</li>
              </ul>
            </div>

            {/* Notifications alerts */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--primary-blue)' }}>
                <Bell size={18} />
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>Notifications</h3>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', paddingBottom: '10px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', marginTop: '6px' }}></span>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--text-dark)', fontSize: '12.5px' }}>Next session note has been added</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '1px' }}>2 hours ago</div>
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
