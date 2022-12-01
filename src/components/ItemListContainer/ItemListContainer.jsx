import { useEffect, useState, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../assets/firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

  
    useEffect(() => {
    
        if (category) {
            getProductos().then(productos => {
                const  listaProd = productos.filter(prod => prod.categoria === parseInt(category))
                const cardProducts = ItemList({listaProd})
                return setProductos(cardProducts)
            })
        } else {
            getProductos().then(listaProd => {
                const cardProducts = ItemList({listaProd})
                setProductos(cardProducts)
            })
        } 
        },[category]);
        

    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default ItemListContainer;