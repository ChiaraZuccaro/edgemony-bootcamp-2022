import { Link } from "react-router-dom";
import "./card.css"

export const CardMovie = ({ title, image, description, year, genres, id }) => {
    const formatText = (text) => text.split(" ").splice(0,35).join(" ");

    return (
        <div className="cardMovie">
            <div className="overlay"></div>
            <img src={image} alt={title.toLowerCase()} />       
        
            <div className="movie">
                <Link to={`/edit-movie/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <p>{year}</p>
                <p>{formatText(description)} ...</p>
                <ul className="categories">
                    {
                        genres && genres.map((cat, i) => (
                            <li key={i}>
                                <p>{cat}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}