import "./input.css"

export const Input = ({info}) => (
    <div className="user-add">
        <label htmlFor={info.toLowerCase()}>{info}:</label>
        <input type="text" id={info.toLowerCase()} placeholder="Type here ..."/>
    </div>
)