import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// COMPONENTES
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Register from './Register/Register';
import Login from './Login/Login';
import Panel from './Panel/Panel';


// CONTEXT
import { AuthProvider } from './context/authContext';
import { CartContextProvider } from './context/CartContext';


// TOASTIFY
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <CartContextProvider>
    <AuthProvider>

    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/product/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
    
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/panel' element={<Panel/>} />
      <Route path='*' element = {<h1 className='p-cart text-center mt-3'>Ruta no encontrada</h1>} />
      <Route path='/product/*' element={<h1 className='p-cart text-center mt-3'>Producto no encontrado</h1>}/>
       <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/> 
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    
    </AuthProvider>
    </CartContextProvider>
    </>
  );
}

export default App;