import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import {db} from "../firebase/firebase.js"
import { useSearchParams } from 'react-router-dom';

const lyrics = () => {
  const [song, setSong] = useState();
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
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="ml-44 mt-10 mb-24">
      {song?.lyrics.map((line, index) => (
        line === '' ? 
          <br key={index} /> : 
          <p key={index} className="text-2xl">{line}</p>
      ))}
    </div>
  )
}

export default lyrics