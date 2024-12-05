import React from 'react';
import { Plane, Map, Star, Users, Phone } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Plane className="h-8 w-8 text-blue-600" />
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', icon: <Map className="h-5 w-5" /> },
                { name: 'Destinations', icon: <Star className="h-5 w-5" /> },
                { name: 'Reviews', icon: <Users className="h-5 w-5" /> },
                { name: 'Contact', icon: <Phone className="h-5 w-5" /> },
              ].map((item) => (
                <button
                  key={item.name}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}