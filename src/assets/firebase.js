import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "e-commerce-react-72998.firebaseapp.com",
  projectId: "e-commerce-react-72998",
  storageBucket: "e-commerce-react-72998.appspot.com",
  messagingSenderId: "838839461086",
  appId: "1:838839461086:web:145c4cd9e086a57b60ce4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch("../json/productos.json")
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            precio: prod.precio,
            stock: prod.stock,
            categoria: prod.categoria,
            img: prod.img
        })
    })
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos", id))
    let item
    if(prod.data()) {
        item = {...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    
    return item
}


const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProducto.nombre,
        precio: objProducto.precio,
        stock: objProducto.stock,
        categoria: objProducto.categoria,
        img: objProducto.img
    })
    return estado
}

const actualizarProducto = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado 
} 

const eliminarProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createOrdenCompra = async (cliente, totalPrice, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: totalPrice
    })
    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

export { cargarBDD, getProductos, getProducto, createProducto, actualizarProducto, eliminarProducto, createOrdenCompra, getOrdenCompra, auth }