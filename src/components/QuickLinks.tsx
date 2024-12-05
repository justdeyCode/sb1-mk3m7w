import React from 'react';
import { Plane, Shield, Book, MapPin, Phone, Heart } from 'lucide-react';

const links = [
  { name: 'Google Flights', icon: <Plane className="w-5 h-5" />, href: 'https://www.google.com/flights' },
  { name: 'Travel Insurance', icon: <Shield className="w-5 h-5" />, href: '#' },
  { name: 'Travel Guides', icon: <Book className="w-5 h-5" />, href: '#' },
  { name: 'Destinations', icon: <MapPin className="w-5 h-5" />, href: '#' },
  { name: 'Contact Us', icon: <Phone className="w-5 h-5" />, href: '#' },
  { name: 'Travel Tips', icon: <Heart className="w-5 h-5" />, href: '#' },
];

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center space-x-2 text-indigo-200 hover:text-white transition-colors group"
          >
            <span className="transform group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}