import React, { useState } from 'react';

const Charts = () => {
  const [sortOrder, setSortOrder] = useState('descending');
  const [sortType, setSortType] = useState('popularity');
  
  const songs = [
    { number: 1, title: 'Song One', artist: 'Artist One', imageUrl: 'https://via.placeholder.com/100x100' },
    { number: 2, title: 'Song Two', artist: 'Artist Two', imageUrl: 'https://via.placeholder.com/100x100' },
    { number: 3, title: 'Song Three', artist: 'Artist Three', imageUrl: 'https://via.placeholder.com/100x100' },
    { number: 4, title: 'Song Four', artist: 'Artist Four', imageUrl: 'https://via.placeholder.com/100x100' },
    { number: 5, title: 'Song Five', artist: 'Artist Five', imageUrl: 'https://via.placeholder.com/100x100' },
    // Add more songs here
  ];

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto p-2 mt-5">
    
    <h2 className="text-4xl font-bold mb-6">CHARTS</h2>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <label htmlFor="sortType" className="text-gray-700">Sort by:</label>
          <select 
            id="sortType" 
            value={sortType} 
            onChange={handleSortChange} 
            className="bg-white border border-gray-300 rounded px-2 py-1">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="releaseDate">Release Date</option>
          </select>
        </div>
        
        <div className="flex space-x-2 items-center">
          <label htmlFor="sortOrder" className="text-gray-700">Order:</label>
          <select 
            id="sortOrder" 
            value={sortOrder} 
            onChange={handleOrderChange} 
            className="bg-white border border-gray-300 rounded px-2 py-1">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center p-4">
            <div className="w-10 text-lg font-bold">{song.number}</div>
            <img src={song.imageUrl} alt={song.title} className="w-16 h-16 rounded mr-4" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900">{song.title}</span>
              <span className="text-gray-600">{song.artist}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Charts;
