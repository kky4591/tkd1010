import React from 'react';
import { ChevronRight, Trophy, Users, Shield, Timer } from 'lucide-react';
import HeroSection from './components/HeroSection';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import Programs from './components/Programs';
import Statistics from './components/Statistics';
import Instructors from './components/Instructors';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Philosophy />
      <Features />
      <Programs />
      <Statistics />
      <Instructors />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;