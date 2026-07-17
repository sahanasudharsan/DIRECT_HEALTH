import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Paperclip, Smile, HelpCircle, User, Briefcase, ChevronRight, MessageSquare } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default function ChatSupportPage() {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Message list state
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'agent',
      senderName: 'Support Agent',
      content: 'Hello! Welcome to DIRECT HEALTH. How can we help you today?',
      time: '09:41 AM'
    },
    {
      id: '2',
      sender: 'user',
      senderName: 'You',
      content: 'I need help with my upcoming appointment.',
      time: '09:42 AM'
    },
    {
      id: '3',
      sender: 'agent',
      senderName: 'Support Agent',
      content: "Sure! We'd be happy to assist you. Could you please share your Appointment ID?",
      time: '09:42 AM'
    }
  ]);

  const [inputText, setInputText] = useState('');

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending message
  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Add user message
    const userMsg = {
      id: String(Date.now()),
      sender: 'user',
      senderName: 'You',
      content: text,
      time: currentTime
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Trigger mock agent reply after 1s
    setTimeout(() => {
      let replyContent = "Thank you for the message. A patient coordinator is looking into this and will reply shortly.";
      
      // Smart replies based on query
      const lowerText = text.toLowerCase();
      if (lowerText.includes('appointment')) {
        replyContent = "I can help with appointments! Let me look up your scheduled sessions with Dr. Evelyn Carter. Is this regarding rescheduling or joining?";
      } else if (lowerText.includes('payment') || lowerText.includes('issue') || lowerText.includes('cost')) {
        replyContent = "Understood. For payment or invoice queries, you can review the Payment Details screen or proceed with the advance pay of $200.00. I can also verify if your insurance covers this session.";
      } else if (lowerText.includes('record') || lowerText.includes('file') || lowerText.includes('report')) {
        replyContent = "You can upload files directly in Step 3 of the registration wizard, or upload them under the Reports Tab. Would you like me to guide you to the upload portal?";
      } else if (lowerText.includes('technical') || lowerText.includes('video') || lowerText.includes('camera')) {
        replyContent = "If you are having trouble joining the video session, please ensure you have given browser permissions to access your camera and microphone. Try reloading the page.";
      }

      const agentMsg = {
        id: String(Date.now() + 1),
        sender: 'agent',
        senderName: 'Support Agent',
        content: replyContent,
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleChipClick = (chipText) => {
    handleSendMessage(chipText);
  };

  return (
    <div className="page-container bg-tinted">
      <main className="content-wrapper" style={{ padding: '24px 20px', maxWidth: '1000px' }}>
        
        {/* Top Navbar Header with Back Button */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
          <button 
            type="button" 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'var(--text-medium)', 
              display: 'flex', 
              alignItems: 'center',
              position: 'absolute',
              left: 0
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div style={{ flex: 1 }}>
            <Logo centered />
          </div>
        </div>

        {/* Chat Component Box */}
        <div className="chat-layout">
          
          {/* Left Sidebar */}
          <div className="chat-sidebar">
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', margin: '0 0 6px 0' }}>
                Chat Support
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--text-medium)', lineHeight: '1.4', margin: 0 }}>
                Need help? Chat with our healthcare support team for assistance with appointments, billing, or records.
              </p>
            </div>

            {/* Status bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-medium)', fontWeight: '600' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
              <span>Typical response: 2 mins</span>
            </div>

            <button 
              type="button"
              className="submit-button"
              style={{ 
                backgroundColor: '#ffffff', 
                color: 'var(--text-medium)', 
                border: '1px solid #cbd5e1', 
                fontSize: '13px', 
                padding: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '8px',
                width: '100%'
              }}
              onClick={() => alert('Opening Help Center articles...')}
            >
              <HelpCircle size={15} />
              <span>Help Center</span>
            </button>

            <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '10px 0' }} />

            {/* User details card */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 14px', backgroundColor: '#ffffff' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0f7ff', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifycontent: 'center', justifyContent: 'center' }}>
                  <User size={16} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-dark)' }}>Alex Johnson</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '600' }}>Patient ID: #8829-X</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '8px', fontSize: '11.5px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div><span style={{ color: 'var(--text-light)' }}>Next Appt:</span> <strong style={{ color: 'var(--text-dark)' }}>Oct 12, 10:30 AM</strong></div>
                <div><span style={{ color: 'var(--text-light)' }}>Provider:</span> <strong style={{ color: 'var(--text-dark)' }}>Dr. Emily Chen</strong></div>
              </div>
            </div>
          </div>

          {/* Right Main Chat thread */}
          <div className="chat-main">
            {/* Thread Header */}
            <div className="chat-header">
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
              <span>Support Team</span>
            </div>

            {/* Message bubbles */}
            <div className="chat-messages-container">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble-row ${msg.sender === 'user' ? 'user-row' : 'agent-row'}`}>
                  <div className={`chat-bubble ${msg.sender}`}>
                    <div>{msg.content}</div>
                    <div className="chat-bubble-meta">
                      {msg.sender === 'agent' ? <Briefcase size={10} /> : <User size={10} />}
                      <span>{msg.senderName} &bull; {msg.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar and chips */}
            <div className="chat-input-area">
              
              {/* suggestion chips */}
              <div className="chat-chips-row">
                <span className="chat-chip" onClick={() => handleChipClick('Appointment Help')}>Appointment Help</span>
                <span className="chat-chip" onClick={() => handleChipClick('Payment Issue')}>Payment Issue</span>
                <span className="chat-chip" onClick={() => handleChipClick('Medical Records')}>Medical Records</span>
                <span className="chat-chip" onClick={() => handleChipClick('Technical Support')}>Technical Support</span>
              </div>

              {/* input layout */}
              <div className="chat-input-bar">
                <button 
                  type="button" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)' }}
                  onClick={() => alert('Attachments (mock)...')}
                >
                  <Paperclip size={18} />
                </button>
                
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                <button 
                  type="button" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)' }}
                  onClick={() => alert('Emojis (mock)...')}
                >
                  <Smile size={18} />
                </button>

                <button 
                  type="button" 
                  className="chat-send-btn"
                  onClick={() => handleSendMessage()}
                >
                  <Send size={15} />
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
