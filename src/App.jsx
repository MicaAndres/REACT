import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/fragments/ItemListContainer/ItemListContainer';
import React from 'react';



function App() {
  return (
      <>
        <NavBar/>
        <ItemListContainer/>
      </>
  );
}

export default App;
