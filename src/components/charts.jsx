import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import {db} from "../firebase/firebase.js"
import { Link } from 'react-router-dom' 

const Charts = () => {
  const [sortOrder, setSortOrder] = useState('descending');
  const [sortType, setSortType] = useState('popularity');
  const [songs, setSongs] = useState([]);

  const getData = () => {
    const col = collection(db, 'songs');
    getDocs(col).then(result => {
      // dalam hasil result disini ada banyak dokumen (.docs)
      const documents = result.docs

      const dataList = []
      for(let i = 0; i < documents.length; i++) {
        const data = documents[i].data()
        dataList.push(data)
      }

      setSongs(dataList)
    })
  }

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // pas halaman ngeload dia jalanin yang didalem sini
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="mx-auto mt-8" style={{ maxWidth: '1216px' }}>
    
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
          <Link to={'/lyrics?name=' + song.title} >
          <div key={index} className="flex items-center p-4">
            <div className="w-10 text-lg font-bold">{index + 1}</div>
            <img src={song.imageUrl} alt={song.title} className="w-16 h-16 rounded mr-4" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900">{song.title}</span>
              <span className="text-gray-600">{song.artist}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Charts;