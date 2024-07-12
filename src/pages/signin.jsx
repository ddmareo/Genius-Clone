import SignInComp from "../components/signincomp"
import Nav from "../components/nav"
import Nav2 from "../components/nav2"

const signin = () => {
  return (
    <div>

        <div className="h-10" style={{ backgroundColor: "#ffff64" }}>
            <Nav/>
        </div>

        <div className="h-10" style={{ backgroundColor: "#000000" }}>
            <Nav2/>
        </div>

        <div>
            <SignInComp />
        </div>

    </div>

  )
}

export default signin