import { useState, useEffect } from "react";
import { Product } from "./product";

import "./list.css"

const example = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = ({ category, search }) => {
    const [products, setProduct] = useState(example);
    const [ localeData, setLocalData] = useState([]);

    const getData = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        const data = await response.json();
        setProduct(data);
        setLocalData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const filteredList = localeData.filter((product) => {
            if(category === "everything"){
                return product;
            } else {
                return product.category === category;
            }
        })

        setProduct(filteredList);
    }, [category]);

    useEffect(() => {
        const filteredList = localeData.filter((product) => (
            product.title.toLowerCase().includes(search.toLowerCase())
        ))
        setProduct(filteredList);
    }, [search]);


    return (
        <section className="products">
        <ul className="grid">
            {            
                products.map((item) => (
                    <li key={item.id} className="card">                        
                        <Product name={item.title} image={item.image} price={item.price}/>
                    </li>
                ))
            }
        </ul>
        </section>
    );
};