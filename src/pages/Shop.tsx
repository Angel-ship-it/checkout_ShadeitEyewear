import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

const collections = {
  classic: [
    {
      id: 'classic-1',
      name: 'Vintage Round',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80',
      description: 'Timeless circular frames crafted with premium acetate for everyday elegance.'
    },
    {
      id: 'classic-2',
      name: 'Timeless Aviator',
      price: '$329',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
      description: 'Classic aviator style with modern lightweight materials for superior comfort.'
    },
    {
      id: 'classic-3',
      name: 'Classic Wayfarer',
      price: '$279',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
      description: 'Iconic wayfarer design updated with sustainable materials.'
    },
    {
      id: 'classic-4',
      name: 'Elegant Square',
      price: '$289',
      image: 'https://images.unsplash.com/photo-1614715838608-dd527c46231d?auto=format&fit=crop&w=600&q=80',
      description: 'Sophisticated square frames perfect for both formal and casual occasions.'
    }
  ],
  sport: [
    {
      id: 'sport-1',
      name: 'Athletic Pro',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80',
      description: 'High-performance frames designed for active lifestyles.'
    },
    {
      id: 'sport-2',
      name: 'Runner Elite',
      price: '$269',
      image: 'https://images.unsplash.com/photo-1618483117897-31787c9582bd?auto=format&fit=crop&w=600&q=80',
      description: 'Lightweight and durable frames perfect for runners and athletes.'
    },
    {
      id: 'sport-3',
      name: 'Sport Shield',
      price: '$289',
      image: 'https://images.unsplash.com/photo-1604785846291-2cd9ac49b991?auto=format&fit=crop&w=600&q=80',
      description: 'Maximum coverage with advanced lens technology for outdoor activities.'
    },
    {
      id: 'sport-4',
      name: 'Active Wrap',
      price: '$259',
      image: 'https://images.unsplash.com/photo-1617722537193-0fcdbe4eefa8?auto=format&fit=crop&w=600&q=80',
      description: 'Wrap-around design offering superior protection and stability.'
    }
  ],
  luxury: [
    {
      id: 'luxury-1',
      name: 'Diamond Elite',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?auto=format&fit=crop&w=600&q=80',
      description: 'Premium frames adorned with ethically sourced diamond accents.'
    },
    {
      id: 'luxury-2',
      name: 'Gold Series',
      price: '$649',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80',
      description: 'Luxurious frames featuring 24K gold-plated details.'
    },
    {
      id: 'luxury-3',
      name: 'Platinum Frame',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=600&q=80',
      description: 'Exclusive platinum-finished frames with premium lens technology.'
    },
    {
      id: 'luxury-4',
      name: 'Crystal Vision',
      price: '$579',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80',
      description: 'Elegant frames featuring premium crystal embellishments.'
    }
  ]
};

export function Shop() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const toggleDescription = (itemId: string) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        {Object.entries(collections).map(([category, items]) => (
          <section key={category} className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 capitalize">{category} Collection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button 
                          onClick={() => toggleDescription(item.id)}
                          className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition"
                        >
                          {selectedItem === item.id ? 'Hide Details' : 'View Details'}
                        </button>
                        <button 
                          onClick={() => handleAddToCart(item)}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium transform -translate-y-2 group-hover:translate-y-0 transition flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <span className="text-indigo-600 font-medium">{item.price}</span>
                      </div>
                      {selectedItem === item.id ? (
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      ) : (
                        <p className="text-gray-600 text-sm">Click 'View Details' to learn more</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}