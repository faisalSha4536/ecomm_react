import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'; 
import {ShopContextProvider} from './context/ShopContext';
import { Suspense, lazy } from 'react';

const Cart = lazy(()=>import('./pages/cart/cart'))
const Shop = lazy(()=>import('./pages/shop/shop'))
const Category = lazy(()=>import('./pages/shop/category'))
const SingleProduct = lazy(()=>import('./pages/shop/SingleProduct'))
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Suspense fallback = {<div>Loading...</div>}><Shop/></Suspense>}/>
          <Route path='/cart' element = {<Suspense fallback = {<div>Loading...</div>}><Cart/></Suspense>}/>
          <Route path='/category/:type' element = {<Suspense fallback = {<div>Loading...</div>}><Category/></Suspense>}/>
          <Route path='/product/:type/:id' element = {<Suspense fallback = {<div>Loading...</div>}><SingleProduct/></Suspense>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
