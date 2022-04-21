// import { useEffect, useState } from "react";



export const Product = (props) => {
  const name = props.name || "Prodotto";
  const price = props.price || "N/A";
  const image = props.image || "";

  return (
    <article>
      <img src={image} alt="product img"/>
      <div className="bottom-card">        
        <h2>{name}</h2>
        <p>{price} $</p>
      </div>
    </article>
  );
};