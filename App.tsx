
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MapSection from './components/MapSection';
import EmergencyContacts from './components/EmergencyContacts';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [failedAttempts, setFailedAttempts] = useState<number>(0);

  const DUTY_OFFICER_PHONE = '+8801320125678';

  // Check if already authenticated from previous session
  useEffect(() => {
    const authStatus = localStorage.getItem('vhat_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'vhat2026') {
      setIsAuthenticated(true);
      localStorage.setItem('vhat_auth', 'true');
      setError('');
      setFailedAttempts(0);
    } else {
      const newAttempts = failedAttempts + 1;
      setFailedAttempts(newAttempts);
      setError('ভুল পাসওয়ার্ড! দয়া করে সঠিক পাসওয়ার্ড দিন।');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '20px'
      }}>
        <div className="card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🗳️</div>
          <h2 style={{ marginBottom: '20px', color: '#047857' }}>ভোলাহাট ভোট কেন্দ্র ডিজিটাল ম্যাপ</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            অ্যাপটি ব্যবহার করতে পাসওয়ার্ড দিয়ে প্রবেশ করুন।
          </p>
          
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="পাসওয়ার্ড লিখুন"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: error ? '1px solid #dc2626' : '1px solid #d1d5db',
                marginBottom: '10px',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            {error && <p style={{ color: '#dc2626', fontSize: '12px', marginBottom: '10px' }}>{error}</p>}
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              প্রবেশ করুন
            </button>
          </form>

          {failedAttempts >= 5 && (
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              backgroundColor: '#fff1f2', 
              borderRadius: '8px', 
              border: '1px solid #fda4af' 
            }}>
              <p style={{ fontSize: '13px', color: '#9f1239', marginBottom: '10px', fontWeight: 'bold' }}>
                আপনি ৫ বার ভুল পাসওয়ার্ড দিয়েছেন।
              </p>
              <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '12px' }}>
                পাসওয়ার্ড জানতে সরাসরি ডিউটি অফিসারকে কল করুন:
              </p>
              <a 
                href={`tel:${DUTY_OFFICER_PHONE}`} 
                className="btn btn-red" 
                style={{ width: '100%', fontSize: '14px' }}
              >
                📞 ডিউটি অফিসারকে কল করুন
              </a>
            </div>
          )}
          
          <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '20px' }}>
            পাসওয়ার্ডের জন্য কর্তৃপক্ষের সাথে যোগাযোগ করুন।
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      <main className="container">
        {/* Contacts - Small size */}
        <EmergencyContacts />

        {/* Map - Interactive on demand */}
        <MapSection />

        {/* Video - Direct link */}
        <VideoSection />
        
        {/* Minimal Footer */}
        <footer style={{textAlign: 'center', padding: '30px 0', borderTop: '1px solid #eee', marginTop: '20px'}}>
          <p style={{fontSize: '12px', color: '#999'}}>
            © {new Date().getFullYear()} ভোলাহাট থানা নির্বাচনী কেন্দ্র। জনস্বার্থে সংগৃহীত।
          </p>
          <button 
            onClick={() => {
              localStorage.removeItem('vhat_auth');
              setIsAuthenticated(false);
              setFailedAttempts(0);
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#047857', 
              fontSize: '11px', 
              cursor: 'pointer',
              marginTop: '10px',
              textDecoration: 'underline'
            }}
          >
            লগ আউট করুন
          </button>
        </footer>
      </main>
    </div>
  );
};

export default App;
