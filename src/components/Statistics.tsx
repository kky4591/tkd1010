import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Statistics = () => {
  return (
    <section className="py-16 bg-red-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;