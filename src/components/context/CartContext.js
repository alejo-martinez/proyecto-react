import {  useState, createContext } from "react";
import useLocalStorage from "../../assets/useLocalStorage";


const CartContext = createContext([])

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
 

    const [storage, setStorage] = useLocalStorage("carrito", "")

    const isInCart = (id) =>{
        return cart.find(prod => prod.id === id)
    }

    const addItem  = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            const prodBuscar = cart.findIndex(prod => prod.id=== producto.id)
            const aux = [...cart]
            aux[prodBuscar].cant = cantidad
            setCart(aux)
            setStorage(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            setCart([...cart, nuevoProducto])
            setStorage([...cart, nuevoProducto])
        }
       
    }
    console.log(cart);
    const emptyCart = () => {
         setCart([])
         setStorage([])
        //  return setCart, setStorage
    }

        const quitarProducto = (id) => {
            setCart(cart.filter(prod => prod.id !== id))
            setStorage(storage.filter(prod => prod.id !== id))
            // return setCart, setStorage
        }

        const cantidadProductos = () => {
            return storage.reduce((acum, prod) => acum += prod.cant, 0)
        }

        
        const precioTotal = () => {
            return storage.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
        }

        return (
            <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, quitarProducto, cantidadProductos, precioTotal, storage}}>
                {props.children}
            </CartContext.Provider>
        )

}

export {CartContextProvider, CartContext}