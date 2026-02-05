
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
        <span style={{fontSize: '24px'}}>🗳️</span>
        <h1 style={{fontSize: '20px'}}>ভোট কেন্দ্র <span style={{opacity: 0.8}}>ভোলাহাট থানা</span></h1>
      </div>
    </header>
  );
};

export default Header;
