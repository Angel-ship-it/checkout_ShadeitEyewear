import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Classic Collection',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
    description: 'Timeless designs for everyday elegance'
  },
  {
    title: 'Sport Series',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80',
    description: 'Performance eyewear for active lifestyles'
  },
  {
    title: 'Luxury Line',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    description: 'Premium frames for distinguished taste'
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-gray-600">{collection.description}</p>
                <Link 
                  to="/shop" 
                  className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}