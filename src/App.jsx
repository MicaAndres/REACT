import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { CartProvider } from './hooks/CartContext';
import {Cart}  from './components/Cart/Cart'
import CartView from './components/CartView/CartView.jsx'

function App() {
  
  return (
    
    <BrowserRouter>
    <CartProvider/>
      <div className="body">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailContainer />} />
        <Route path="/Cart/" element={<CartView />} />
      </Routes>
      </div>
      <CartProvider/>
    </BrowserRouter>
  );
}

export default App;