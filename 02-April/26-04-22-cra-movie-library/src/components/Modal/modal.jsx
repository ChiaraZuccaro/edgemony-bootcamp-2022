import "./modal.css"

export const Modal = ({visibility, message}) => {
    return (
        <>
            {
                visibility && (
                    <div className="modal-struct">
                        <div className="overlay"></div>
                        <div className="modal">
                            <img src={message.toLowerCase().includes("delete") ? 
                            "https://ih1.redbubble.net/image.1048539419.6989/flat,800x800,075,f.u3.jpg" :
                            "https://ih0.redbubble.net/image.339197345.9429/sticker,375x360-bg,ffffff.u5.png"} alt="emoji modal"/>
                            <h4 className="modal-text">{message === "delete" ? 
                            "This movie has been deleted correctly!" : message}
                            </h4>
                        </div>
                    </div>
                    
                )
            }
        </>
    )
}