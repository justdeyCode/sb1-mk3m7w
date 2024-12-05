import React from 'react';
import { Star } from 'lucide-react';

const airlines = [
  { name: 'Qatar Airways', rating: 4.8 },
  { name: 'Singapore Airlines', rating: 4.7 },
  { name: 'Emirates', rating: 4.6 },
  { name: 'ANA', rating: 4.5 },
];

export default function AirlineReviews() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Top Airlines</h2>
      <div className="space-y-4">
        {airlines.map((airline) => (
          <div key={airline.name} className="flex items-center justify-between">
            <span className="text-lg">{airline.name}</span>
            <div className="flex items-center">
              <span className="mr-2">{airline.rating}</span>
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}