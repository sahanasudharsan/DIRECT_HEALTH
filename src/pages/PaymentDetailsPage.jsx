import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, CreditCard, Landmark, Wallet, Lock, ShieldCheck, Info, Activity, Clock, User, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import evelynCarterImg from '../assets/evelyn_carter.jpg';

export default function PaymentDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve details
  const fullName = location.state?.fullName || 'Sarah J. Miller';
  const selectedService = location.state?.selectedService || 'General Wellness Consultation';

  // State controls
  const [paymentMode, setPaymentMode] = useState('card'); // card, bank, wallet
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [paymentError, setPaymentError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
    setPaymentError('');
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();

    if (paymentMode === 'card') {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
        setPaymentError('Please fill in all credit card details to complete checkout.');
        return;
      }
    }

    // Trigger payment modal
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    alert('Thank you! Your payment of $200.00 was recorded. Welcome to Direct Health!');
    navigate('/dashboard');
  };

  const handleChat = () => {
    navigate('/chat-support', {
      state: { fullName, selectedService }
    });
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '40px 20px', maxWidth: '1080px' }}>
        
        {/* Centered Logo */}
        <div className="centered-header">
          <Logo centered />
        </div>

        {/* Title block */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
            PAYMENT DETAILS
          </h2>
          <p style={{ fontSize: '14.5px', color: 'var(--text-medium)', margin: 0 }}>
            Complete your payment to continue your care journey with DIRECT HEALTH.
          </p>
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="dashboard-grid profile-timeline-layout">
          
          {/* Left Column: Payment Form */}
          <form onSubmit={handlePaySubmit}>
            <div className="auth-card" style={{ maxWidth: '620px', padding: '30px', margin: 0, textAlign: 'left' }}>
              
              {/* Amounts Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px', 
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                marginBottom: '24px'
              }}>
                <div style={{ padding: '16px 20px', borderRight: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>Package Amount</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary-blue)' }}>$1,200.00</div>
                </div>
                <div style={{ padding: '16px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>Advance To Pay</div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>$200.00</div>
                </div>
              </div>

              {/* Payment Mode Selector */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-medium)', marginBottom: '8px', textTransform: 'uppercase' }}>Payment Mode</h4>
                
                <div className="payment-modes-grid">
                  <div 
                    className={`payment-mode-card ${paymentMode === 'card' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('card')}
                  >
                    <CreditCard size={20} />
                    <span>Credit/Debit Card</span>
                    <span className="payment-radio-dot"></span>
                  </div>

                  <div 
                    className={`payment-mode-card ${paymentMode === 'bank' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('bank')}
                  >
                    <Landmark size={20} />
                    <span>Bank Transfer</span>
                    <span className="payment-radio-dot"></span>
                  </div>

                  <div 
                    className={`payment-mode-card ${paymentMode === 'wallet' ? 'active' : ''}`}
                    onClick={() => setPaymentMode('wallet')}
                  >
                    <Wallet size={20} />
                    <span>Digital Wallet</span>
                    <span className="payment-radio-dot"></span>
                  </div>
                </div>
              </div>

              {/* Card Inputs Form */}
              {paymentMode === 'card' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="number">Card Number</label>
                    <input 
                      id="number"
                      name="number"
                      type="text"
                      placeholder="xxxx xxxx xxxx xxxx"
                      maxLength="19"
                      className="form-input"
                      value={cardDetails.number}
                      onChange={handleCardChange}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="expiry">Expiry Date</label>
                      <input 
                        id="expiry"
                        name="expiry"
                        type="text"
                        placeholder="MM / YY"
                        maxLength="5"
                        className="form-input"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cvv">CVV</label>
                      <input 
                        id="cvv"
                        name="cvv"
                        type="password"
                        placeholder="***"
                        maxLength="3"
                        className="form-input"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Cardholder Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full Name as on Card"
                      className="form-input"
                      value={cardDetails.name}
                      onChange={handleCardChange}
                      required
                    />
                  </div>
                </div>
              ) : (
                <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px', textAlign: 'center', margin: '20px 0', border: '1px dashed #e2e8f0', fontSize: '13.5px', color: 'var(--text-medium)' }}>
                  {paymentMode === 'bank' ? (
                    <div>
                      Please transfer the advance of <strong>$200.00</strong> to:
                      <div style={{ marginTop: '12px', padding: '12px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '12.5px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div>Bank: <strong>Direct Health National Bank</strong></div>
                        <div>Account No: <strong>9988-1234-5678</strong></div>
                        <div>Routing Code: <strong>021000021</strong></div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      Scan the QR code or proceed to digital wallet login popup to pay <strong>$200.00</strong>.
                    </div>
                  )}
                </div>
              )}

              {paymentError && (
                <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', marginBottom: '16px' }}>
                  <AlertCircle size={16} />
                  <span>{paymentError}</span>
                </div>
              )}

              <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '24px 0' }} />

              {/* Doctor care team detail box */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', backgroundColor: '#ffffff', display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <img 
                  src={evelynCarterImg} 
                  alt="Dr. Evelyn Carter" 
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-dark)' }}>Dr. Evelyn Carter</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-medium)' }}>Lead Physiotherapist &bull; Specialist Care</div>
                </div>
                <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: '700' }}>
                  <ShieldCheck size={16} />
                  <span>Active Care</span>
                </div>
              </div>

              {/* Secure info warning banner */}
              <div className="coordinator-alert-banner" style={{ margin: '0 0 24px 0', padding: '12px 16px' }}>
                <Lock size={18} />
                <div style={{ fontSize: '12.5px' }}>
                  Your payment is secure and HIPAA compliant. Dr. Carter will be notified immediately upon successful transaction.
                </div>
              </div>

              {/* CTA button */}
              <button 
                type="submit" 
                className="submit-button"
                style={{ padding: '12px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Lock size={16} />
                <span>Pay $200.00 and Start Care Journey</span>
              </button>

            </div>
          </form>

          {/* Right Column: Timeline & Billing Help */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Treatment Timeline */}
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
            </div>

            {/* Need Billing Assistance widget */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', textAlign: 'left' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 8px 0' }}>Need Assistance?</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-medium)', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                Our billing team is available 24/7 to help with insurance claims and payment queries.
              </p>
              <a 
                href="#contact-support" 
                style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                onClick={(e) => { e.preventDefault(); handleChat(); }}
              >
                <span>Contact Support</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            padding: '40px',
            maxWidth: '480px',
            width: '90%',
            textAlign: 'center',
            border: '1px solid #f1f5f9'
          }}>
            <div style={{
              backgroundColor: '#e6fdf0',
              color: '#16a34a',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={36} strokeWidth={2.5} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Payment Completed Successfully!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-medium)', lineHeight: '1.6', marginBottom: '28px' }}>
              We have processed your advance payment of <strong>$200.00</strong>. Your care plan has been activated, and Dr. Evelyn Carter has been notified to start your treatment sessions.
            </p>
            <button 
              className="submit-button"
              style={{ padding: '12px' }}
              onClick={handleModalClose}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
