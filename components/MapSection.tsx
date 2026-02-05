
import React, { useState } from 'react';

const MapSection: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const mapUrl = "https://www.google.com/maps/d/u/1/embed?mid=1-qcNmBJRQUt8257LIptl3k-4uvWqQgs";

  return (
    <div className="card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
        <h2 style={{fontSize: '16px'}}>📍 নির্বাচনী মানচিত্র</h2>
        <span className="badge">লাইভ</span>
      </div>
      
      {!showMap ? (
        <div className="placeholder-map">
          <button onClick={() => setShowMap(true)} className="btn btn-outline">ম্যাপ লোড করুন</button>
        </div>
      ) : (
        <div style={{height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden'}}>
          <iframe
            src={mapUrl}
            style={{width: '100%', height: '100%', border: 0}}
            title="Bholahat Map"
          ></iframe>
        </div>
      )}
      <div style={{marginTop: '12px', padding: '10px', background: '#f0fdf4', borderRadius: '8px', border: '1px border #dcfce7'}}>
        <p style={{fontSize: '13px', color: '#166534', fontWeight: 'bold'}}>
          💡 আপনার নির্দিষ্ট ইউনিয়ন দেখতে:
        </p>
        <p style={{fontSize: '12px', color: '#374151', marginTop: '4px', lineHeight: '1.4'}}>
          ম্যাপের উপরের বাম কোণের <b>মেনু [ ◧ ]</b> বাটনে ক্লিক করুন। তাহলে ৪টি ইউনিয়নের তালিকা দেখতে পাবেন এবং আপনার ইউনিয়নের কেন্দ্রগুলো খুঁজে পাবেন। এছাড়া বিস্তারিত দেখতে ম্যাপটি জুম ইন করুন।
        </p>
      </div>
    </div>
  );
};

export default MapSection;
