import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { countriesData } from '../data/countries';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 0) {
      const filtered = Object.keys(countriesData).filter(country =>
        countriesData[country].name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleCountrySelect = (countryKey: string) => {
    setQuery(countriesData[countryKey].name);
    setSuggestions([]);
    navigate(`/country/${countryKey}`);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search your next destination..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none pr-12"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
      </div>
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {suggestions.map((countryKey) => (
            <button
              key={countryKey}
              onClick={() => handleCountrySelect(countryKey)}
              className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <span>{countriesData[countryKey].flag}</span>
              <span>{countriesData[countryKey].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}