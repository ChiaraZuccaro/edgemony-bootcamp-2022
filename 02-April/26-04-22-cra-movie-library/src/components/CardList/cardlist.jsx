import "./cardlist.css"

import { useState, useEffect } from "react";
import { CardMovie } from "./Cardmovie/cardMovie"
import { GET } from "../../utils"

export const CardList = ({ searchItem }) => {
    const [ movieList, setMovieList] = useState([]);

    useEffect(() => {
        GET().then((data) => setMovieList(data))
    }, [])
    
    return (
        <ul className='movieList'>
            {
                
                movieList && movieList.filter((movie) => 
                {
                    if(movie.title.toLowerCase().includes(searchItem.toLowerCase()) ||
                    movie.genres.join("").toLowerCase().includes(searchItem.toLowerCase())) {
                        return movie
                    }
                    
                })
                .map((movie) => (
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
