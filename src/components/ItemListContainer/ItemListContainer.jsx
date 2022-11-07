import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { baseDeDatos } from "../../assets/funciones";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
    
        if (category) {
            baseDeDatos("../json/productos.json").then(productos => {
                const  listaProd = productos.filter(prod => prod.categoria === parseInt(category))
                console.log(listaProd);
                const cardProducts = ItemList({listaProd})
                return setProductos(cardProducts)
            })
        } else {
            baseDeDatos("../json/productos.json").then(listaProd => {
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