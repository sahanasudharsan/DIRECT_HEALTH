import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Calendar, CreditCard, Clock, FileText, CheckCircle, MoreHorizontal, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotificationsPage() {
  const navigate = useNavigate();

  // Active filter tab state
  const [activeTab, setActiveTab] = useState('All');

  const triggerMockAlert = (actionName) => {
    alert(`Triggered mock action: ${actionName}`);
  };

  const handlePayNow = () => {
    navigate('/payment-details', {
      state: { fullName: 'Sarah J. Miller', selectedService: 'Physiotherapy' }
    });
  };

  // Mock notifications data
  const notificationsData = [
    {
      id: '1',
      type: 'Appointments',
      title: 'Physiotherapy session scheduled',
      desc: 'Tomorrow at 10:00 AM \u2022 St. Jude Hospital',
      badge: 'Upcoming',
      badgeClass: 'upcoming',
      actions: [
        { label: 'Reschedule', style: 'outline', action: () => triggerMockAlert('reschedule session') },
        { label: 'View', style: 'solid', action: () => triggerMockAlert('view session details') }
      ],
      icon: <Calendar size={16} />,
      iconColor: 'var(--primary-blue)',
      iconBg: '#f0f7ff'
    },
    {
      id: '2',
      type: 'Payments',
      title: 'Payment due soon',
      desc: 'Balance of $240.00 is due in 3 days.',
      badge: 'Pending',
      badgeClass: 'pending',
      actions: [
        { label: 'Pay Now', style: 'solid-blue', action: handlePayNow },
        { label: 'View Invoice', style: 'outline', action: () => triggerMockAlert('view invoice') }
      ],
      icon: <CreditCard size={16} />,
      iconColor: '#b91c1c',
      iconBg: '#fee2e2'
    },
    {
      id: '3',
      type: 'Sessions',
      title: 'Home nurse visit confirmed',
      desc: 'Today at 2:00 PM \u2022 Dr. Sarah Jenkins',
      badge: 'Confirmed',
      badgeClass: 'confirmed',
      actions: [
        { label: 'View Details', style: 'outline', action: () => triggerMockAlert('view nurse visit details') }
      ],
      icon: <CheckCircle size={16} />,
      iconColor: '#10b981',
      iconBg: '#e6fdf0'
    },
    {
      id: '4',
      type: 'Reports',
      title: 'Treatment Notes Added',
      badge: 'New',
      badgeClass: 'new',
      desc: 'Healthcare professional uploaded new notes for your last session.',
      actions: [
        { label: 'View Notes', style: 'outline', action: () => triggerMockAlert('view treatment notes') }
      ],
      icon: <FileText size={16} />,
      iconColor: 'var(--primary-blue)',
      iconBg: '#f8fafc'
    },
    {
      id: '5',
      type: 'Payments',
      title: 'Payment processed',
      badge: 'Successful',
      badgeClass: 'successful',
      desc: 'Payment of $150.00 has been successfully processed.',
      actions: [
        { label: 'Download Receipt', style: 'outline', action: () => triggerMockAlert('download receipt') }
      ],
      icon: <CreditCard size={16} />,
      iconColor: '#10b981',
      iconBg: '#e6fdf0'
    }
  ];

  // Filter notifications list
  const filteredNotifications = notificationsData.filter(item => {
    if (activeTab === 'All') return true;
    return item.type === activeTab;
  });

  return (
    <div className="page-container bg-tinted">
      {/* Navigation Header */}
      <Header />

      <main className="content-wrapper" style={{ padding: '32px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
              Notifications
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-medium)', margin: 0 }}>
              Stay updated with your appointments, payments, and care progress.
            </p>
          </div>

          <button 
            type="button" 
            className="submit-button"
            style={{ width: 'auto', padding: '10px 20px', fontSize: '13.5px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid #cbd5e1' }}
            onClick={() => triggerMockAlert('mark all notifications as read')}
          >
            Mark All as Read
          </button>
        </div>

        {/* 4 Counts Cards */}
        <div className="appointment-counts-row">
          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f2fe', color: 'var(--primary-blue)' }}>
              <Bell size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Unread</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>4</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#e0f7ff', color: '#0284c7' }}>
              <Calendar size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Upcoming</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>2</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
              <CreditCard size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Pending</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>1</div>
            </div>
          </div>

          <div className="appointment-count-card">
            <div className="appointment-count-icon-box" style={{ backgroundColor: '#f1f5f9', color: 'var(--text-medium)' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>Updates</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>3</div>
            </div>
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="notification-tabs-container">
          {['All', 'Appointments', 'Payments', 'Sessions', 'Reports', 'System Alerts'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`notification-filter-tab ${activeTab === (tab === 'All' ? 'All' : tab) ? 'active' : ''}`}
              onClick={() => setActiveTab(tab === 'All' ? 'All' : tab)}
            >
              {tab === 'All' ? 'All Notifications' : tab}
            </button>
          ))}
        </div>

        {/* Notifications log lists */}
        <div className="notifications-list">
          {filteredNotifications.map((row) => (
            <div key={row.id} className="notification-row-card">
              <div className="notification-row-left">
                <div className="notification-row-icon-box" style={{ backgroundColor: row.iconBg, color: row.iconColor }}>
                  {row.icon}
                </div>
                
                <div>
                  <div className="notification-row-title-row">
                    <span className="notification-row-title">{row.title}</span>
                    <span className={`badge-status ${row.badgeClass}`}>
                      {row.badge}
                    </span>
                  </div>
                  {row.desc && <div className="notification-row-desc">{row.desc}</div>}
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {row.actions.map((act, index) => {
                  let btnBg = '#ffffff';
                  let btnColor = 'var(--text-medium)';
                  let btnBorder = '1px solid #cbd5e1';

                  if (act.style === 'solid') {
                    btnBg = 'var(--primary-blue)';
                    btnColor = '#ffffff';
                    btnBorder = 'none';
                  } else if (act.style === 'solid-blue') {
                    btnBg = 'var(--primary-blue)';
                    btnColor = '#ffffff';
                    btnBorder = 'none';
                  }

                  return (
                    <button
                      key={index}
                      type="button"
                      className="submit-button"
                      style={{ 
                        backgroundColor: btnBg, 
                        color: btnColor, 
                        border: btnBorder, 
                        fontSize: '12.5px', 
                        padding: '6px 14px', 
                        width: 'auto',
                        minWidth: '90px' 
                      }}
                      onClick={act.action}
                    >
                      {act.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredNotifications.length === 0 && (
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '40px', backgroundColor: '#ffffff', color: 'var(--text-light)', fontWeight: '700', fontSize: '14.5px' }}>
              No notifications found matching active filters.
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
