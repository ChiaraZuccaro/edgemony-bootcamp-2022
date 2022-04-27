import "./card.css"

export const CardMovie = ({ title, image, description, year, genres }) => {
    return (
        <div className="cardMovie">
            <div className="overlay"></div>
            <img src={image} alt={title} />       
        
            <div className="movie">                
                <h2>{title}</h2>
                <p>{year}</p>
                <p>{description}</p>
                <ul className="categories">
                    {
                        genres.map((cat, i) => (
                            <li key={i}>
                                <p>{cat}</p>
                            </li>
                        ))
                    }
                </ul>
                {/* <p>Generi</p> */}
            </div>
        </div>
    )
}