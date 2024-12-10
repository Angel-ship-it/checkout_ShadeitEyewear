import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-8">
              Your order has been successfully placed. We'll send you an email with your order details shortly.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}