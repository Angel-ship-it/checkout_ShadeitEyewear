import React from 'react';
import { Star, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Hand-crafted frames using the finest materials'
  },
  {
    icon: Shield,
    title: '2-Year Warranty',
    description: 'Complete coverage for peace of mind'
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Created by skilled artisans with decades of experience'
  }
];

export function Featured() {
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ShadeItEyewear</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern technology to create
            eyewear that exceeds expectations in both style and functionality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}