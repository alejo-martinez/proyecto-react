import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
    const {cart, emptyCart, quitarProducto, precioTotal, storage} = useContext(CartContext)

    if (cart.length === 0 && storage.length === 0) {
        return (
        <div className="mt-5 text-center">
        <p className="mb-5 p-cart">¡Todavía no agregaste ningún producto al carrito!</p>
        <Link to={"/"}><button className="btn btn-primary">Volver al catálogo</button></Link>
    </div>
        )
    } else if (storage.length !== 0) {
        return (
            <div className="row">
                    {storage.map((prod, indice) =>  
                    <div className="card cardProducto" key={indice}>
            <div>
                        <img src={prod.img} className="card-img-top imgProducto" height={200} alt={`${prod.nombre}`} />
            </div>
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Precio unitario: ${prod.precio}</p>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Subtotal: ${prod.cant * prod.precio}</p>
                        </div>
                            <button className="btn btn-danger mb-3" onClick={() => quitarProducto(prod.id)}>Eliminar del carrito</button>
                
                    </div>)}
                    <div className="contenedor-fin">
                        <p>Total: ${precioTotal()}</p>
                        <button className="btn btn-danger me-4" onClick={emptyCart}>Vaciar carrito</button>
                            <Link to="/checkout">
                                <button className="btn btn-primary">Finalizar Compra</button>
                            </Link>
                    </div>
                 </div>
        )
    } 

    // return (
    //     <>
    //         {
    //              ? 

    //              : 
                 
    //         }
    //     </>
    // );
}

export default Cart;
