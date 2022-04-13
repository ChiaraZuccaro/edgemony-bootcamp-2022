import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/header.js';
import { Footer } from './components/Footer/footer.js';
import { Description } from './components/Desc/desc.js';
import { Other } from './components/Others/others.js';

function App() {
  return (
    <div>      
      <Header></Header>
      <Description></Description>
      <Other></Other>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
