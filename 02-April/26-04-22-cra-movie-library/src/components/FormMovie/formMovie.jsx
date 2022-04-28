import { useState } from "react";
import { POST, PUT } from "../../utils";
import "./addform.css"
import { Input } from "./Input/input"

export const FormMovie = ({ modalVisibility , action }) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState("");
    const [poster, setPoster] = useState("");

    const genreToArray = (Garray) => Garray.split(", ")

    const receiveUserTitle = (valueTitle) => {
        setTitle(valueTitle);
    }
    const receiveUserYear = (valueYear) => {
        setYear(valueYear);
    }
    const receiveUserDescr = (valueDescr) => {
        setDescription(valueDescr);
    }
    const receiveUserGenre = (valueGenre) => {
        setGenres(valueGenre);
    }
    const receiveUserPoster = (valuePoster) => {
        setPoster(valuePoster);
    }

    const addNew = (e) => {
        e.preventDefault();

        receiveUserTitle(title);
        receiveUserYear(year);
        receiveUserDescr(description);
        receiveUserGenre(genres);
        receiveUserPoster(poster);


        if(action === "POST") {
            POST({
                title,
                poster,
                year,
                genres: genreToArray(genres),
                description
            })

            modalVisibility(true);
            setTimeout(() => {                
                window.location.reload()
            }, 3000)
        } else {
            PUT({
                title,
                poster,
                year,
                genres: genreToArray(genres),
                description
            })
        }
        
    }

    return(
        <form onSubmit={addNew} className="form-add">
            <Input info={"Title"} user={receiveUserTitle}/>
            <Input info={"Year"} user={receiveUserYear}/>
            <Input info={"Description"} user={receiveUserDescr}/>
            <Input info={"Genre"} user={receiveUserGenre}/>
            <Input info={"Poster"} user={receiveUserPoster}/>
            <input type="submit" value="Submit" id="sub"/>
        </form>
    )
}