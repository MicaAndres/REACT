import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  
  return (
    <BrowserRouter>
      <div className="body">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;