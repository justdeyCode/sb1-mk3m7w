import { type CountryData } from '../types';

export const countriesData: Record<string, CountryData> = {
  'united-states': {
    name: 'United States',
    capital: 'Washington, D.C.',
    mainImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=2000',
    flag: '🇺🇸',
    airports: [
      {
        name: 'John F. Kennedy International Airport',
        code: 'JFK',
        rating: 4.1,
        description: 'One of the busiest international air passenger gateways in America, offering extensive connections worldwide.'
      }
    ],
    overview: 'The United States offers an incredibly diverse range of experiences, from bustling cities to stunning national parks. Each state brings its own unique culture, cuisine, and attractions.',
    highlights: [
      'Grand Canyon',
      'New York City',
      'Yellowstone National Park',
      'Walt Disney World',
      'Las Vegas Strip'
    ],
    bestTimeToVisit: 'May to September',
    currency: 'US Dollar (USD)',
    languages: ['English'],
    rating: 4.8
  },
  austria: {
    name: 'Austria',
    capital: 'Vienna',
    mainImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2000',
    flag: '🇦🇹',
    airports: [
      {
        name: 'Vienna International Airport',
        code: 'VIE',
        rating: 4.3,
        description: 'Modern airport serving as the country\'s largest gateway, known for its efficiency and cleanliness.'
      }
    ],
    overview: 'Austria captivates visitors with its imperial history, stunning Alpine scenery, and rich cultural heritage. From the musical legacy of Mozart to the architectural splendor of Vienna, Austria offers a perfect blend of culture and nature.',
    highlights: [
      'Schönbrunn Palace',
      'Salzburg Old Town',
      'Austrian Alps',
      'Belvedere Palace',
      'Hallstatt Village'
    ],
    bestTimeToVisit: 'April to October',
    currency: 'Euro (EUR)',
    languages: ['German'],
    rating: 4.7
  },
  canada: {
    name: 'Canada',
    capital: 'Ottawa',
    mainImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=2000',
    flag: '🇨🇦',
    airports: [
      {
        name: 'Toronto Pearson International Airport',
        code: 'YYZ',
        rating: 4.2,
        description: 'Canada\'s largest and busiest airport, offering connections to destinations worldwide.'
      }
    ],
    overview: 'Canada\'s vast wilderness, multicultural cities, and friendly people make it a prime destination. From the Rocky Mountains to the Northern Lights, Canada offers endless natural wonders.',
    highlights: [
      'Banff National Park',
      'Niagara Falls',
      'CN Tower',
      'Old Quebec',
      'Northern Lights'
    ],
    bestTimeToVisit: 'June to September',
    currency: 'Canadian Dollar (CAD)',
    languages: ['English', 'French'],
    rating: 4.8
  },
  china: {
    name: 'China',
    capital: 'Beijing',
    mainImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=2000',
    flag: '🇨🇳',
    airports: [
      {
        name: 'Beijing Capital International Airport',
        code: 'PEK',
        rating: 4.4,
        description: 'One of the world\'s busiest airports, featuring state-of-the-art facilities and excellent connectivity.'
      }
    ],
    overview: 'China\'s ancient civilization, iconic landmarks, and modern cities create an unforgettable travel experience. From the Great Wall to bustling Shanghai, China offers a journey through time.',
    highlights: [
      'Great Wall of China',
      'Forbidden City',
      'Terracotta Army',
      'Li River',
      'Shanghai Bund'
    ],
    bestTimeToVisit: 'September to October',
    currency: 'Chinese Yuan (CNY)',
    languages: ['Mandarin Chinese'],
    rating: 4.7
  },
  'czech-republic': {
    name: 'Czech Republic',
    capital: 'Prague',
    mainImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=2000',
    flag: '🇨🇿',
    airports: [
      {
        name: 'Václav Havel Airport Prague',
        code: 'PRG',
        rating: 4.1,
        description: 'The country\'s main international airport, offering good connections to European destinations.'
      }
    ],
    overview: 'The Czech Republic enchants visitors with its fairy-tale architecture, rich history, and world-famous beer. Prague\'s stunning old town and medieval charm make it a must-visit destination.',
    highlights: [
      'Charles Bridge',
      'Prague Castle',
      'Old Town Square',
      'Český Krumlov',
      'Karlovy Vary'
    ],
    bestTimeToVisit: 'May to September',
    currency: 'Czech Koruna (CZK)',
    languages: ['Czech'],
    rating: 4.6
  },
  denmark: {
    name: 'Denmark',
    capital: 'Copenhagen',
    mainImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=2000',
    flag: '🇩🇰',
    airports: [
      {
        name: 'Copenhagen Airport',
        code: 'CPH',
        rating: 4.5,
        description: 'Scandinavia\'s largest airport, known for its efficient design and Nordic aesthetics.'
      }
    ],
    overview: 'Denmark offers a perfect blend of historic charm and modern design. From Copenhagen\'s colorful harbors to Viking heritage sites, Denmark provides a unique Scandinavian experience.',
    highlights: [
      'Tivoli Gardens',
      'Nyhavn',
      'Little Mermaid',
      'Kronborg Castle',
      'LEGOLAND Billund'
    ],
    bestTimeToVisit: 'May to August',
    currency: 'Danish Krone (DKK)',
    languages: ['Danish'],
    rating: 4.7
  },
  france: {
    name: 'France',
    capital: 'Paris',
    mainImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000',
    flag: '🇫🇷',
    airports: [
      {
        name: 'Charles de Gaulle Airport',
        code: 'CDG',
        rating: 4.2,
        description: 'The main international airport serving Paris, known for its modern terminals and excellent connectivity.'
      }
    ],
    overview: 'France enchants visitors with its romantic cities, stunning architecture, world-class cuisine, and rich cultural heritage. From the iconic Eiffel Tower to the charming countryside of Provence, France offers an unforgettable journey through history, art, and gastronomy.',
    highlights: [
      'Eiffel Tower',
      'Louvre Museum',
      'Palace of Versailles',
      'French Riviera',
      'Mont Saint-Michel'
    ],
    bestTimeToVisit: 'April to October',
    currency: 'Euro (EUR)',
    languages: ['French'],
    rating: 4.8
  },
  germany: {
    name: 'Germany',
    capital: 'Berlin',
    mainImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    flag: '🇩🇪',
    airports: [
      {
        name: 'Frankfurt Airport',
        code: 'FRA',
        rating: 4.4,
        description: 'One of Europe\'s major aviation hubs, known for its efficiency and excellent connections.'
      }
    ],
    overview: 'Germany combines rich history with modern innovation. From medieval castles to vibrant urban scenes, the country offers diverse experiences alongside world-famous beer and festivals.',
    highlights: [
      'Brandenburg Gate',
      'Neuschwanstein Castle',
      'Black Forest',
      'Oktoberfest',
      'Berlin Wall'
    ],
    bestTimeToVisit: 'May to September',
    currency: 'Euro (EUR)',
    languages: ['German'],
    rating: 4.7
  },
  india: {
    name: 'India',
    capital: 'New Delhi',
    mainImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=2000',
    flag: '🇮🇳',
    airports: [
      {
        name: 'Indira Gandhi International Airport',
        code: 'DEL',
        rating: 4.3,
        description: 'India\'s largest airport, featuring modern terminals and extensive domestic and international connections.'
      }
    ],
    overview: 'India is a vibrant tapestry of colors, cultures, and traditions. From the majestic Taj Mahal to the bustling streets of Mumbai, India offers an sensory-rich adventure.',
    highlights: [
      'Taj Mahal',
      'Jaipur Pink City',
      'Kerala Backwaters',
      'Varanasi Ghats',
      'Golden Temple'
    ],
    bestTimeToVisit: 'October to March',
    currency: 'Indian Rupee (INR)',
    languages: ['Hindi', 'English'],
    rating: 4.6
  },
  indonesia: {
    name: 'Indonesia',
    capital: 'Jakarta',
    mainImage: 'https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?auto=format&fit=crop&q=80&w=2000',
    flag: '🇮🇩',
    airports: [
      {
        name: 'Soekarno-Hatta International Airport',
        code: 'CGK',
        rating: 4.1,
        description: 'Indonesia\'s main gateway, serving Jakarta with connections to destinations worldwide.'
      }
    ],
    overview: 'Indonesia\'s thousands of islands offer endless adventures, from pristine beaches to ancient temples. Bali\'s culture, Java\'s volcanoes, and Komodo\'s dragons create unique experiences.',
    highlights: [
      'Bali Temples',
      'Borobudur Temple',
      'Komodo National Park',
      'Raja Ampat Islands',
      'Mount Bromo'
    ],
    bestTimeToVisit: 'April to October',
    currency: 'Indonesian Rupiah (IDR)',
    languages: ['Indonesian'],
    rating: 4.7
  },
  ireland: {
    name: 'Ireland',
    capital: 'Dublin',
    mainImage: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=2000',
    flag: '🇮🇪',
    airports: [
      {
        name: 'Dublin Airport',
        code: 'DUB',
        rating: 4.2,
        description: 'Ireland\'s largest airport, offering excellent connections to Europe and North America.'
      }
    ],
    overview: 'Ireland\'s green landscapes, historic castles, and warm hospitality create an unforgettable experience. From Dublin\'s literary heritage to the Wild Atlantic Way, Ireland captivates visitors.',
    highlights: [
      'Cliffs of Moher',
      'Ring of Kerry',
      'Dublin Castle',
      'Giant\'s Causeway',
      'Blarney Castle'
    ],
    bestTimeToVisit: 'May to September',
    currency: 'Euro (EUR)',
    languages: ['English', 'Irish'],
    rating: 4.7
  },
  italy: {
    name: 'Italy',
    capital: 'Rome',
    mainImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=2000',
    flag: '🇮🇹',
    airports: [
      {
        name: 'Leonardo da Vinci International Airport',
        code: 'FCO',
        rating: 4.0,
        description: 'Rome\'s main international airport, offering excellent connections to major European cities.'
      }
    ],
    overview: 'Italy captivates visitors with its rich history, stunning art, delicious cuisine, and passionate culture. From ancient ruins to Renaissance masterpieces, coastal villages to rolling hills, Italy offers an incredible diversity of experiences.',
    highlights: [
      'Colosseum',
      'Vatican Museums',
      'Venice Canals',
      'Tuscany Region',
      'Amalfi Coast'
    ],
    bestTimeToVisit: 'April to June or September to October',
    currency: 'Euro (EUR)',
    languages: ['Italian'],
    rating: 4.9
  },
  japan: {
    name: 'Japan',
    capital: 'Tokyo',
    mainImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000',
    flag: '🇯🇵',
    airports: [
      {
        name: 'Haneda Airport',
        code: 'HND',
        rating: 4.8,
        description: 'One of the most punctual and cleanest airports in the world, offering excellent domestic and international connections.'
      }
    ],
    overview: 'Japan seamlessly blends ancient traditions with cutting-edge technology. From serene temples to bustling urban districts, the country offers a unique cultural experience that captivates visitors.',
    highlights: [
      'Mount Fuji',
      'Kyoto Temples',
      'Tokyo Skytree',
      'Osaka Castle',
      'Hiroshima Peace Memorial'
    ],
    bestTimeToVisit: 'March to May and October to November',
    currency: 'Japanese Yen (JPY)',
    languages: ['Japanese'],
    rating: 4.9
  },
  maldives: {
    name: 'Maldives',
    capital: 'Male',
    mainImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000',
    flag: '🇲🇻',
    airports: [
      {
        name: 'Velana International Airport',
        code: 'MLE',
        rating: 4.3,
        description: 'The main gateway to the Maldives, offering seamless connections to luxury resorts.'
      }
    ],
    overview: 'The Maldives is a tropical paradise of pristine beaches, crystal-clear waters, and luxury resorts. Each island offers a unique blend of relaxation and water activities.',
    highlights: [
      'Overwater Bungalows',
      'Male Fish Market',
      'Artificial Beach',
      'National Museum',
      'Underwater Restaurants'
    ],
    bestTimeToVisit: 'November to April',
    currency: 'Maldivian Rufiyaa (MVR)',
    languages: ['Dhivehi', 'English'],
    rating: 4.9
  },
  mexico: {
    name: 'Mexico',
    capital: 'Mexico City',
    mainImage: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&q=80&w=2000',
    flag: '🇲🇽',
    airports: [
      {
        name: 'Mexico City International Airport',
        code: 'MEX',
        rating: 4.0,
        description: 'The country\'s largest airport, serving as a major hub for Latin America.'
      }
    ],
    overview: 'Mexico\'s rich cultural heritage, ancient ruins, and beautiful beaches create an exciting destination. From colonial cities to Caribbean coastlines, Mexico offers diverse experiences.',
    highlights: [
      'Chichen Itza',
      'Cancun Beaches',
      'Frida Kahlo Museum',
      'Copper Canyon',
      'Tulum Ruins'
    ],
    bestTimeToVisit: 'December to April',
    currency: 'Mexican Peso (MXN)',
    languages: ['Spanish'],
    rating: 4.7
  },
  netherlands: {
    name: 'Netherlands',
    capital: 'Amsterdam',
    mainImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=2000',
    flag: '🇳🇱',
    airports: [
      {
        name: 'Amsterdam Airport Schiphol',
        code: 'AMS',
        rating: 4.5,
        description: 'One of Europe\'s largest and most efficient airports, known for its excellent facilities.'
      }
    ],
    overview: 'The Netherlands charms visitors with its picturesque canals, windmills, and cycling culture. From Amsterdam\'s museums to tulip fields, the country offers unique experiences.',
    highlights: [
      'Amsterdam Canals',
      'Van Gogh Museum',
      'Keukenhof Gardens',
      'Kinderdijk Windmills',
      'Royal Palace'
    ],
    bestTimeToVisit: 'April to October',
    currency: 'Euro (EUR)',
    languages: ['Dutch'],
    rating: 4.7
  },
  'new-zealand': {
    name: 'New Zealand',
    capital: 'Wellington',
    mainImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000',
    flag: '🇳🇿',
    airports: [
      {
        name: 'Auckland Airport',
        code: 'AKL',
        rating: 4.4,
        description: 'New Zealand\'s largest airport, offering excellent connections to Pacific and Asian destinations.'
      }
    ],
    overview: 'New Zealand\'s dramatic landscapes, from rolling hills to glacial fjords, create a paradise for nature lovers and adventure seekers.',
    highlights: [
      'Milford Sound',
      'Hobbiton Movie Set',
      'Rotorua Geothermals',
      'Bay of Islands',
      'Mount Cook'
    ],
    bestTimeToVisit: 'December to February',
    currency: 'New Zealand Dollar (NZD)',
    languages: ['English', 'Māori'],
    rating: 4.9
  },
  poland: {
    name: 'Poland',
    capital: 'Warsaw',
    mainImage: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=2000',
    flag: '🇵🇱',
    airports: [
      {
        name: 'Warsaw Chopin Airport',
        code: 'WAW',
        rating: 4.2,
        description: 'Poland\'s busiest airport, offering good connections across Europe.'
      }
    ],
    overview: 'Poland\'s rich history, medieval castles, and vibrant cities create an engaging destination. From Krakow\'s old town to the Wieliczka Salt Mine, Poland offers unique experiences.',
    highlights: [
      'Wawel Castle',
      'Auschwitz Memorial',
      'Old Town Warsaw',
      'Wieliczka Salt Mine',
      'Malbork Castle'
    ],
    bestTimeToVisit: 'June to August',
    currency: 'Polish Złoty (PLN)',
    languages: ['Polish'],
    rating: 4.6
  },
  portugal: {
    name: 'Portugal',
    capital: 'Lisbon',
    mainImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=2000',
    flag: '🇵🇹',
    airports: [
      {
        name: 'Lisbon Airport',
        code: 'LIS',
        rating: 4.1,
        description: 'Portugal\'s main international gateway, conveniently located near the city center.'
      }
    ],
    overview: 'Portugal enchants visitors with its coastal beauty, historic cities, and warm hospitality. From Porto\'s wine cellars to Algarve\'s beaches, Portugal offers diverse experiences.',
    highlights: [
      'Belém Tower',
      'Porto\'s Ribeira',
      'Sintra Palaces',
      'Algarve Beaches',
      'Douro Valley'
    ],
    bestTimeToVisit: 'March to October',
    currency: 'Euro (EUR)',
    languages: ['Portuguese'],
    rating: 4.8
  },
  qatar: {
    name: 'Qatar',
    capital: 'Doha',
    mainImage: 'https://images.unsplash.com/photo-1562835155-a7c2a225e97d?auto=format&fit=crop&q=80&w=2000',
    flag: '🇶🇦',
    airports: [
      {
        name: 'Hamad International Airport',
        code: 'DOH',
        rating: 5,
        description: 'One of the most luxurious airports in the world, featuring modern architecture and premium facilities.'
      }
    ],
    overview: 'Qatar combines traditional Arabian heritage with modern luxury, featuring stunning architecture, desert adventures, and world-class hospitality.',
    highlights: [
      'The Pearl-Qatar',
      'Souq Waqif',
      'Museum of Islamic Art',
      'Katara Cultural Village',
      'Desert Safari Adventures'
    ],
    bestTimeToVisit: 'November to March',
    currency: 'Qatari Riyal (QAR)',
    languages: ['Arabic', 'English'],
    rating: 4.8
  },
  spain: {
    name: 'Spain',
    capital: 'Madrid',
    mainImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=2000',
    flag: '🇪🇸',
    airports: [
      {
        name: 'Adolfo Suárez Madrid–Barajas Airport',
        code: 'MAD',
        rating: 4.3,
        description: 'Spain\'s largest airport, known for its modern architecture and excellent connections.'
      }
    ],
    overview: 'Spain\'s vibrant culture, historic architecture, and delicious cuisine create an exciting destination. From Barcelona\'s modernist wonders to Andalusia\'s Moorish heritage, Spain offers diverse experiences.',
    highlights: [
      'Sagrada Familia',
      'Alhambra Palace',
      'Plaza Mayor',
      'Park Güell',
      'Royal Palace of Madrid'
    ],
    bestTimeToVisit: 'March to May or September to November',
    currency: 'Euro (EUR)',
    languages: ['Spanish'],
    rating: 4.8
  },
  thailand: {
    name: 'Thailand',
    capital: 'Bangkok',
    mainImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000',
    flag: '🇹🇭',
    airports: [
      {
        name: 'Suvarnabhumi Airport',
        code: 'BKK',
        rating: 4.3,
        description: 'Bangkok\'s main international airport, known for its modern facilities and efficient service.'
      }
    ],
    overview: 'Thailand welcomes visitors with its warm hospitality, beautiful beaches, rich culture, and delicious cuisine. From bustling Bangkok to serene islands, ancient temples to modern shopping centers, Thailand offers something for every traveler.',
    highlights: [
      'Grand Palace',
      'Phi Phi Islands',
      'Wat Arun',
      'Chiang Mai Temples',
      'Khao Yai National Park'
    ],
    bestTimeToVisit: 'November to April',
    currency: 'Thai Baht (THB)',
    languages: ['Thai'],
    rating: 4.7
  },
  turkey: {
    name: 'Turkey',
    capital: 'Ankara',
    mainImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000',
    flag: '🇹🇷',
    airports: [
      {
        name: 'Istanbul Airport',
        code: 'IST',
        rating: 4.5,
        description: 'One of the world\'s largest airports, featuring state-of-the-art facilities and excellent connections.'
      }
    ],
    overview: 'Turkey bridges Europe and Asia with its rich history, stunning landscapes, and vibrant culture. From Istanbul\'s bazaars to Cappadocia\'s otherworldly terrain, Turkey offers unique experiences.',
    highlights: [
      'Hagia Sophia',
      'Blue Mosque',
      'Cappadocia',
      'Pamukkale',
      'Ephesus'
    ],
    bestTimeToVisit: 'April to May or September to November',
    currency: 'Turkish Lira (TRY)',
    languages: ['Turkish'],
    rating: 4.7
  },
  'united-arab-emirates': {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    mainImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
    flag: '🇦🇪',
    airports: [
      {
        name: 'Dubai International Airport',
        code: 'DXB',
        rating: 4.7,
        description: 'One of the world\'s busiest airports, known for its luxury shopping and excellent facilities.'
      }
    ],
    overview: 'The UAE combines futuristic vision with Arabian tradition, featuring record-breaking architecture, luxury shopping, and desert adventures.',
    highlights: [
      'Burj Khalifa',
      'Palm Jumeirah',
      'Sheikh Zayed Mosque',
      'Dubai Mall',
      'Desert Safari'
    ],
    bestTimeToVisit: 'November to March',
    currency: 'UAE Dirham (AED)',
    languages: ['Arabic', 'English'],
    rating: 4.8
  },
  'united-kingdom': {
    name: 'United Kingdom',
    capital: 'London',
    mainImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
    flag: '🇬🇧',
    airports: [
      {
        name: 'London Heathrow Airport',
        code: 'LHR',
        rating: 4.3,
        description: 'One of the world\'s busiest international airports, offering extensive global connections.'
      }
    ],
    overview: 'The UK combines rich history with modern culture across England, Scotland, Wales, and Northern Ireland. From London\'s landmarks to Scottish Highlands, the UK offers diverse experiences.',
    highlights: [
      'Big Ben',
      'Tower of London',
      'Edinburgh Castle',
      'Stonehenge',
      'Lake District'
    ],
    bestTimeToVisit: 'May to September',
    currency: 'British Pound (GBP)',
    languages: ['English'],
    rating: 4.7
  }
};