import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/fragments/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from './components/fragments/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
      <>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
       
      </>
  );
}

export default App;
