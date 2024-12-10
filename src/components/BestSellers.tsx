import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const bestSellers = [
  {
    category: 'Classic Collection',
    items: [
      {
        name: 'Vintage Round',
        price: '$299',
        rating: 4.9,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Timeless Aviator',
        price: '$329',
        rating: 4.8,
        reviews: 96,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    category: 'Sport Series',
    items: [
      {
        name: 'Athletic Pro',
        price: '$249',
        rating: 4.9,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Runner Elite',
        price: '$269',
        rating: 4.7,
        reviews: 84,
        image: 'https://images.unsplash.com/photo-1618483117897-31787c9582bd?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    category: 'Luxury Line',
    items: [
      {
        name: 'Diamond Elite',
        price: '$599',
        rating: 5.0,
        reviews: 64,
        image: 'https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gold Series',
        price: '$649',
        rating: 4.9,
        reviews: 72,
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export function BestSellers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved pieces, carefully selected from each collection.
            These frames represent the perfect blend of style, comfort, and craftsmanship.
          </p>
        </div>

        <div className="space-y-16">
          {bestSellers.map((collection) => (
            <div key={collection.category}>
              <h3 className="text-2xl font-semibold mb-8">{collection.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {collection.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Link 
                          to="/shop" 
                          className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-lg font-medium text-indigo-600">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-current text-yellow-400" />
                        <span className="font-medium">{item.rating}</span>
                        <span className="text-gray-500">({item.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}