import { useState } from "react";
import { POST } from "../../utils";
import "./add.css"
import { Input } from "./Input/input"

export const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState("");

    

    const addNew = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(year);
        console.log(description);
        console.log(genres);
        // POST()
    }

    return(
        <form onSubmit={addNew} className="form-add">
            <Input info={"Title"} user={setTitle}/>
            <Input info={"Year"} user={setYear}/>
            <Input info={"Description"} user={setDescription}/>
            <Input info={"Genre"} user={setGenres}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}