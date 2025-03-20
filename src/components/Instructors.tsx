import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Instructors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">指導者紹介</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.instructors.map((instructor, index) => (
            <div key={index} className="text-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;