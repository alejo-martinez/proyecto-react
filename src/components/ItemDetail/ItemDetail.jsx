import {useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import {toast} from "react-toastify"
const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        if (producto.stock === 0) {
            toast.error("¡Actualmente nos quedamos sin stock! Disculpe las molestias", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            addItem(producto, contador)
        }
    }

    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={producto.img} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text color-text'>Modelo: {producto.modelo}</p>
                    <p className='card-text color-text'>Marca: {producto.marca}</p>
                    <p className='card-text color-text'>Precio: ${producto.precio}</p>
                    <p className='card-text color-text'>Stock: {producto.stock}</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
