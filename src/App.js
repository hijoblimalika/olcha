import './App.css';
import { Routes, Route } from 'react-router-dom';
import SubHeader from './components/subHeader/SubHeader';
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import Like from './router/like/Like'
import Cart from './router/cart/Cart';
import Footer from './components/footer/Footer';

import SingleRoute from './router/single-route/SingleRoute';
function App() {
  return (
    <div className="App">
      <SubHeader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<SingleRoute/>}/>

      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
