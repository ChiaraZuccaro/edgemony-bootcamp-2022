import { useEffect, useState } from 'react';
import './App.css';
import { CardMovie } from './components/Cardmovie/cardMovie';
import { Header } from './components/Header/header';
import { getFetch } from "./utils"

function App() {
  const [ movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(getFetch());
  }, [])

  console.log(movieList);
  return (
    <main>
      <Header/>
      <ul className='movieList'>
      {
        movieList.map((movie) => (
          <li key={movie.id}>            
            <CardMovie />
          </li>
        ))
      }
      </ul>
    </main>
  );
}

export default App;
