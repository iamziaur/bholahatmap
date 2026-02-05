
import React from 'react';
import { GUIDANCE_CONTACTS } from '../types';

const FooterGuidance: React.FC = () => {
  return (
    <section className="bg-white py-12 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-gray-300"></div>
          <h2 className="text-2xl font-bold text-gray-800 text-center uppercase tracking-wider">সার্বিক দিকনির্দেশনায়</h2>
          <div className="h-px w-12 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDANCE_CONTACTS.map((contact, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-3xl bg-gray-50 border border-gray-100 transition-transform hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl mb-4 ${contact.iconColor}`}>
                <i className={contact.icon}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
              <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center leading-tight">
                {contact.designation}
              </p>
              
              <div className="flex flex-col gap-2 w-full mt-auto">
                <a 
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center justify-center gap-2 bg-white border border-emerald-200 text-emerald-700 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-phone"></i>
                  {contact.phone}
                </a>
                {contact.profileLink && (
                  <a 
                    href={contact.profileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center justify-center gap-1"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    অফিসিয়াল প্রোফাইল দেখুন
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterGuidance;
