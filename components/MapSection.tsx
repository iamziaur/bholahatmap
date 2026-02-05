
import React from 'react';

const MapSection: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/d/u/1/embed?mid=1-qcNmBJRQUt8257LIptl3k-4uvWqQgs";

  return (
    <div className="card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
        <h2 style={{fontSize: '16px'}}>📍 নির্বাচনী মানচিত্র</h2>
        <span className="badge">লাইভ</span>
      </div>
      
      <div style={{height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb'}}>
        <iframe
          src={mapUrl}
          style={{width: '100%', height: '100%', border: 0}}
          title="Bholahat Map"
          loading="lazy"
        ></iframe>
      </div>

      <div style={{marginTop: '12px', padding: '10px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #dcfce7'}}>
        <p style={{fontSize: '13px', color: '#166534', fontWeight: 'bold'}}>
          💡 ম্যাপ ব্যবহারের নিয়ম:
        </p>
        <ul style={{fontSize: '12px', color: '#374151', marginTop: '4px', lineHeight: '1.5', paddingLeft: '15px'}}>
          <li>আপনার নির্দিষ্ট ইউনিয়ন দেখতে ম্যাপের উপরের বাম কোণের <b>মেনু [ ◧ ]</b> বাটনে ক্লিক করুন।</li>
          <li>ম্যাপটি বড় করে দেখতে ডান কোণের <b>ফুল স্ক্রিন [ ⛶ ]</b> বাটনে ক্লিক করুন।</li>
          <li>ইউনিয়নের ভিতরের কেন্দ্রগুলো স্পষ্টভাবে দেখতে ম্যাপটি জুম ইন করুন।</li>
        </ul>
      </div>
    </div>
  );
};

export default MapSection;
