import React, { useState, useEffect } from 'react';
import CountryExplorer from './CountryExplorer';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput.trim());
  };

  useEffect(() => {
    if (searchInput === '') {
      setQuery('');
    }
  }, [searchInput]);

  return (
    <div className="w-100 flex flex-col items-center mt-6 px-4">
      <div className="w-full max-w-2xl bg-black bg-opacity-60 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl text-center font-semibold tracking-wide">
          Search the Countries You Love!
        </h2>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Type a country name..."
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-md bg-white/20 text-white font-medium hover:bg-white/30 transition-all"
          >
            Search
          </button>
        </form>
      </div>

      <div className="w-full max-w-6xl mt-6">
        <CountryExplorer searchQuery={query} />
      </div>
    </div>
  );
};

export default SearchBar;
