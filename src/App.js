import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import Category from './pages/shop/category'
import {ShopContextProvider} from './context/ShopContext';
import SingleProduct from './pages/shop/SingleProduct';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Shop/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/category/:type' element = {<Category/>}/>
          <Route path='/product/:type/:id' element = {<SingleProduct/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
