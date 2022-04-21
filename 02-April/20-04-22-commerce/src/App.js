import './App.css';

import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";
import { Sidebar } from './components/Sidebar/sidebar';
import { List } from './components/List/list';
import { useState } from 'react';

function App() {

  const [category, setCategory] = useState("");

  const catSelect = (value) => {
    console.log(value);
    setCategory(value);
  }


  return (<main>
    <Header/>
    <Sidebar catSelected={catSelect}/>
    <List category={category}/>
    <Footer/>
  </main>);
}

export default App;
