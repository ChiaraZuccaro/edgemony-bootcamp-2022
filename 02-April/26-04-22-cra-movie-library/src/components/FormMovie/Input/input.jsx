import { useState } from "react"
import "./input.css"

export const Input = ({info, user}) => {
    const [writingUser, setWritingUser] = useState("");

    user(writingUser);

    return(
    <div className="user-add">
        <label htmlFor={info.toLowerCase()}>{info}:</label>
        <input type={info.toLowerCase() !== "poster" ? "text" : "url"} 
        id={info.toLowerCase()} 
        name={info.toLowerCase()}
        value={writingUser}
        onChange={(e) => setWritingUser(e.target.value)}
        placeholder={
            info.toLowerCase() === "poster" ? "an url is needed ..." : 
            info.toLowerCase() === "title" ? "type the title here ..." :
            info.toLowerCase() === "year" ? "when was the movie produced? ..." :
            info.toLowerCase() === "genre" ? "separate the genres with a comma ..." : 
            "what do you think about this movie?"
        } 
        required/>
    </div>
    )
}