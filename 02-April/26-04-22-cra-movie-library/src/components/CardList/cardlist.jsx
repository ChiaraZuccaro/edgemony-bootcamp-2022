import "./cardlist.css"

import { useState, useEffect } from "react";
import { CardMovie } from "./Cardmovie/cardMovie"
import { GET } from "../../utils"

export const CardList = () => {
    const [ movieList, setMovieList] = useState([]);

    useEffect(() => {
        GET().then((data) => setMovieList(data))
    }, [])

    return (
        <ul className='movieList'>
            {
                movieList && movieList.map((movie) => (
                    <li key={movie.id}>            
                    <CardMovie title={movie.title} image={movie.poster} 
                    description={movie.description} year={movie.year} 
                    genres={movie.genres} id={movie.id}/>
                    </li>
                ))
            }
        </ul>
    )
}

// genres={movie.genres}