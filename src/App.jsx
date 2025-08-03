import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <video
        src="/Digital World Map.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-20 left-0 w-screen h-screen object-cover z-0"
      />

      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-0" />

      <div className="relative z-10">
        <Header />
        <div className="mt-8 flex justify-center px-4">
          <SearchBar/>
        </div>
      </div>
    </div>
  );
};

export default App;
