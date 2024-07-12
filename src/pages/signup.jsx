import SignUpComp from "../components/signupcomp"
import Nav from "../components/nav"
import Nav2 from "../components/nav2"

const signup = () => {
  return (
    <div>

        <div className="h-10" style={{ backgroundColor: "#ffff64" }}>
            <Nav/>
        </div>

        <div className="h-10" style={{ backgroundColor: "#000000" }}>
            <Nav2/>
        </div>

        <div>
            <SignUpComp />
        </div>

    </div>

  )
}

export default signup