import './App.css';

import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";
import { Sidebar } from './components/Sidebar/sidebar';
import { List } from './components/List/list';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const catSelect = (value) => {
    console.log(value);
    setCategory(value);
  }

  const searching = (value) => {
    setSearch(value);
  }

  return (<main>
    <Header searching={searching}/>
    <Sidebar catSelected={catSelect}/>
    <List category={category} search={search}/>
    <Footer/>
  </main>);
}

export default App;
