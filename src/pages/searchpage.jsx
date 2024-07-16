import React from 'react'
import Nav from "../components/nav"
import Nav2 from "../components/nav2"
import SearchPageComp from "../components/searchpagecomp"

const searchpage = () => {
  return (
    <div>

        <div className="h-10" style={{ backgroundColor: "#ffff64" }}>
          <Nav/>
        </div>

        <div className="h-10" style={{ backgroundColor: "#222222" }}>
          <Nav2/>
        </div>

        <div>
          <SearchPageComp/>
        </div>
        
    </div>
  )
}

export default searchpage