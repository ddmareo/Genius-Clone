import Nav3 from "../components/nav3"
import Lyrics from "../components/lyrics"

const lyricspage = () => {
  return (
    <div>

      <div className="h-96" style={{ backgroundColor: "#222222" }}>
        <Nav3/>
      </div>

      <div> 
        <Lyrics/>
      </div>

    </div>
  )
}

export default lyricspage