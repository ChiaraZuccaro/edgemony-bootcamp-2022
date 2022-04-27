import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
import './App.css';
import { CardMovie } from './components/CardList/Cardmovie/cardMovie';
import { Header } from './components/Header/header';

import { CardList } from "./components/CardList/cardlist";

function App() {
  

  return (
    <Router>
      <div>
        <Header/>
        <nav>
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
          <Route path="/add-movie" element={<CardMovie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
