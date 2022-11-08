import { useState } from "react";

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);

    const aumentar = ()=> contador < stock && setContador(contador + 1)
    const disminuir = ()=> contador > 1 && setContador(contador - 1)

    return (
        <>
          <button className="btn btn-light mb-1 me-2" onClick={aumentar}>+</button>
          {contador}
          <button className="btn btn-light mb-1 ms-2" onClick={disminuir}>-</button>  
        </>
    );
}

export default ItemCount;
