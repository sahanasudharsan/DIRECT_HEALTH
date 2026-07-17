import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, ArrowLeft, Check, AlertCircle, 
  UploadCloud, FileText, Image as ImageIcon, Trash2, FileUp, 
  User, Users, Phone, Smartphone, Home, Clock, Calendar, 
  Heart, HeartPulse, UserCheck, Scissors, Activity 
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import registrationHero from '../assets/registration_hero.jpg';

const STEP_LABELS = [
  'Basic Details',
  'Medical Details',
  'Reports Upload',
  'Prescription Upload',
  'Emergency Contact',
  'Service Required',
  'Verification & Review'
];

export default function PatientRegistrationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // STEP 1: Basic Details States
  const [step1Data, setStep1Data] = useState({
    fullName: '',
    dob: '',
    age: '',
    mobile: '',
    email: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [step1Error, setStep1Error] = useState('');

  // STEP 2: Medical Details States
  const [step2Data, setStep2Data] = useState({
    medicalHistory: '',
    currentCondition: '',
    preferredDoctor: '',
    treatmentPlan: ''
  });
  const [allergies, setAllergies] = useState(['Peanuts', 'Penicillin']);
  const [allergyInput, setAllergyInput] = useState('');
  const [step2Error, setStep2Error] = useState('');

  // STEP 3: Reports Upload States
  const [reports, setReports] = useState([
    { id: '1', name: 'Lab_Results_May20.pdf', size: '2.1 MB', date: 'Uploaded May 20, 2024', category: 'Lab Result' },
    { id: '2', name: 'MRI_Scan_June3.jpg', size: '4.5 MB', date: 'Uploaded June 3, 2024', category: 'Radiology Report' }
  ]);
  const [step3Error, setStep3Error] = useState('');

  // STEP 4: Prescription Upload States
  const [prescriptionData, setPrescriptionData] = useState({
    doctorName: '',
    hospitalName: '',
    prescriptionDate: ''
  });
  const [prescriptionFile, setPrescriptionFile] = useState({
    name: 'Rx_Dr_Patel_July15.pdf',
    size: '1.2 MB',
    date: 'Uploaded on Oct 24, 2023'
  });
  const [step4Error, setStep4Error] = useState('');

  // STEP 5: Emergency Contact States
  const [emergencyData, setEmergencyData] = useState({
    name: '',
    relationship: '',
    phone: '',
    altPhone: '',
    address: ''
  });
  const [step5Error, setStep5Error] = useState('');

  // STEP 6: Service Required States
  const [selectedService, setSelectedService] = useState('Physiotherapy');
  const [serviceLogistics, setServiceLogistics] = useState({
    startDate: '',
    timeSlot: '',
    specialRequirements: ''
  });
  const [step6Error, setStep6Error] = useState('');

  // STEP 7: Verification & Review States
  const [confirmData, setConfirmData] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [step7Error, setStep7Error] = useState('');

  // STEP 6: Services Configurations
  const SERVICES = [
    { id: 'Physiotherapy', title: 'Physiotherapy', icon: <Activity size={22} /> },
    { id: 'HomeNursing', title: 'Home Nursing', icon: <Home size={22} /> },
    { id: 'PostSurgery', title: 'Post Surgery', icon: <Scissors size={22} /> },
    { id: 'ElderCare', title: 'Elder Care', icon: <Heart size={22} /> },
    { id: 'ICUHomeCare', title: 'ICU Home Care', icon: <HeartPulse size={22} /> },
    { id: 'CareTaker', title: 'Care Taker', icon: <UserCheck size={22} /> },
    { id: 'DoctorConsult', title: 'Doctor Consult', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A10.1 10.1 0 0 0 2 10a10.1 10.1 0 0 0 2.8 7.7L8 14.5A4.1 4.1 0 0 1 7 10c0-1.2.5-2.2 1.2-3.1L4.8 2.3z"/><path d="M19.2 2.3A10.1 10.1 0 0 1 22 10a10.1 10.1 0 0 1-2.8 7.7L16 14.5A4.1 4.1 0 0 0 17 10c0-1.2-.5-2.2-1.2-3.1L19.2 2.3z"/><path d="M15.8 4.2A7.1 7.1 0 0 0 12 3a7.1 7.1 0 0 0-3.8 1.2l3 2.5A3.1 3.1 0 0 1 12 6.5a3.1 3.1 0 0 1 .8.2l3-2.5z"/><circle cx="12" cy="11" r="3"/><path d="M12 14v8"/><path d="M9 19h6"/></svg> },
    { id: 'GeneralHealth', title: 'General Health', icon: <Heart size={22} fill="currentColor" fillOpacity="0.15" /> }
  ];

  // ----------------------------------------------------
  // HANDLERS
  // ----------------------------------------------------

  // Step 1 input change
  const handleStep1Change = (e) => {
    const { name, value } = e.target;
    setStep1Data((prev) => ({ ...prev, [name]: value }));
    setStep1Error('');
  };

  // Step 2 input change
  const handleStep2Change = (e) => {
    const { name, value } = e.target;
    setStep2Data((prev) => ({ ...prev, [name]: value }));
    setStep2Error('');
  };

  // Allergies tags handlers
  const handleAllergyKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const tag = allergyInput.trim();
      if (tag && !allergies.includes(tag)) {
        setAllergies((prev) => [...prev, tag]);
        setAllergyInput('');
      }
    }
  };

  const removeAllergy = (tagToRemove) => {
    setAllergies((prev) => prev.filter((t) => t !== tagToRemove));
  };

  // Step 3 file handlers
  const handleReportCategoryChange = (id, newCategory) => {
    setReports((prev) => prev.map((rep) => rep.id === id ? { ...prev.find(r => r.id === id), category: newCategory } : rep));
  };

  const removeReport = (id) => {
    setReports((prev) => prev.filter((rep) => rep.id !== id));
  };

  const handleDummyReportUpload = () => {
    const newId = Date.now().toString();
    const newReport = {
      id: newId,
      name: `Scan_Report_${Math.floor(Math.random() * 100) + 10}.pdf`,
      size: `${(Math.random() * 4 + 1).toFixed(1)} MB`,
      date: `Uploaded ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
      category: 'Discharge Summary'
    };
    setReports((prev) => [...prev, newReport]);
  };

  // Step 4 handlers
  const handleStep4Change = (e) => {
    const { name, value } = e.target;
    setPrescriptionData((prev) => ({ ...prev, [name]: value }));
    setStep4Error('');
  };

  const handlePrescriptionReplace = () => {
    setPrescriptionFile({
      name: `Rx_Dr_Patel_July15_Revised.pdf`,
      size: '1.4 MB',
      date: 'Uploaded just now'
    });
  };

  const handlePrescriptionDelete = () => {
    setPrescriptionFile(null);
  };

  const handleDummyPrescriptionUpload = () => {
    setPrescriptionFile({
      name: 'Rx_New_Upload.pdf',
      size: '950 KB',
      date: 'Uploaded just now'
    });
  };

  // Step 5 handlers
  const handleStep5Change = (e) => {
    const { name, value } = e.target;
    setEmergencyData((prev) => ({ ...prev, [name]: value }));
    setStep5Error('');
  };

  // Step 6 handlers
  const handleStep6Change = (e) => {
    const { name, value } = e.target;
    setServiceLogistics((prev) => ({ ...prev, [name]: value }));
    setStep6Error('');
  };

  // ----------------------------------------------------
  // NAVIGATION SUBMITS
  // ----------------------------------------------------

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!step1Data.fullName || !step1Data.dob || !step1Data.age || !step1Data.mobile || !step1Data.email || !step1Data.gender || !step1Data.address || !step1Data.state || !step1Data.pincode) {
      setStep1Error('Please fill in all required fields before continuing.');
      return;
    }
    setCurrentStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (!step2Data.preferredDoctor) {
      setStep2Error('Please select a doctor specialty or clinic.');
      return;
    }
    setCurrentStep(3);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    if (reports.length === 0) {
      setStep3Error('Please upload at least one medical report.');
      return;
    }
    setCurrentStep(4);
  };

  const handleStep4Submit = (e) => {
    e.preventDefault();
    if (!prescriptionData.doctorName || !prescriptionData.hospitalName || !prescriptionData.prescriptionDate) {
      setStep4Error('Please enter doctor name, hospital, and prescription date.');
      return;
    }
    if (!prescriptionFile) {
      setStep4Error('Please upload a scanned copy of your prescription.');
      return;
    }
    setCurrentStep(5);
  };

  const handleStep5Submit = (e) => {
    e.preventDefault();
    if (!emergencyData.name || !emergencyData.relationship || !emergencyData.phone || !emergencyData.address) {
      setStep5Error('Please fill in the required emergency contact fields.');
      return;
    }
    setCurrentStep(6);
  };

  const handleStep6Submit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      setStep6Error('Please select a healthcare service.');
      return;
    }
    if (!serviceLogistics.startDate || !serviceLogistics.timeSlot) {
      setStep6Error('Please select a preferred start date and time slot.');
      return;
    }
    setCurrentStep(7);
  };

  const handleStep7Submit = (e) => {
    e.preventDefault();
    if (!confirmData || !agreeTerms) {
      setStep7Error('Please check both boxes to confirm details and agree to policies.');
      return;
    }
    
    // Navigate to registration submitted page and pass states
    navigate('/registration-submitted', {
      state: {
        fullName: step1Data.fullName || 'Sarah J. Miller',
        selectedService: selectedService || 'General Wellness Consultation'
      }
    });
  };

  // Stepper connecting line length
  const progressPercent = ((currentStep - 1) / 6) * 100;

  return (
    <div className="page-container">
      {/* Navbar Header */}
      <header className="app-header">
        <Logo />
      </header>

      {/* Dynamic Titles based on steps */}
      <div style={{ maxWidth: '1200px', width: '100%', margin: '30px auto 10px', padding: '0 20px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '6px' }}>
          Patient Registration
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-medium)' }}>
          {currentStep <= 2 && 'Complete your healthcare profile to receive personalized care services.'}
          {currentStep >= 3 && currentStep <= 4 && 'Please provide your medical history and upload relevant health reports to finalize your profile.'}
          {currentStep === 5 && 'Please provide emergency contact details so we can reach your loved ones in case of urgent updates.'}
          {currentStep === 6 && 'Select the healthcare services you require to help us personalize your care plan.'}
          {currentStep === 7 && 'Review your profile details below. Ensure everything is correct before submitting.'}
        </p>
      </div>

      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto 40px', padding: '0 20px' }}>
        {/* Stepper Wizard Container */}
        <div className="stepper-wrapper" style={{ margin: '20px 0 40px', overflowX: 'auto', paddingBottom: '10px' }}>
          <div className="stepper-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '900px', position: 'relative' }}>
            
            {/* Stepper connecting background line */}
            <div style={{ position: 'absolute', top: '18px', left: '40px', right: '40px', height: '2px', backgroundColor: '#e5e7eb', zIndex: 0 }}></div>
            {/* Stepper active progress line */}
            <div style={{ 
              position: 'absolute', 
              top: '18px', 
              left: '40px', 
              width: `${progressPercent}%`, 
              height: '2px', 
              backgroundColor: 'var(--primary-blue)', 
              zIndex: 0,
              transition: 'width 0.3s ease'
            }}></div>

            {/* Stepper Circles */}
            {STEP_LABELS.map((label, idx) => {
              const stepNum = idx + 1;
              const isCompleted = stepNum < currentStep;
              const isActive = stepNum === currentStep;

              return (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, flex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: isCompleted || isActive ? '2px solid var(--primary-blue)' : '2px solid #d1d5db',
                    backgroundColor: isCompleted ? 'var(--primary-blue)' : '#ffffff',
                    color: isCompleted ? '#ffffff' : isActive ? 'var(--primary-blue)' : 'var(--text-light)',
                    transition: 'all 0.2s ease',
                  }}>
                    {isCompleted ? <Check size={16} strokeWidth={3} /> : stepNum}
                  </div>
                  <span style={{ 
                    marginTop: '8px', 
                    fontSize: '12px', 
                    fontWeight: isActive || isCompleted ? '600' : '500', 
                    color: isActive ? 'var(--primary-blue)' : isCompleted ? 'var(--text-dark)' : 'var(--text-light)',
                    whiteSpace: 'nowrap'
                  }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card Layout */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          border: 'var(--card-border)', 
          borderRadius: '12px', 
          boxShadow: 'var(--card-shadow)',
          overflow: 'hidden'
        }}>
          {currentStep === 1 && (
            /* ==================================================== */
            /* STEP 1: BASIC DETAILS                                */
            /* ==================================================== */
            <form onSubmit={handleStep1Submit}>
              <div className="registration-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '-5px', textAlign: 'left' }}>
                    STEP 1 &mdash; BASIC DETAILS
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="form-input"
                      value={step1Data.fullName}
                      onChange={handleStep1Change}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="dob">Date of Birth</label>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        className="form-input"
                        value={step1Data.dob}
                        onChange={handleStep1Change}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="age">Age</label>
                      <select
                        id="age"
                        name="age"
                        className="form-input"
                        value={step1Data.age}
                        onChange={handleStep1Change}
                        required
                      >
                        <option value="">Select Age</option>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map((val) => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="mobile">Mobile Number</label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="Mobile Number"
                        className="form-input"
                        value={step1Data.mobile}
                        onChange={handleStep1Change}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="form-input"
                        value={step1Data.email}
                        onChange={handleStep1Change}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-input"
                      value={step1Data.gender}
                      onChange={handleStep1Change}
                      required
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="PreferNotToSay">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      placeholder="Full Residential Address"
                      className="form-input"
                      style={{ height: '80px', resize: 'vertical' }}
                      value={step1Data.address}
                      onChange={handleStep1Change}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="city">City</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="City"
                        className="form-input"
                        value={step1Data.city}
                        onChange={handleStep1Change}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="state">State</label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        placeholder="State"
                        className="form-input"
                        value={step1Data.state}
                        onChange={handleStep1Change}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pincode">Pincode</label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                        className="form-input"
                        value={step1Data.pincode}
                        onChange={handleStep1Change}
                        required
                      />
                    </div>
                  </div>

                  {step1Error && (
                    <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                      <AlertCircle size={16} />
                      <span>{step1Error}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                      src={registrationHero} 
                      alt="Doctors discussing care illustration" 
                      style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }} 
                    />
                  </div>

                  <div style={{ 
                    backgroundColor: '#f0f7ff', 
                    border: '1px solid #d0e7ff', 
                    borderRadius: '10px', 
                    padding: '20px', 
                    display: 'flex', 
                    gap: '12px',
                    textAlign: 'left'
                  }}>
                    <div style={{ color: 'var(--primary-blue)', marginTop: '2px' }}>
                      <ShieldCheck size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#004085', marginBottom: '4px' }}>
                        Your Privacy Matters
                      </h4>
                      <p style={{ fontSize: '13px', color: '#004085', lineHeight: '1.4', opacity: '0.85' }}>
                        We use bank-grade encryption to secure your medical data. Your information is only shared with authorized healthcare providers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            /* ==================================================== */
            /* STEP 2: MEDICAL DETAILS                              */
            /* ==================================================== */
            <form onSubmit={handleStep2Submit}>
              <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '15px' }}>
                  STEP 2 &mdash; MEDICAL DETAILS
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="medicalHistory">Medical History</label>
                    <textarea
                      id="medicalHistory"
                      name="medicalHistory"
                      placeholder="Please describe any previous surgeries, chronic illnesses, or hospitalizations..."
                      className="form-input"
                      style={{ height: '100px', resize: 'vertical' }}
                      value={step2Data.medicalHistory}
                      onChange={handleStep2Change}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="currentCondition">Current Condition</label>
                    <textarea
                      id="currentCondition"
                      name="currentCondition"
                      placeholder="Describe your current symptoms or primary reason for this registration..."
                      className="form-input"
                      style={{ height: '100px', resize: 'vertical' }}
                      value={step2Data.currentCondition}
                      onChange={handleStep2Change}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredDoctor">Assigned / Preferred Doctor</label>
                      <select
                        id="preferredDoctor"
                        name="preferredDoctor"
                        className="form-input"
                        value={step2Data.preferredDoctor}
                        onChange={handleStep2Change}
                        required
                      >
                        <option value="">Select a specialist</option>
                        <option value="GeneralPhysician">Dr. Jane Smith (General Physician)</option>
                        <option value="Cardiologist">Dr. Alan Carter (Cardiologist)</option>
                        <option value="Dermatologist">Dr. Sarah Lopez (Dermatologist)</option>
                        <option value="Physiotherapist">Dr. David Miller (Physiotherapist)</option>
                        <option value="Pediatrician">Dr. Emily Watson (Pediatrician)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="allergies">Allergies</label>
                      <div className="form-input" style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        alignItems: 'center', 
                        gap: '6px', 
                        padding: '6px 10px', 
                        minHeight: '44px',
                        backgroundColor: '#f9fafb'
                      }}>
                        {allergies.map((tag) => (
                          <span key={tag} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            backgroundColor: '#e0f2fe',
                            color: 'var(--primary-blue)',
                            fontSize: '13px',
                            fontWeight: '600',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            userSelect: 'none'
                          }}>
                            <span>{tag}</span>
                            <span 
                              onClick={() => removeAllergy(tag)}
                              style={{ cursor: 'pointer', fontWeight: '800', fontSize: '11px', display: 'flex', alignItems: 'center', padding: '0 2px' }}
                              title={`Remove ${tag}`}
                            >
                              &times;
                            </span>
                          </span>
                        ))}
                        <input
                          id="allergies"
                          type="text"
                          placeholder={allergies.length === 0 ? "Add allergies..." : "Add more..."}
                          style={{
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            fontSize: '14px',
                            padding: '4px 0',
                            flexGrow: 1,
                            color: 'var(--text-dark)',
                            minWidth: '80px'
                          }}
                          value={allergyInput}
                          onChange={(e) => setAllergyInput(e.target.value)}
                          onKeyDown={handleAllergyKeyDown}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="treatmentPlan">Current Treatment Plan</label>
                    <textarea
                      id="treatmentPlan"
                      name="treatmentPlan"
                      placeholder="List medications, therapy schedules, or lifestyle modifications you are currently following..."
                      className="form-input"
                      style={{ height: '100px', resize: 'vertical' }}
                      value={step2Data.treatmentPlan}
                      onChange={handleStep2Change}
                    />
                  </div>

                  {step2Error && (
                    <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                      <AlertCircle size={16} />
                      <span>{step2Error}</span>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(1)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            /* ==================================================== */
            /* STEP 3: REPORTS UPLOAD                               */
            /* ==================================================== */
            <form onSubmit={handleStep3Submit}>
              <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '15px' }}>
                  STEP 3 &mdash; REPORTS UPLOAD
                </div>
                
                <p style={{ fontSize: '14px', color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.6' }}>
                  Upload any recent lab results, scan reports, or discharge summaries to help your medical team provide better care.
                </p>

                {/* Upload zone */}
                <div className="upload-dropzone" onClick={handleDummyReportUpload}>
                  <div className="upload-icon-wrapper">
                    <UploadCloud size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>
                      Drag and Drop or Click to Upload
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                      Support for PDF, JPG, and PNG files. Maximum file size: 10MB per document.
                    </p>
                  </div>
                </div>

                {/* Uploaded items list */}
                {reports.length > 0 && (
                  <div style={{ marginTop: '30px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '12px' }}>
                      Your Uploaded Reports ({reports.length})
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {reports.map((report) => (
                        <div key={report.id} className="uploaded-file-row">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ 
                              backgroundColor: report.name.endsWith('.pdf') ? '#fee2e2' : '#dbeafe',
                              color: report.name.endsWith('.pdf') ? '#ef4444' : '#3b82f6',
                              padding: '10px',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {report.name.endsWith('.pdf') ? <FileText size={20} /> : <ImageIcon size={20} />}
                            </div>
                            <div>
                              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>
                                {report.name}
                              </p>
                              <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                                {report.size} &bull; {report.date}
                              </p>
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="form-group" style={{ marginBottom: 0, width: '180px' }}>
                              <select
                                className="form-input"
                                style={{ padding: '6px 10px', fontSize: '13px' }}
                                value={report.category}
                                onChange={(e) => handleReportCategoryChange(report.id, e.target.value)}
                              >
                                <option value="Lab Result">Lab Result</option>
                                <option value="Radiology Report">Radiology Report</option>
                                <option value="Discharge Summary">Discharge Summary</option>
                                <option value="Prescription">Prescription</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <button 
                              type="button" 
                              style={{ border: 'none', background: 'none', color: '#ef4444', padding: '6px', cursor: 'pointer', borderRadius: '4px' }}
                              onClick={() => removeReport(report.id)}
                              title="Delete report"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step3Error && (
                  <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', marginTop: '16px' }}>
                    <AlertCircle size={16} />
                    <span>{step3Error}</span>
                  </div>
                )}
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(2)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 4 && (
            /* ==================================================== */
            /* STEP 4: PRESCRIPTION UPLOAD                          */
            /* ==================================================== */
            <form onSubmit={handleStep4Submit}>
              <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '15px' }}>
                  STEP 4 &mdash; PRESCRIPTION UPLOAD
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.6' }}>
                  Please provide the details of your latest medical prescription and upload a scanned copy for verification.
                </p>

                {/* Form fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="doctorName">Doctor Name</label>
                    <input
                      id="doctorName"
                      name="doctorName"
                      type="text"
                      placeholder="e.g. Dr. Patel"
                      className="form-input"
                      value={prescriptionData.doctorName}
                      onChange={handleStep4Change}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="hospitalName">Hospital Name</label>
                    <input
                      id="hospitalName"
                      name="hospitalName"
                      type="text"
                      placeholder="e.g. City Central Clinic"
                      className="form-input"
                      value={prescriptionData.hospitalName}
                      onChange={handleStep4Change}
                      required
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label" htmlFor="prescriptionDate">Prescription Date</label>
                  <input
                    id="prescriptionDate"
                    name="prescriptionDate"
                    type="date"
                    className="form-input"
                    value={prescriptionData.prescriptionDate}
                    onChange={handleStep4Change}
                    required
                  />
                </div>

                {/* File Dropzone */}
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Upload Prescription</label>
                  {!prescriptionFile ? (
                    <div className="upload-dropzone" onClick={handleDummyPrescriptionUpload}>
                      <div className="upload-icon-wrapper" style={{ backgroundColor: '#f1f5f9', color: 'var(--text-medium)' }}>
                        <FileUp size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>
                          Click or drag and drop prescription file
                        </p>
                        <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                          Accepted formats: PDF, JPG, PNG (Max 5MB)
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Preview wrapper */
                    <div className="uploaded-file-row">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          backgroundColor: '#fee2e2', 
                          color: '#ef4444', 
                          padding: '10px', 
                          borderRadius: '8px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}>
                          <FileText size={20} />
                        </div>
                        <div>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>
                            {prescriptionFile.name}
                          </p>
                          <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                            {prescriptionFile.date} &bull; {prescriptionFile.size}
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button 
                          type="button" 
                          className="submit-button"
                          style={{ width: 'auto', padding: '6px 14px', fontSize: '13px', backgroundColor: '#ffffff', color: 'var(--primary-blue)', border: '1px solid var(--primary-blue)' }}
                          onClick={handlePrescriptionReplace}
                        >
                          Replace
                        </button>
                        <button 
                          type="button" 
                          style={{ border: 'none', background: 'none', color: '#ef4444', padding: '6px', cursor: 'pointer' }}
                          onClick={handlePrescriptionDelete}
                          title="Delete prescription"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {step4Error && (
                  <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                    <AlertCircle size={16} />
                    <span>{step4Error}</span>
                  </div>
                )}
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(3)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 5 && (
            /* ==================================================== */
            /* STEP 5: EMERGENCY CONTACT                            */
            /* ==================================================== */
            <form onSubmit={handleStep5Submit}>
              <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '15px' }}>
                  STEP 5 &mdash; EMERGENCY CONTACT
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Emergency Contact Name</label>
                      <div className="input-container">
                        <span className="input-icon-left"><User size={18} /></span>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Full name"
                          className="form-input has-icon-left"
                          value={emergencyData.name}
                          onChange={handleStep5Change}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="relationship">Relationship</label>
                      <div className="input-container">
                        <span className="input-icon-left"><Users size={18} /></span>
                        <select
                          id="relationship"
                          name="relationship"
                          className="form-input has-icon-left"
                          value={emergencyData.relationship}
                          onChange={handleStep5Change}
                          required
                        >
                          <option value="">Select relationship</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Sibling">Sibling</option>
                          <option value="Child">Child</option>
                          <option value="Friend">Friend</option>
                          <option value="Guardian">Guardian</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Primary Phone Number</label>
                      <div className="input-container">
                        <span className="input-icon-left"><Phone size={18} /></span>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="form-input has-icon-left"
                          value={emergencyData.phone}
                          onChange={handleStep5Change}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="altPhone">Alternative Number</label>
                      <div className="input-container">
                        <span className="input-icon-left"><Smartphone size={18} /></span>
                        <input
                          id="altPhone"
                          name="altPhone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="form-input has-icon-left"
                          value={emergencyData.altPhone}
                          onChange={handleStep5Change}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="address">Residential Address</label>
                    <div className="input-container">
                      <span className="input-icon-left"><Home size={18} /></span>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Street address, city, state, and zip code"
                        className="form-input has-icon-left"
                        value={emergencyData.address}
                        onChange={handleStep5Change}
                        required
                      />
                    </div>
                  </div>

                  {step5Error && (
                    <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                      <AlertCircle size={16} />
                      <span>{step5Error}</span>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(4)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 6 && (
            /* ==================================================== */
            /* STEP 6: SERVICE REQUIRED                             */
            /* ==================================================== */
            <form onSubmit={handleStep6Submit}>
              <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '15px' }}>
                  STEP 6 &mdash; SERVICE REQUIRED
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-medium)', marginBottom: '24px', lineHeight: '1.6' }}>
                  Select the healthcare services you require to help us personalize your care plan.
                </p>

                {/* Services cards grid */}
                <div className="service-card-grid">
                  {SERVICES.map((srv) => (
                    <div 
                      key={srv.id} 
                      className={`service-card ${selectedService === srv.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedService(srv.id);
                        setStep6Error('');
                      }}
                    >
                      <div className="service-icon-wrapper">
                        {srv.icon}
                      </div>
                      <div className="service-title">{srv.title}</div>
                    </div>
                  ))}
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '30px 0' }} />

                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '16px' }}>
                  Service Logistics
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="startDate">Preferred Start Date</label>
                    <div className="input-container">
                      <span className="input-icon-left"><Calendar size={18} /></span>
                      <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        className="form-input has-icon-left"
                        value={serviceLogistics.startDate}
                        onChange={handleStep6Change}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="timeSlot">Preferred Time Slot</label>
                    <div className="input-container">
                      <span className="input-icon-left"><Clock size={18} /></span>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        className="form-input has-icon-left"
                        value={serviceLogistics.timeSlot}
                        onChange={handleStep6Change}
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="Morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening">Evening (4:00 PM - 8:00 PM)</option>
                        <option value="Night">Night (8:00 PM - 12:00 AM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="specialRequirements">Special Requirements or Medical Notes</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    placeholder="Mention any specific allergies, past medical history, or equipment required..."
                    className="form-input"
                    style={{ height: '100px', resize: 'vertical' }}
                    value={serviceLogistics.specialRequirements}
                    onChange={handleStep6Change}
                  />
                </div>

                {step6Error && (
                  <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', marginTop: '16px' }}>
                    <AlertCircle size={16} />
                    <span>{step6Error}</span>
                  </div>
                )}
              </div>

              <div style={{ borderTop: 'var(--card-border)', backgroundColor: '#f9fafb', padding: '20px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(5)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {currentStep === 7 && (
            /* ==================================================== */
            /* STEP 7: VERIFICATION & REVIEW                        */
            /* ==================================================== */
            <form onSubmit={handleStep7Submit}>
              <div style={{ padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '-10px' }}>
                  STEP 7 &mdash; VERIFICATION AND REVIEW
                </div>

                {/* Personal Details Card */}
                <div className="review-card-section">
                  <div className="review-section-header">
                    <h3 className="review-section-title">Personal Details</h3>
                    <span className="review-section-link" onClick={() => setCurrentStep(1)}>Edit</span>
                  </div>
                  <div className="review-details-grid">
                    <div className="review-details-box">
                      <div className="review-box-label">Full Name</div>
                      <div className="review-box-value">{step1Data.fullName || 'Sarah J. Miller'}</div>
                    </div>
                    <div className="review-details-box">
                      <div className="review-box-label">Date of Birth</div>
                      <div className="review-box-value">
                        {step1Data.dob ? new Date(step1Data.dob).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'April 12, 1988'}
                      </div>
                    </div>
                    <div className="review-details-box">
                      <div className="review-box-label">Mobile Number</div>
                      <div className="review-box-value">{step1Data.mobile || '+1 (555) 902-4411'}</div>
                    </div>
                    <div className="review-details-box">
                      <div className="review-box-label">Email Address</div>
                      <div className="review-box-value">{step1Data.email || 'sarah.miller@example.com'}</div>
                    </div>
                    <div className="review-details-box full-width">
                      <div className="review-box-label">Residential Address</div>
                      <div className="review-box-value">
                        {step1Data.address ? `${step1Data.address}${step1Data.city ? `, ${step1Data.city}` : ''}, ${step1Data.state} - ${step1Data.pincode}` : '1248 Oakwood Ave, Apt 4B, San Francisco, CA 94110'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medical History Table */}
                <div className="review-card-section">
                  <div className="review-section-header">
                    <h3 className="review-section-title">Medical History</h3>
                    <span className="review-section-link" onClick={() => setCurrentStep(2)}>Edit</span>
                  </div>
                  <div className="review-history-table">
                    <div className="review-history-row">
                      <div className="review-history-label">General History</div>
                      <div className="review-history-value">
                        {step2Data.medicalHistory || 'History of asthma in childhood, no recent hospitalizations.'}
                      </div>
                    </div>
                    <div className="review-history-row">
                      <div className="review-history-label">Allergies</div>
                      <div className="review-history-value">
                        {allergies.length > 0 ? allergies.join(', ') : 'Penicillin, Shellfish (Mild)'}
                      </div>
                    </div>
                    <div className="review-history-row">
                      <div className="review-history-label">Current Conditions</div>
                      <div className="review-history-value">
                        {step2Data.currentCondition || 'Seasonal allergies, Mild hypertension (controlled)'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Uploaded Documents */}
                <div className="review-card-section">
                  <div className="review-section-header">
                    <h3 className="review-section-title">Uploaded Documents</h3>
                    <span className="review-section-link" onClick={() => setCurrentStep(3)}>Manage</span>
                  </div>
                  <div className="review-docs-row">
                    {reports.length > 0 ? (
                      reports.map(rep => (
                        <div key={rep.id} className="review-doc-card">
                          <div className="review-doc-icon" style={{ backgroundColor: rep.name.endsWith('.pdf') ? '#fee2e2' : '#e0f2fe', color: rep.name.endsWith('.pdf') ? '#ef4444' : '#0284c7' }}>
                            <FileText size={18} />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="review-doc-name" title={rep.name}>{rep.name}</div>
                            <div className="review-doc-meta">{rep.name.split('.').pop().toUpperCase()} &bull; {rep.size}</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="review-doc-card">
                          <div className="review-doc-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                            <FileText size={18} />
                          </div>
                          <div>
                            <div className="review-doc-name">Lab_Results_03_24.pdf</div>
                            <div className="review-doc-meta">PDF &bull; 1.2 MB</div>
                          </div>
                        </div>
                        <div className="review-doc-card">
                          <div className="review-doc-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                            <ImageIcon size={18} />
                          </div>
                          <div>
                            <div className="review-doc-name">MRI_Lumbar_Scan.jpg</div>
                            <div className="review-doc-meta">JPG &bull; 4.5 MB</div>
                          </div>
                        </div>
                      </>
                    )}
                    {prescriptionFile ? (
                      <div className="review-doc-card">
                        <div className="review-doc-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                          <FileText size={18} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="review-doc-name" title={prescriptionFile.name}>{prescriptionFile.name}</div>
                          <div className="review-doc-meta">PDF &bull; {prescriptionFile.size}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="review-doc-card">
                        <div className="review-doc-icon" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                          <FileText size={18} />
                        </div>
                        <div>
                          <div className="review-doc-name">Prescription_Med_List.pdf</div>
                          <div className="review-doc-meta">PDF &bull; 0.8 MB</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="review-card-section">
                  <div className="review-section-header">
                    <h3 className="review-section-title">Emergency Contact</h3>
                    <span className="review-section-link" onClick={() => setCurrentStep(5)}>Edit</span>
                  </div>
                  <div className="review-banner-card">
                    <div className="review-banner-left">
                      <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)' }}>
                        {emergencyData.name || 'Robert Miller'}
                      </span>
                      <span style={{ fontSize: '13px', color: 'var(--text-medium)', marginTop: '2px' }}>
                        {emergencyData.relationship || 'Spouse'} &bull; Primary Contact
                      </span>
                    </div>
                    <div className="review-banner-right" style={{ color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                      <Phone size={16} />
                      <span>{emergencyData.phone || '+1 (555) 233-8821'}</span>
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="review-card-section">
                  <div className="review-section-header">
                    <h3 className="review-section-title">Service Selection</h3>
                    <span className="review-section-link" onClick={() => setCurrentStep(6)}>Change</span>
                  </div>
                  <div className="review-banner-card">
                    <div className="review-banner-left">
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Service Type
                      </span>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>
                        {selectedService === 'Physiotherapy' ? 'General Wellness Consultation' : selectedService || 'General Wellness Consultation'}
                      </span>
                    </div>
                    <div className="review-banner-left" style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Scheduled Slot
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '4px' }}>
                        {serviceLogistics.startDate ? new Date(serviceLogistics.startDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }) : 'Monday, Nov 18, 2024'}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-blue)', marginTop: '2px' }}>
                        {serviceLogistics.timeSlot === 'Morning' ? '09:30 AM - 10:15 AM' : serviceLogistics.timeSlot || '09:30 AM - 10:15 AM'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkboxes */}
                <div style={{ marginTop: '10px' }}>
                  <div className="review-checkbox-row" onClick={() => setConfirmData(!confirmData)}>
                    <input 
                      type="checkbox" 
                      checked={confirmData} 
                      onChange={() => {}}
                    />
                    <label className="review-checkbox-label">
                      I confirm that all information provided is accurate to the best of my knowledge and I understand that providing false information may affect my care.
                    </label>
                  </div>

                  <div className="review-checkbox-row" onClick={() => setAgreeTerms(!agreeTerms)}>
                    <input 
                      type="checkbox" 
                      checked={agreeTerms} 
                      onChange={() => {}}
                    />
                    <label className="review-checkbox-label">
                      I agree to the <a href="#terms" onClick={(e) => e.stopPropagation()}>Terms and Conditions</a> and the <a href="#privacy" onClick={(e) => e.stopPropagation()}>Privacy Policy</a> of Direct Health.
                    </label>
                  </div>
                </div>

                {step7Error && (
                  <div style={{ color: '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500', marginTop: '10px' }}>
                    <AlertCircle size={16} />
                    <span>{step7Error}</span>
                  </div>
                )}
              </div>

              {/* Bottom buttons panel */}
              <div style={{ 
                borderTop: 'var(--card-border)', 
                backgroundColor: '#f9fafb', 
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <button 
                  type="button" 
                  className="submit-button" 
                  style={{ width: 'auto', padding: '10px 24px', backgroundColor: '#ffffff', color: 'var(--text-medium)', border: '1px solid var(--border-color)' }}
                  onClick={() => setCurrentStep(6)}
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>

                <button type="submit" className="cta-button" style={{ fontSize: '15px', padding: '10px 24px' }}>
                  <span>Submit Registration</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
