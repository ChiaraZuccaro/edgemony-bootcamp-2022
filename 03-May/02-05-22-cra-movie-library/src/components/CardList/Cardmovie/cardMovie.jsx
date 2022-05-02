import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DELETE } from "../../../utils"; 

import "./card.css"

export const CardMovie = ({ title, image, description, year, genres, id, choice, visual}) => {
    // const [ modalVisual, setModalVisual] = useState(false);
    // const [ choice, setChoice] = useState("");
    const [ hide, setHide] = useState(true);
    // const goTop = document.getElementById("top");

    const formatText = (text) => text.split(" ").splice(0,35).join(" ");

    const deleteMovie = () => {
        // goTop
        choice("Movie correctly deleted")
        visual(true)
        setTimeout(() => DELETE(id).then(() => window.location.reload()), 3000);
    }

    const choiceModal = () => {
        if(hide)
        setHide(false)
        else
        setHide(true)
    }

    return (
        <div className="cardMovie">
            <div className="overlay"></div>
            <img src={image} alt={title.toLowerCase()} />
                 
            <button onClick={choiceModal} id="x">X</button>
            
            <div className={hide ? "hidden" :"choice"}>
                <p>Are you sure you want to delete "{title}"?</p>
                <div className="choice-button">
                    <button onClick={deleteMovie}><a href="#top">Confirm</a></button>
                    <button onClick={choiceModal}><a>Go back</a></button>
                </div>
            </div>

            <div className={hide ? "movie" : "hidden"}>
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