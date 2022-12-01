import React from "react"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {toast} from "react-toastify"
import { getProducto, createOrdenCompra, actualizarProducto } from "../../assets/firebase";

const Checkout = () => {

    const [verificado, setVerificado] = useState({
        email: "",
        emailVerificado: ""
    });


    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, precioTotal} = useContext(CartContext);

    const consultarFormulario = (e) => {
        e.preventDefault()
        if (verificado.email !== verificado.emailVerificado) {
            toast.error('Los emails no coinciden', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
        } else {
            const datForm = new FormData(datosFormulario.current)
            const valores = Object.fromEntries(datForm)
            console.log(valores);
            const aux = [...cart]
            aux.forEach(producto => {
                getProducto(producto.id)
                .then(prod => {
                    prod.stock -= producto.cant
                    actualizarProducto(producto.id, prod)
                })
            })
            
            createOrdenCompra(valores, precioTotal(), new Date().toISOString().slice(0, 10)).then(orden => {
                toast.success(`Su orden ${orden.id} fue creada con éxito`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                emptyCart()
                e.target.reset()
                navigate("/")
              
            }).catch(error => {
                console.log(error.code);
                toast.error(`Su orden no fue creada con éxito`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })

        }

    }
    

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input required="required" type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Apellido</label>
                    <input required="required" type="text" className="form-control" name="apellido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input required="required" type="email" className="form-control" name="email" onChange={(e)=> setVerificado({...verificado, email: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Confirmar Email</label>
                    <input required="required" type="email" className="form-control" name="emailConfirmado" onChange={(e) => setVerificado({...verificado, emailVerificado: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input required="required" type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input required="required" type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input required="required" type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;