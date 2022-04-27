import { useState } from "react"
import "./input.css"

export const Input = ({info, user}) => {
    const [writingUser, setWritingUser] = useState("");

    user = writingUser;
    console.log(user);
    return(
    <div className="user-add">
        <label htmlFor={info.toLowerCase()}>{info}:</label>
        <input type="text" id={info.toLowerCase()} 
        name={info.toLowerCase()}
        value={writingUser}
        onChange={(e) => setWritingUser(e.target.value)}
        placeholder="Type here ..." 
        required/>
    </div>
    )
}