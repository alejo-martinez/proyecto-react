import React from 'react';

const FormBusqueda = () => {
    return (
        <>
           <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Buscar producto" />
              <button className="btn btn-secondary my-2 my-sm-0 me-2" type="submit">Buscar</button>
            </form> 
        </>
    );
}

export default FormBusqueda;
