import './App.css';

import {Header} from "./components/Header/header.js";
import {Footer} from "./components/Footer/footer.js";
import {BookCard} from "./components/BookCard/bookcard.js";

import {data} from "./components/Data/data.js"

function App() {
  return (
    <div>      
      <Header/>
      <div className='product_list'>
      {
        data.products.map((item) => (
          <BookCard
            img={item.img}
            name={item.name}
            description={item.description.split(" ").splice(0,20).join(" ")}
            price={item.price}
            key={item.id} 
          />
        ))
      }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
