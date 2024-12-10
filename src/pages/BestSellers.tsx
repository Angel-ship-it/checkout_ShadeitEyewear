import React from 'react';
import { Navbar } from '../components/Navbar';
import { BestSellers as BestSellersSection } from '../components/BestSellers';
import { Footer } from '../components/Footer';

export function BestSellers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <BestSellersSection />
      </main>
      <Footer />
    </div>
  );
}