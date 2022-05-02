import "./alert.css"

export const Alert = ({ visibility, message }) => {
    
    return (
        <>
            <div className={ visibility && message.toLowerCase().includes("add") ? 
            "post-alert" : "hidden"}>
                <h5>{message}</h5>
            </div>
            <div className={ visibility && message.toLowerCase().includes("delete") ? 
            "delete-alert" : "hidden"} id="top">
                <h5>{message}</h5>
            </div>
            <div className={ visibility && message.toLowerCase().includes("edit") ? 
            "edit-alert" : "hidden"}>
                <h5>{message}</h5>
            </div>
        </>
    )
}