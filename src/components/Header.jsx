import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#0f0f0f]/80 via-[#1a1a1a]/80 to-[#0f0f0f]/80 backdrop-blur-lg border-b border-white/10 text-white py-6 px-4 shadow-md">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase whitespace-nowrap">
        Country Explorer
      </h1>
    </header>
  );
};

export default Header;
