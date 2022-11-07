import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/product/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;