import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);

    const agregarACarrito = () => {
      onAdd(contador);
    }

    const aumentar = ()=> contador < stock && setContador(contador + 1)
    const disminuir = ()=> contador > 1 && setContador(contador - 1)

    return (
        <>
          <button className="btn btn-dark mb-1 me-2" onClick={disminuir}>-</button>  
          {contador}
          <button className="btn btn-dark mb-1 ms-2" onClick={aumentar}>+</button>
          <button onClick={agregarACarrito} className="btn btn-dark">Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
