import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
import './App.css';
import { AddMovie } from "./components/AddMovie/addmovie"
// import { Header } from './components/Header/header';

import { CardList } from "./components/CardList/cardlist";

function App() {
  

  return (
    <Router>
      <div>
        {/* <Header/> */}
        <nav className="navbar">
          <h1>Personal Library</h1>
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
          <Route path="/" element={<CardList />}/>
          <Route path="/add-movie" element={<AddMovie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
