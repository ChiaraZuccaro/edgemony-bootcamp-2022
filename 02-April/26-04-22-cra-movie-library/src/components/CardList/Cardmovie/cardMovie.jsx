import "./card.css"

export const CardMovie = ({ title, image, description, year, genres }) => {
    
    const formatText = (text) => {
        return text.split(" ").splice(0,35).join(" ")
    }

    return (
        <div className="cardMovie">
            <div className="overlay"></div>
            <img src={image} alt={title} />       
        
            <div className="movie">                
                <h2>{title}</h2>
                <p>{year}</p>
                <p>{formatText(description)} ...</p>
                <ul className="categories">
                    {/* {
                        genres.map((cat, i) => (
                            <li key={i}>
                                <p>{cat}</p>
                            </li>
                        ))
                    } */}
                </ul>
            </div>
        </div>
    )
}