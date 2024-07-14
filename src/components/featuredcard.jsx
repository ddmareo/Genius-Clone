import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase/firebase.js"
import { Link } from 'react-router-dom';

const BlogCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="w-full h-64 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <img className="w-full h-full object-contain relative" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base line-clamp-3 text-justify">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={"/lyrics?name=" + title} className="text-dark-500 hover:text-gray-400 underline">Read more</Link>
      </div>
    </div>
  );
};

const featuredcard = () => {
  const [songs, setSongs] = useState([]);

  const getData = () => {
    const col = collection(db, 'songs');
    getDocs(col).then(result => {
      // dalam hasil result disini ada banyak dokumen (.docs)
      const documents = result.docs

      const dataList = []
      for (let i = 0; i < 3; i++) {
        const data = documents[i].data()
        dataList.push(data)
      }

      setSongs(dataList)
    })
  }

  // pas halaman ngeload dia jalanin yang didalem sini
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-wrap justify-center">
      {songs.map((song, index) => (
        <BlogCard
          key={index}
          title={song.title}
          description={song.description}
          imageUrl={song.imageUrl}
          link={''}
        />
      ))}
    </div>
  );
};

export default featuredcard