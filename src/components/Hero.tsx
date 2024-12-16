import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] mt-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
          alt="Medical professionals in consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl mb-8">
            Experience world-class healthcare with our team of dedicated professionals. 
            We combine cutting-edge technology with compassionate care to ensure the 
            best possible outcomes for our patients.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-colors">
              <span>Schedule a Visit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}