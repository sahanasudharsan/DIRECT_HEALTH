import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Upload, Search, FileText, Download, Eye, AlertCircle, ShieldAlert, MoreHorizontal, Grid, List, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MedicalRecordsPage() {
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
      {/* Navigation Header */}
      <Header />

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px' }}>
        
        {/* Title bar */}
        <div style={{ textAlign: 'left', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
            Medical Records
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
            Manage and secure clinical documentation for patient continuity of care.
          </p>
        </div>

        {/* 4 Counts Cards */}
        <div className="appointment-counts-row">
          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>+12 this month</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-light)' }}>Total Records</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>1,284</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f7ff', color: '#0284c7' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>Latest 2 days ago</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-light)' }}>Lab Reports</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>412</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>8 Pending Review</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-light)' }}>Scan Reports</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>186</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e6fdf0', color: '#10b981' }}>
              <FileText size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>Last 24h</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-light)' }}>Recent Uploads</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>24</div>
            </div>
          </div>
        </div>

        {/* 2-Column Medical Records Layout */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column - Uploaders and records list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* File Upload zone */}
            <div 
              style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '40px 20px', backgroundColor: '#ffffff', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
              onClick={() => triggerMockAlert('browse files')}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f0f7ff', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Upload size={22} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
                Upload New Medical Record
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-medium)', margin: '0 0 16px 0' }}>
                Drag and drop clinical files or <span style={{ color: 'var(--primary-blue)', fontWeight: '700' }}>browse your computer</span>
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-medium)', background: '#f1f5f9', padding: '4px 10px', borderRadius: '4px' }}>PDF</span>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-medium)', background: '#f1f5f9', padding: '4px 10px', borderRadius: '4px' }}>JPG, PNG</span>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-medium)', background: '#f1f5f9', padding: '4px 10px', borderRadius: '4px' }}>Up to 10MB</span>
              </div>
            </div>

            {/* Filter toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  type="button" 
                  className="table-filter-select"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', padding: '8px 14px' }}
                  onClick={() => triggerMockAlert('category filters')}
                >
                  <span>Category</span>
                </button>
                <button 
                  type="button" 
                  className="table-filter-select"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', padding: '8px 14px' }}
                  onClick={() => triggerMockAlert('date range filters')}
                >
                  <span>Date Range</span>
                </button>
                <button 
                  type="button" 
                  className="table-filter-select"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '700', padding: '8px 14px' }}
                  onClick={() => triggerMockAlert('sorting options')}
                >
                  <span>Sort By</span>
                </button>
              </div>

              {/* Grid/List toggles */}
              <div style={{ display: 'flex', border: '1px solid #cbd5e1', borderRadius: '6px', overflow: 'hidden' }}>
                <button type="button" style={{ background: '#f1f5f9', border: 'none', padding: '8px 10px', display: 'flex', alignItems: 'center', color: 'var(--text-medium)', cursor: 'pointer' }} onClick={() => triggerMockAlert('toggle list view')}>
                  <List size={16} />
                </button>
                <button type="button" style={{ background: '#ffffff', border: 'none', padding: '8px 10px', display: 'flex', alignItems: 'center', color: 'var(--text-light)', borderLeft: '1px solid #cbd5e1', cursor: 'pointer' }} onClick={() => triggerMockAlert('toggle grid view')}>
                  <Grid size={16} />
                </button>
              </div>
            </div>

            {/* Document list table */}
            <div className="history-table-section" style={{ padding: '16px' }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="appointment-history-table">
                  <thead>
                    <tr>
                      <th>Report Name</th>
                      <th>Category</th>
                      <th>Doctor / Hospital</th>
                      <th>Upload Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr>
                      <td style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <FileText size={18} style={{ color: '#ef4444', flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Cardiology_Report_Q3.pdf</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>2.4 MB</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '12px', background: '#f1f5f9', color: 'var(--text-medium)' }}>
                          Scan Report
                        </span>
                      </td>
                      <td style={{ fontWeight: '600' }}>Dr. Alan Turing / St. Mary Hospital</td>
                      <td>Oct 12, 2023</td>
                      <td>
                        <div style={{ display: 'flex', gap: '12px', color: 'var(--text-medium)' }}>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('preview Cardiology_Report_Q3')}>
                            <Eye size={16} />
                          </button>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('download Cardiology_Report_Q3')}>
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <FileText size={18} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Blood_Chemistry_Panel.pdf</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>1.1 MB</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '12px', background: '#f1f5f9', color: 'var(--text-medium)' }}>
                          Lab Report
                        </span>
                      </td>
                      <td style={{ fontWeight: '600' }}>Dr. Grace Hopper / General Clinic</td>
                      <td>Sep 28, 2023</td>
                      <td>
                        <div style={{ display: 'flex', gap: '12px', color: 'var(--text-medium)' }}>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('preview Blood_Chemistry_Panel')}>
                            <Eye size={16} />
                          </button>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('download Blood_Chemistry_Panel')}>
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <FileText size={18} style={{ color: 'var(--primary-blue)', flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Insurance_Claim_292.pdf</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>842 KB</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '12px', background: '#f1f5f9', color: 'var(--text-medium)' }}>
                          Insurance
                        </span>
                      </td>
                      <td style={{ fontWeight: '600' }}>BlueShield West</td>
                      <td>Sep 15, 2023</td>
                      <td>
                        <div style={{ display: 'flex', gap: '12px', color: 'var(--text-medium)' }}>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('preview Insurance_Claim_292')}>
                            <Eye size={16} />
                          </button>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('download Insurance_Claim_292')}>
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                      <td style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <FileText size={18} style={{ color: '#ef4444', flexShrink: 0 }} />
                          <div>
                            <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>XRay_Lumbar_Spine.jpg</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>5.7 MB</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '12px', background: '#f1f5f9', color: 'var(--text-medium)' }}>
                          Radiology
                        </span>
                      </td>
                      <td style={{ fontWeight: '600' }}>Dr. Elizabeth Blackwell / Imaging Center</td>
                      <td>Aug 30, 2023</td>
                      <td>
                        <div style={{ display: 'flex', gap: '12px', color: 'var(--text-medium)' }}>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('preview XRay_Lumbar_Spine')}>
                            <Eye size={16} />
                          </button>
                          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} onClick={() => triggerMockAlert('download XRay_Lumbar_Spine')}>
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--text-light)', fontWeight: '600' }}>Showing 1-4 of 1,284 records</span>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px', width: 'auto' }}
                    onClick={() => triggerMockAlert('previous page')}
                  >
                    Previous
                  </button>
                  <button 
                    type="button" 
                    className="submit-button"
                    style={{ backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1', fontSize: '12px', padding: '6px 12px', width: 'auto' }}
                    onClick={() => triggerMockAlert('next page')}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column sidebar audit logs and recent reports */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* HIPAA card */}
            <div className="black-notice-card">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', color: '#10b981' }}>
                <Shield size={18} />
                <h4 style={{ fontSize: '13.5px', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  HIPAA Compliant Storage
                </h4>
              </div>
              <p style={{ fontSize: '12px', lineHeight: '1.5', margin: '0 0 20px 0', opacity: 0.8 }}>
                Security Notice: Your records are encrypted end-to-end and stored in SOC2 compliant data centers. Access is restricted to authorized medical professionals only.
              </p>
              <button 
                type="button"
                className="submit-button"
                style={{ backgroundColor: '#ffffff', color: 'var(--text-dark)', border: 'none', fontSize: '12.5px', fontWeight: '700', padding: '10px 16px', width: '100%' }}
                onClick={() => triggerMockAlert('access security audit logs')}
              >
                Security Audit Log
              </button>
            </div>

            {/* Recent Reports logs */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 16px 0' }}>Recent Reports</h3>

              <div className="pdf-log-list" style={{ gap: '14px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }} onClick={() => triggerMockAlert('download Urinalysis_Results')}>
                  <FileText size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Urinalysis_Results_Oct.pdf</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>Oct 12, 2023</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }} onClick={() => triggerMockAlert('download EKG_Summary')}>
                  <FileText size={18} style={{ color: 'var(--primary-blue)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>EKG_Summary_Sep.pdf</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>Sep 29, 2023</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }} onClick={() => triggerMockAlert('download Immunization_Card')}>
                  <FileText size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>Immunization_Card_Updated.pdf</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>Sep 15, 2023</div>
                  </div>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '20px 0 12px' }} />
              
              <a 
                href="#all-records" 
                style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none', display: 'block', textAlign: 'center' }}
                onClick={(e) => { e.preventDefault(); triggerMockAlert('view full history log'); }}
              >
                View All History
              </a>
            </div>

            {/* Need assistance card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', color: 'var(--primary-blue)' }}>
                <HelpCircle size={18} />
                <h4 style={{ fontSize: '14.5px', fontWeight: '800', margin: 0 }}>Need assistance?</h4>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-medium)', lineHeight: '1.4', margin: '0 0 16px 0' }}>
                Our clinical records team is available to help you retrieve older documents.
              </p>
              <a 
                href="#chat-support" 
                style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                onClick={(e) => { e.preventDefault(); handleChat(); }}
              >
                <span>Contact Health Support</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
