import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import FeaturedCountries from './components/FeaturedCountries';
import AirlineReviews from './components/AirlineReviews';
import CountryReview from './components/CountryReview';
import QuickLinks from './components/QuickLinks';
import { countriesData } from './data/countries';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <SearchBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-indigo-900">Featured Destinations</h2>
          <FeaturedCountries />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-indigo-900">Latest Travel Stories</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-6 border border-blue-100">
              <p className="text-gray-700">
                Explore our curated collection of travel stories and experiences from around the world.
                Get inspired for your next journey!
              </p>
            </div>
          </div>
          <div>
            <AirlineReviews />
          </div>
        </section>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/country/:countryName" 
            element={<CountryReview />}
          />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-indigo-200">
                  Helping travelers discover the world's most amazing destinations.
                </p>
              </div>
              <QuickLinks />
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;