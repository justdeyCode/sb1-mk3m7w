import React from 'react';
import { Star, Plane, Calendar, Globe2, Languages, MapPin } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { type CountryData } from '../types';
import { countriesData } from '../data/countries';

export default function CountryReview() {
  const { countryName } = useParams();
  const country = countriesData[countryName!];

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Country not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <img
          src={country.mainImage}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white flex items-center gap-4 drop-shadow-lg">
            {country.flag} {country.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{country.overview}</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">Highlights</h2>
              <ul className="space-y-2">
                {country.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-pink-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">Airports</h2>
              <div className="space-y-6">
                {country.airports.map((airport) => (
                  <div key={airport.code} className="border-b border-blue-100 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-800">
                        <Plane className="h-5 w-5 text-blue-500" />
                        {airport.name} ({airport.code})
                      </h3>
                      <div className="flex items-center">
                        <span className="mr-1">{airport.rating}</span>
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </div>
                    </div>
                    <p className="text-gray-700">{airport.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Capital</p>
                    <p className="font-medium text-gray-700">{country.capital}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Best Time to Visit</p>
                    <p className="font-medium text-gray-700">{country.bestTimeToVisit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="font-medium text-gray-700">{country.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}