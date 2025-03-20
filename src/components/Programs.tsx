import React from 'react';
import { siteConfig } from '../config/siteConfig';

const Programs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">トレーニングプログラム</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors">
                  詳しく見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;