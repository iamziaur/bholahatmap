
import React from 'react';
import { TOP_CONTACTS } from '../types';

const EmergencyContacts: React.FC = () => {
  return (
    <section className="card">
      <h2 style={{fontSize: '16px', marginBottom: '10px', borderBottom: '2px solid #eee', paddingBottom: '5px'}}>📞 জরুরি যোগাযোগ (হেল্পলাইন)</h2>
      <div className="grid">
        {TOP_CONTACTS.map((contact, idx) => (
          <a key={idx} href={`tel:${contact.phone}`} className="contact-item" style={{textDecoration: 'none', color: 'inherit'}}>
            <span className="icon">📱</span>
            <div style={{overflow: 'hidden'}}>
              <div style={{fontWeight: 'bold', fontSize: '13px'}}>{contact.name}</div>
              <div style={{fontSize: '11px', color: '#666'}}>{contact.designation}</div>
              <div style={{color: '#047857', fontWeight: 'bold', fontSize: '12px'}}>{contact.phone}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EmergencyContacts;
