import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home page/Home.js';
import Fixtures from './Fixtures page/Fixtures.js';
import Video from './Video page/Video.js';
import News from './News/News.js';
import Players from './Players page/Players.js';
import Shop from './Shop page/Shop.js';
import Match1 from './Home page/Match1'; 
import Match2 from './Home page/Match2';  
import Match3 from './Home page/Match3';  

import './App.css';
import logo from './images/logo.png';
import UserProfile from './User page/User.js';  
import profileIcon from './images/user.png'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar-custom text-white p-4">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" /> 
              </Link>
            </div>
            <nav className="w-100">
              <ul className="nav justify-content-center">
                <li className='mx-3'><Link to="/" className="text-white text-decoration-none" style={{ fontSize: '20px'}}>Home</Link></li>
                <li className='mx-3'><Link to="/fixtures" className="text-white text-decoration-none" style={{ fontSize: '20px' }}>Fixtures & Results</Link></li>
                <li className='mx-3'><Link to="/video" className="text-white text-decoration-none" style={{ fontSize: '20px' }}>Video Fantasy</Link></li>
                <li className='mx-3'><Link to="/news" className="text-white text-decoration-none" style={{ fontSize: '20px' }}>News & Articles</Link></li>
                <li className='mx-3'><Link to="/players" className="text-white text-decoration-none" style={{ fontSize: '20px' }}>Players Hub</Link></li>
                <li className='mx-3'><Link to="/shop" className="text-white text-decoration-none" style={{ fontSize: '20px' }}>Shop</Link></li>
              </ul>
            </nav>
            <div className="profile-icon-container">
              <Link to="/user">
                <img src={profileIcon} alt="Profile" className="profile-icon" /> 
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/video" element={<Video />} />
            <Route path="/news" element={<News />} />
            <Route path="/players" element={<Players />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/match/1" element={<Match1 />} />
            <Route path="/match/2" element={<Match2 />} />
            <Route path="/match/3" element={<Match3 />} />
            <Route path="/user" element={<UserProfile />} />
          </Routes>
        </main>

        <footer className="footer-custom text-white p-4 mt-5">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 OverNOut. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
