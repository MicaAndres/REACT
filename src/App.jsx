import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import  {CartFuncion } from './hooks/Context';
import {Cart}  from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  
  return (
    
    <BrowserRouter>
  
      <CartFuncion/>
        <div className="body">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} /> 
        </Routes>
        </div>
      <CartFuncion/>
      
    </BrowserRouter>
  );
}

export default App;