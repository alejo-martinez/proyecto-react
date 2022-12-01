import {Link} from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <div className="card cardProducto">
            <div>
                        <img src={prod.img} className="card-img-top imgProducto" height={200} alt={`${prod.nombre}`} />
            </div>
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text color-text">Precio: ${prod.precio}</p>
                            <p className="card-text color-text">Stock: {prod.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/product/${prod.id}`}>Ver producto</Link></button>
                    </div>
        </div>
    );
}

export default Item;
