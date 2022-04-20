import { useState, useEffect } from "react";
import { Product } from "./product";

const example = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = () => {
    const [products, setProduct] = useState(example);

    const getData = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        const data = await response.json();
        setProduct(data);
        
    };

    useEffect(() => {
        getData();
    }, []);
    
    // const [price, setPrice] = useState("Prezzo: 1000€");
    // const [desc, setDesc] = useState("E` un bel prodotto!");
    // const [title, setTitle] = useState("Prodotto");

    return (
        <section>
        <ul className="grid">
            {            
            
                products.map((item, index) => (
                    <li key={index} className="card">
                        {/* <article>
                            <img src={item.image} alt="product img" width="100px"/>
                            <h2>{item.title}</h2>
                            <p>{item.price} $</p>
                        </article> */}
                        
                        <Product title={item.title} img={item.image} desc={item.description} price={item.price}/>
                    </li>
                ))
            }
        </ul>
        </section>
    );
};