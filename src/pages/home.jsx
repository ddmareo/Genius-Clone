import Nav from "../components/nav"
import Nav2 from "../components/nav2"
import FeaturedCard from "../components/featuredcard"
import MusicChart from "../components/charts"
import About from "../components/about"

const home = () => {
  return (
    <div>
      <div className="h-10" style={{ backgroundColor: "#ffff64" }}>
        <Nav/>
      </div>

      <div className="h-10" style={{ backgroundColor: "#000000" }}>
        <Nav2/>
      </div>

      <div id="featured-card">
        <FeaturedCard/>
      </div>

      <div id="music-chart">
        <MusicChart/>
      </div>

      <div className="mt-16">
        <About/>
      </div>
    </div>
  )
}

export default home
