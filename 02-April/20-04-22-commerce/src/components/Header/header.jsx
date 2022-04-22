import { useState } from "react";
import "./head.css"

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  }
    return (
      <header>
        <div className="image">          
          <img src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="React ecommerce" />
        </div>
        <form>
          <input value={search} onChange={changing} type="text" placeholder="Search..." />
          <img src="https://cdn.onlinewebfonts.com/svg/img_208967.png" alt="cart image"/>
        </form>
      </header>
    );
  };