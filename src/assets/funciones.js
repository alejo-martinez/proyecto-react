export const baseDeDatos = async (url) => {
    const promise = await fetch(url)
    const productos = await promise.json() 
    return productos
 }
