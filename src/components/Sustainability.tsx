import React from 'react';
import { Leaf, Recycle, Droplets } from 'lucide-react';

export function Sustainability() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sustainable Vision</h2>
          <p className="text-gray-600">
            Our commitment to the environment drives innovation in sustainable eyewear manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Recycled Acetate Technology</h3>
                <p className="text-gray-600">
                  Our frames are crafted from bio-based and recycled acetate, reducing plastic waste
                  while maintaining premium quality and durability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Production</h3>
                <p className="text-gray-600">
                  Our manufacturing process uses 87% less water and produces 70% fewer carbon emissions
                  compared to traditional methods.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Droplets className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zero Waste Initiative</h3>
                <p className="text-gray-600">
                  We recycle 100% of our production waste into new frames, creating a closed-loop
                  manufacturing system.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable eyewear production"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-sm text-gray-600">Recycled Materials</p>
              <p className="text-2xl font-bold text-green-600">85% Used</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}