import { Link } from 'react-router-dom';
import Search from "./search"

const nav = () => {
  return (
    <div className="relative flex items-center p-1 mx-2">
      
      <div> <Search /> </div>

      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">G E N I U S</Link>

      <div className="ml-auto space-x-4 flex items-center justify-end">
        <Link to="/signup" className="hover:underline">SIGN UP</Link>
        <Link to="/signin" className="hover:underline">SIGN IN</Link>
      </div>

    </div>
  );
}

export default nav