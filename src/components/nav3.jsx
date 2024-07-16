import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import {db} from "../firebase/firebase.js"
import SearchBar from "../components/search.jsx"

const Nav3 = () => {
  const [song, setSong] = useState();
  const navigate = useNavigate();
  const [params] = useSearchParams();

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

      const name = params.get("name");

      const song = dataList.filter(song => song.title == name)[0];
      setSong(song)
    })
  }

  const handleNavigation = (targetId) => {
    navigate(`/#${targetId}`);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="relative flex items-center p-3 mx-2">
        <Link to="/" className="text-2xl font-bold">G E N I U S</Link>

        <div className="flex items-center justify-center lg:flex-row text-black ml-8">
          <div className="space-x-6 flex items-center">
            <button onClick={() => handleNavigation('featured-card')} className="hover:underline">FEATURED</button>
            <button onClick={() => handleNavigation('music-chart')} className="hover:underline">CHARTS</button>
            <a href="https://www.youtube.com/channel/UCyFZMEnm1il5Wv3a6tPscbA" target="_blank" rel="noopener noreferrer" className="hover:underline">VIDEOS</a>
          </div>
        </div>

        <div className="ml-auto space-x-4 flex items-center justify-end">
          <button className="bg-black text-white font-bold py-1 px-4 rounded-full hover:bg-gray-700">
            Analyze Now
          </button>
          <div> <SearchBar/></div>
        </div>
      </div>

      <div className="p-7 flex items-center space-x-6 ml-36">
        <img
          src={song?.imageUrl}
          alt="Song Cover"
          className="w-64 h-64 object-cover"
        />
        <div style={{ maxWidth: '1000px' }}>
          <h1 className="text-4xl font-bold mb-2">{song?.title}</h1>
          <h2 className="text-2xl mb-3">{song?.artist}</h2>
          <p className="text-lg text-justify">{song?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav3;