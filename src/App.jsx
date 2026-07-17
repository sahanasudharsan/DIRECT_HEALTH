import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyOtpPage from './pages/VerifyOtpPage';
import PatientRegistrationPage from './pages/PatientRegistrationPage';
import RegistrationSubmittedPage from './pages/RegistrationSubmittedPage';
import ProfileApprovedPage from './pages/ProfileApprovedPage';
import ServiceAssignmentPage from './pages/ServiceAssignmentPage';
import CareBeginsPage from './pages/CareBeginsPage';
import ChatSupportPage from './pages/ChatSupportPage';
import PaymentDetailsPage from './pages/PaymentDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOtpPage />} />
      <Route path="/patient-registration" element={<PatientRegistrationPage />} />
      <Route path="/registration-submitted" element={<RegistrationSubmittedPage />} />
      <Route path="/profile-approved" element={<ProfileApprovedPage />} />
      <Route path="/service-assignment" element={<ServiceAssignmentPage />} />
      <Route path="/care-begins" element={<CareBeginsPage />} />
      <Route path="/chat-support" element={<ChatSupportPage />} />
      <Route path="/payment-details" element={<PaymentDetailsPage />} />
    </Routes>
  );
}

export default App;
