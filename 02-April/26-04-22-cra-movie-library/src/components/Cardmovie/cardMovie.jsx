import "./card.css"
import image from "./rick.jpg"

export const CardMovie = (props) => {
    return ( 
    <div className="cardMovie">
        <div className="overlay"></div>
        <img src={image} alt="non so" />       
        
        <div className="movie">                
            <h2>Titolo prova</h2>
            <p>Descrizione prova</p>
            <p>Categoria</p>
        </div>
    </div>
    )
}