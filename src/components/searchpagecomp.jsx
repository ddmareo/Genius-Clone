import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase/firebase.js";
import { Link } from 'react-router-dom'

const searchpagecomp = () => {
  const [songs, setSongs] = useState([]); // Initialize with an empty array
  const [params] = useSearchParams();

  const getData = () => {
    const col = collection(db, 'songs');
    getDocs(col).then((result) => {
      const dataList = result.docs.map((doc) => doc.data());

      const name = params.get("name")?.toLowerCase() || ""; // Get query, convert to lowercase

      // Filter songs based on partial title match (case-insensitive)
      const filteredSongs = dataList.filter((song) =>
        song.title.toLowerCase().includes(name) 
      );

      setSongs(filteredSongs);
    });
  };

  useEffect(() => {
    getData();
  }, [params]); // Fetch data whenever 'params' change

  return (
    <div className="container mx-auto p-4 mt-5">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Search Results</h1>

      {songs.length > 0 ? ( // Conditionally render results or "No results"
        <div className="space-y-4"> 
          {songs.map((song, index) => (
            <Link to={'/lyrics?name=' + song.title}>
            <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-4">
              <img
                src={song?.imageUrl}
                alt={`${song?.title} cover`}
                className="w-16 h-16 rounded mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{song?.title}</h2>
                <p className="text-gray-600">{song?.artist}</p>
              </div>
            </div>
            </Link>

          ))}
        </div>
      ) : (
        <p className="text-center">No matching songs found.</p>
      )}
    </div>
  );
};

export default searchpagecomp;