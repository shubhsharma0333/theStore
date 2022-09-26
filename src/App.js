import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Account from './components/Account';
import Congo from './components/Congo';

function App() {
  return (
    <div className="App">
      <Layout />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/favorites" element={<Favorites/>}/> 
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/account" element={<Account/>}/> 
          <Route path="/congo" element={<Congo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
