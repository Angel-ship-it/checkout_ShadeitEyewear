import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Full-screen background image */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <img
          src="/images/hero/golden-glasses.jpg"
          alt="Artistic golden face wearing ShadeItEyewear glasses"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-xl text-white">
          <div className="space-y-8">            
            <h1 className="text-6xl font-light space-y-3">
              <span className="block">Art of</span>
              <span className="block font-medium">Vision</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed font-light">
              Where luxury meets innovation. Each frame is a masterpiece, 
              crafted to transform your perspective of the world.
            </p>

            <Link 
              to="/shop" 
              className="inline-block bg-white/90 backdrop-blur-sm text-black px-8 py-3 rounded-full text-sm tracking-wider hover:bg-white transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}