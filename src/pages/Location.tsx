import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const center = {
  lat: -6.7924,
  lng: 39.2599
};

const containerStyle = {
  width: '100%',
  height: '500px'
};

export function Location() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Visit Our Store</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Store Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">Makumbusho Area, Sam Nujoma Road</p>
                      <p className="text-gray-600">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Opening Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+255 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">store@shadeiteyewear.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}