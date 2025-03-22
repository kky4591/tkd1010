import React from 'react';
import { siteConfig } from '../config/siteConfig';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://fuchudojo.sakura.ne.jp/itf-japan/2015/150827-30.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-700/80" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {siteConfig.description}
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
            無料体験を予約
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;