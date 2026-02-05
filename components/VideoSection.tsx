
import React from 'react';

const VideoSection: React.FC = () => {
  const youtubeUrl = "https://youtu.be/wBudmDxFQy4";

  return (
    <div className="card text-center" style={{borderColor: '#fee2e2'}}>
      <h2 style={{fontSize: '18px', color: '#b91c1c', marginBottom: '15px'}}>
        ভোট দেওয়ার নিয়মাবলী বিস্তারিত জানতে ভিডিওটি সম্পূর্ণ দেখুন।
      </h2>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red" style={{width: '100%'}}>
        <span style={{marginRight: '8px'}}>▶</span> সরাসরি ইউটিউবে ভিডিওটি দেখুন
      </a>
      <div className="mt-4">
        <span className="badge" style={{background: '#fef2f2', color: '#991b1b'}}>অফিসিয়াল টিউটোরিয়াল</span>
      </div>
    </div>
  );
};

export default VideoSection;
