import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav3 = () => {
  const navigate = useNavigate();

  const handleNavigation = (targetId) => {
    navigate(`/#${targetId}`);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      <div className="relative flex items-center p-3 mx-2">
        <Link to="/" className="text-2xl font-bold">G E N I U S</Link>

        <div className="flex items-center justify-center lg:flex-row text-black ml-8">
          <div className="space-x-6 flex items-center">
            <button onClick={() => handleNavigation('featured-card')} className="hover:underline">FEATURED</button>
            <button onClick={() => handleNavigation('music-chart')} className="hover:underline">CHARTS</button>
            <a href="https://www.youtube.com/channel/UCyFZMEnm1il5Wv3a6tPscbA" target="_blank" rel="noopener noreferrer" className="hover:underline">VIDEOS</a>
          </div>
        </div>

        <div className="ml-auto space-x-4 flex items-center justify-end">
          <button className="bg-black text-white font-bold py-1 px-4 rounded-full hover:bg-gray-700">
            Analyze Now
          </button>
          <Link to="/signup" className="hover:underline">SIGN UP</Link>
          <Link to="/signin" className="hover:underline">SIGN IN</Link>
        </div>
      </div>

      <div className="p-6 flex items-center space-x-6 ml-20">
        <img
          src="https://via.placeholder.com/500x500"
          alt="Song Cover"
          className="w-64 h-64 object-cover"
        />
        <div style={{ maxWidth: '1000px' }}>
          <h1 className="text-4xl font-bold mb-2">Song Title</h1>
          <h2 className="text-2xl mb-3">Artist Name</h2>
          <p className="text-lg text-justify">Mr. Loverman was released on April 6th, 2016. The song is about Montgomery’s father dealing with the loss/break-up of his partner using alcohol and questioning himself. Throughout the song, the man refers to himself as “Mr. Loverman” as he defines himself as a lover; he has lost his identity as any other being and now feels incomplete.</p>
        </div>
      </div>
    </div>
  );
};

export default Nav3;