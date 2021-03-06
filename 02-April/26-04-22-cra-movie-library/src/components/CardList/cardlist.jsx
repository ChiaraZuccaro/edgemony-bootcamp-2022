import "./cardlist.css"

import { useState, useEffect } from "react";
import { CardMovie } from "./Cardmovie/cardMovie"
import { Modal } from "../Modal/modal"
import { GET } from "../../utils"

export const CardList = ({ searchItem }) => {
    const [ movieList, setMovieList] = useState([]);
    const [ modalVisual, setModalVisual] = useState(false);
    const [ choice, setChoice] = useState("");

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
                    genres={movie.genres} id={movie.id}
                    choice={setChoice}
                    visual={setModalVisual}/>
                    </li>
                ))
            }
            
            <Modal visibility={modalVisual} message={choice}/>
        </ul>
    )
}
