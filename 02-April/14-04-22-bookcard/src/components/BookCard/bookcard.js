import "./bookcard.css";

export const BookCard = ({name, description, price, img}) => (
    <div className="card">
        <div className="top-card" style={{ backgroundImage:`url(${img})`, backgroundPosition: "center"}}>
            <img src={img} alt="book cover"/>
        </div>
        <div className="bottom-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>{price} $</h3>
            
            <button type="submit" className="btn-add">Add to cart</button>
        </div>
    </div>
);