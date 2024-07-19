import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import {db} from "../firebase/firebase.js"
import SearchBar from "../components/search.jsx"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const Nav3 = () => {
  const [song, setSong] = useState();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const [analysisText, setAnalysisText] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  async function runAnalysis() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
      const prompt = "Please provide an analysis of the meaning of the song lyrics in paragraph format. Here are the lyrics: " + song?.lyrics;
      const result = await model.generateContent(prompt);
      setAnalysisText(result.response.text());
      setIsPopupVisible(true); 
    } catch (error) {
      console.error("Error analyzing song:", error);
      setAnalysisText("An error occurred while analyzing the song.");
      setIsPopupVisible(true);
    }
  }

  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => setAnalysisText(null), 500);
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="relative flex items-center p-3 mx-2">
        <Link to="/" className="text-2xl font-bold text-white">G E N I U S</Link>

        <div className="flex items-center justify-center lg:flex-row text-white ml-8">
          <div className="space-x-6 flex items-center">
            <button onClick={() => handleNavigation('featured-card')} className="hover:underline">FEATURED</button>
            <button onClick={() => handleNavigation('music-chart')} className="hover:underline">CHARTS</button>
            <a href="https://www.youtube.com/channel/UCyFZMEnm1il5Wv3a6tPscbA" target="_blank" rel="noopener noreferrer" className="hover:underline">VIDEOS</a>
          </div>
        </div>

        <div className="ml-auto space-x-4 flex items-center justify-end">
          <button onClick={runAnalysis} className="bg-yellow-300 text-black font-bold py-0.5 px-4 rounded-full hover:bg-yellow-500">
            Analyze Now
          </button>
          <div> <SearchBar/></div>
        </div>
      </div>

      <div className="p-7 flex items-center space-x-7 ml-36">
        <img
          src={song?.imageUrl}
          alt="Song Cover"
          className="w-64 h-64 object-cover rounded"
        />
        <div style={{ maxWidth: '1000px' }}>
          <h1 className="text-4xl text-white font-bold mb-2">{song?.title}</h1>
          <h2 className="text-2xl mb-3 text-white">{song?.artist}</h2>
          <p className="text-lg text-justify text-white">{song?.description}</p>
        </div>
      </div>

      {analysisText && (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 ${isPopupVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
          <div className={`bg-white max-w-screen-xl p-8 rounded-lg relative ${isPopupVisible ? 'animate-scaleIn' : 'animate-scaleOut'}`}>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={closePopup}
            >
              ✖
            </button>
            <h2 className='text-2xl font-bold flex items-center justify-center mb-7'>Lyrics Analyzation of "{song?.title}" by {song?.artist}</h2>
            <p className="text-lg flex text-justify">{analysisText}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Nav3;