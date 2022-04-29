import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AddMovie } from "./pages/AddMovie/addmovie"

import { EditSection } from "./pages/EditSection/editsection";

import './App.css';
import { Home } from "./pages/Home/home";


function App() {

  return (
    <Router>
      <div className="all">
        <nav className="navbar">
          <div className="logo-h1">
            <img src="https://th.bing.com/th/id/R.8cf77a81eb7e7f24ee40fc97d6e677bb?rik=00HtyTzGzelBug&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fyTo%2fMEo%2fyToMEoEjc.png&ehk=78LdDY8Uv6QoggYhdm52%2f%2ffqEjU015ryhJzuFOz3u%2f0%3d&risl=&pid=ImgRaw&r=0" alt="logos movie"/>
            <h1>Movie Time!</h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add new movie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/edit-movie/:id" element={<EditSection />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
