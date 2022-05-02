import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { CardMovie } from "../../components/CardList/Cardmovie/cardMovie";
import { FormMovie } from "../../components/FormMovie/formMovie";
import { GET } from "../../utils"
import "./edit.css"

export const EditSection = ({ alert, message }) => {
    const location = useLocation();
    const [movieData, setMovieData] = useState();
    const movieId = location.pathname.split("/").reverse()[0];

    useEffect(() => {
        GET(movieId).then((data) => setMovieData(data));
      }, []);

    return (
        <div className="editSection">
            <h2>Replace your movie!</h2>
            {
                movieData && 
                <CardMovie title={movieData.title} 
                image={movieData.poster} 
                description={movieData.description} 
                year={movieData.year} 
                genres={movieData.genres} 
                id={movieData.id}
                />
            }

            <FormMovie alertVisibility={alert} message={message} action={"PUT"}/>
        </div>
    )
}