import React from 'react';
import { Leaf, Recycle, Droplets, Users, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Since our founding in 1990, ShadeItEyewear has been at the forefront of combining 
            artisanal craftsmanship with sustainable innovation. Our journey began with a simple 
            mission: to create exceptional eyewear that not only enhances your vision but also 
            protects our planet.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Artisans</h3>
            <p className="text-gray-600">
              Our frames are handcrafted by master artisans with decades of experience
              in luxury eyewear manufacturing.
            </p>
          </div>
          <div className="text-center p-6">
            <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              We partner with global initiatives to reduce carbon footprint and
              support sustainable practices worldwide.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">
              Every frame undergoes rigorous quality testing to ensure
              exceptional durability and comfort.
            </p>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-green-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sustainable Vision</h2>
            <p className="text-gray-600">
              Our commitment to the environment drives innovation in sustainable eyewear manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
      </div>
    </section>
  );
}