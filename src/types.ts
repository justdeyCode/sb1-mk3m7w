export interface Airport {
  name: string;
  code: string;
  rating: number;
  description: string;
}

export interface CountryData {
  name: string;
  capital: string;
  mainImage: string;
  flag: string;
  airports: Airport[];
  overview: string;
  highlights: string[];
  bestTimeToVisit: string;
  currency: string;
  languages: string[];
  rating: number;
}