import React from 'react';

const featuredCountries = [
  {
    name: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    description: 'Where tradition meets innovation'
  },
  {
    name: 'Italy',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800',
    description: 'Art, culture, and cuisine'
  },
  {
    name: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    description: 'Adventure awaits in nature'
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
    description: 'Paradise beaches and culture'
  },
  {
    name: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    description: 'Romance in every corner'
  }
];

export default function FeaturedCountries() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredCountries.map((country) => (
        <div key={country.name} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
          <img
            src={country.image}
            alt={country.name}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl font-bold text-white">{country.name}</h3>
              <p className="text-gray-200">{country.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}