import { useState, useEffect } from "react";
import "./side.css";

const mock = ["...", "...", "..."];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);
  const [current, setCurrent] = useState("");

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    setCategories(data);
    
    data.unshift("everything");
  };

  useEffect(() => {
    getData();
  }, []);

  const firstUpCase = (word) => {
    const letterUp = word.split("").shift().toUpperCase();    
    const wordNoFirst = word.split("").splice(1, word.split("").length);
    wordNoFirst.unshift(letterUp);

    return wordNoFirst.join("");
  }

  const clicked = (event, category) => {
    event.preventDefault();
    props.catSelected(category);
    setCurrent(category);
  }

  return (
    <aside>
      <h2>Categories</h2>
      <ul className="categories">
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item}
            className={item === current ? "active" : ""}
            onClick={(event) => clicked(event,item)}>
              {firstUpCase(item)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};