import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav2 = () => {
  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate(`/#${targetId}`);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex items-center justify-center p-2 lg:flex-row text-white">
      <div className="space-x-6 flex items-center">
        <button onClick={() => handleNavigation('featured-card')} className="hover:underline">FEATURED</button>
        <span className="text-white">|</span>
        <button onClick={() => handleNavigation('music-chart')} className="hover:underline">CHARTS</button>
        <span className="text-white">|</span>
        <a href="https://www.youtube.com/channel/UCyFZMEnm1il5Wv3a6tPscbA" target="_blank" rel="noopener noreferrer" className="hover:underline">VIDEOS</a>
      </div>
    </div>
  );
};

export default Nav2;
