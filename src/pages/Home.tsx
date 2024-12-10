import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Collections } from '../components/Collections';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
      </main>
      <Footer />
    </div>
  );
}