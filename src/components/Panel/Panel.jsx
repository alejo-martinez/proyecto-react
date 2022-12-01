import React from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Panel = () => {
    const {user, logOut} = useAuth()

    const navigate = useNavigate()

    const cerrarSesion = async () => {
        await logOut()
        navigate("/")
    }

    return (
        <div className='text-center'>
            <h3 className='p-cart mt-4'>Bienvenido usuario: {user.email}</h3>
            <button onClick={cerrarSesion} className="btn btn-danger mt-4">Cerrar sesión</button>
        </div>
    );
}

export default Panel;
