
import React from 'react';
import Header from './components/Header';
import MapSection from './components/MapSection';
import EmergencyContacts from './components/EmergencyContacts';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
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
        </footer>
      </main>
    </div>
  );
};

export default App;
