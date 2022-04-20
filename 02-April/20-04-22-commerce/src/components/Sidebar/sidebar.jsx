import { useState, useEffect } from "react";

const mock = ["...", "...", "..."];

export const Sidebar = () => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item}>{item}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};