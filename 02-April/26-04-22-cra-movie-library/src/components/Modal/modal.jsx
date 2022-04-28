import "./modal.css"

export const Modal = ({visibility, message}) => {
    return (
        <>
            {
                visibility && (
                    <div className="modal-struct">
                        <div className="overlay"></div>
                        <div className="modal">
                            <img src="https://ih0.redbubble.net/image.339197345.9429/sticker,375x360-bg,ffffff.u5.png" alt="emoji add"/>
                            <h4 className="modal-text">{message}</h4>
                        </div>
                    </div>
                    
                )
            }
        </>
    )
}