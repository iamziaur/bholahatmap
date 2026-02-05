
import React from 'react';

const MapSection: React.FC = () => {
  const targetLink = "https://www.google.com/maps/d/viewer?mid=1-qcNmBJRQUt8257LIptl3k-4uvWqQgs&ehbc=2E312F";

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', background: 'transparent' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', padding: '0 5px' }}>
        <div style={{ width: '6px', height: '24px', backgroundColor: '#047857', borderRadius: '10px' }}></div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>ভোলাহাট থানা ভোট কেন্দ্র মানচিত্র</h2>
      </div>

      <a 
        href={targetLink}
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          display: 'block',
          width: '100%',
          minHeight: '350px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden',
          border: '2px dashed #047857',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 25px -5px rgba(4, 120, 87, 0.1)',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.borderColor = '#065f46';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(4, 120, 87, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = '#047857';
          e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(4, 120, 87, 0.1)';
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(#047857 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Central Content */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ position: 'relative', marginBottom: '25px' }}>
            {/* Animated Pulse Circles */}
            <div className="pulse-bg" style={{
              position: 'absolute',
              inset: '-20px',
              backgroundColor: 'rgba(4, 120, 87, 0.1)',
              borderRadius: '50%',
            }}></div>
            
            {/* Map Icon Box */}
            <div style={{
              position: 'relative',
              backgroundColor: '#fff',
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f3f4f6'
            }}>
              <svg style={{ width: '40px', height: '40px', color: '#047857' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#111827', marginBottom: '8px' }}>
            ভোলাহাট নির্বাচনী ম্যাপ
          </h3>
          <p style={{ fontSize: '14px', color: '#4b5563', maxWidth: '280px', marginBottom: '25px', fontWeight: '500' }}>
            গুগল ম্যাপসে বিস্তারিত কেন্দ্র দেখতে এখানে ক্লিক করুন
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#047857',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 10px 15px -3px rgba(4, 120, 87, 0.3)'
          }}>
            <span>ম্যাপটি দেখুন</span>
            <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>

        {/* Footer info label */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.5
        }}>
          <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#047857' }}>
            Interactive Digital Preview
          </span>
        </div>
      </a>

      <style>{`
        @keyframes pulse-animation {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .pulse-bg {
          animation: pulse-animation 2s infinite ease-out;
        }
      `}</style>

      <div style={{marginTop: '15px', padding: '12px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd'}}>
        <p style={{fontSize: '13px', color: '#0369a1', fontWeight: 'bold'}}>
          💡 নির্দেশনা:
        </p>
        <p style={{fontSize: '12px', color: '#334155', marginTop: '4px'}}>
          বাটনে ক্লিক করলে একটি নতুন উইন্ডোতে গুগল ম্যাপ ওপেন হবে যেখানে ভোলাহাটের সকল ভোট কেন্দ্র পিন করা আছে।
        </p>
      </div>
    </div>
  );
};

export default MapSection;
