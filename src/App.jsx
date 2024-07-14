import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import LyricsPage from './pages/lyricspage'
import SearchPage from './pages/searchpage'

function App() {
  
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lyrics' element={<LyricsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>

  )
}

export default App
