import { updateDoc } from "firebase/firestore";
import { createProducto, getProducto, actualizarProducto, eliminarProducto, getOrdenCompra, createOrdenCompra } from "./firebase";

//f465LzvSt9Lip2Ej4w6G
// createProducto(producto).then(mensaje=> console.log(mensaje))

// getProducto("f465LzvSt9Lip2Ej4w6G").then(prod => {
//     prod.stock -= 10
//     actualizarProducto("f465LzvSt9Lip2Ej4w6G", prod).then(mensaje => console.log(mensaje)); 
// })


// eliminarProducto("mO4FVdSfUSGoFY55n6CO").then(mensaje => console.log(mensaje))

const cliente = {
    nombre: "Alejo",
    apellido: "Martinez",
    email : "alejo@gmail.com",
    dni: 41403795,
    direccion : "avenida siempreviva 123",
}

// createOrdenCompra(cliente, 12500).then(orden => console.log(orden))