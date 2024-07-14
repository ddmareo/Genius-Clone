import React from 'react';

const songs = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    artist: 'Artist 1',
    title: 'Song Title 1',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    artist: 'Artist 2',
    title: 'Song Title 2',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    artist: 'Artist 3',
    title: 'Song Title 3',
  },
  // Add more song objects as needed
];

const searchpagecomp = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <div className="space-y-4">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-4">
            <img src={song.imageUrl} alt={`${song.title} cover`} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{song.title}</h2>
              <p className="text-gray-600">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default searchpagecomp;