import Item from "../Item/Item";
const ItemList = ({listaProd}) => {
    return (
        <>
            {listaProd?.map(producto => <Item key={producto.id} prod={producto}/>)}
        </>
    );
}

export default ItemList;