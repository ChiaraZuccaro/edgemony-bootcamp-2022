import './App.css';

import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";
import { Sidebar } from './components/Sidebar/sidebar';
import { List } from './components/List/list';

function App() {
  return <main>
    <Header/>
    <Sidebar/>
    <List/>
    <Footer/>
  </main>;
}

export default App;
