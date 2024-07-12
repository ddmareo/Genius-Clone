import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import LyricsPage from './pages/lyricspage'
import SearchPage from './pages/searchpage'

function App() {
  
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/lyrics' element={<LyricsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>

  )
}

export default App
