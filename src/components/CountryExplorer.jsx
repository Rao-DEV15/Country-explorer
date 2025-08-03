import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

const CountryExplorer = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags,altSpellings,translations,cca2,cca3'
        );
        const data = await res.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
        setNotFound(true);
      }
    };

    fetchCountries();
  }, []);
useEffect(() => {
  const trimmedQuery = searchQuery.trim();

  if (trimmedQuery === '') {
    setFilteredCountry(null); 
    setNotFound(false);
    return;
  }

  if (countries.length === 0) return;

  const fuse = new Fuse(countries, {
    keys: ['name.common', 'altSpellings', 'translations.eng.common'],
    threshold: 0.3,
  });

  const result = fuse.search(trimmedQuery);

  if (result.length > 0) {
    setFilteredCountry(result[0].item);
    setNotFound(false);
  } else {
    setFilteredCountry(null);
    setNotFound(true);
  }
}, [searchQuery, countries]);

  if (loading) {
    return (
      <div className="text-center text-white mt-10">
        <p className="animate-pulse text-lg font-medium">Loading countries...</p>
      </div>
    );
  }

 if (loading) {
  return (
    <div className="text-center text-white mt-10">
      <p className="animate-pulse text-lg font-medium">Loading countries...</p>
    </div>
  );
}

if (searchQuery.trim() === '') {
  return null; // If input is empty, show nothing
}

if (notFound) {
  return (
    <div className="text-center text-white mt-10">
      <p className="text-red-500 font-semibold">No country found. Please try again.</p>
    </div>
  );
}


  return (
    <div className="w-100rem max-w-5xl mt-10 text-white">
      {filteredCountry && (
        <div className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={filteredCountry.flags?.svg || filteredCountry.flags?.png}
            alt={`Flag of ${filteredCountry.name.common}`}
            className="w-full md:w-[300px] h-auto rounded-xl shadow-md object-cover"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{filteredCountry.name.common}</h2>
            <p className="text-white/90 leading-relaxed text-base">
              <strong>Capital:</strong> {filteredCountry.capital?.[0] || 'N/A'}<br />
              <strong>Region:</strong> {filteredCountry.region}<br />
              <strong>Population:</strong> {filteredCountry.population.toLocaleString()}<br />
              <strong>Languages:</strong> {filteredCountry.languages ? Object.values(filteredCountry.languages).join(', ') : 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryExplorer;
