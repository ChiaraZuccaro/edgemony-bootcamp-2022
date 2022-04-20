import { useEffect, useState } from "react";



export const Product = (props) => {

    const [price, setPrice] = useState("Prezzo: 1000€");
    const [title, setTitle] = useState("Prodotto");

    setTitle(props.title);
    setPrice(props.price);

    return (
      <article>
        <img src={props.img} alt="product img" width="100px"/>
        <h2>{title}</h2>
        <p>{price}</p>
      </article>
    );
};