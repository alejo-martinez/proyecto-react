import CartWidget from "../CartWidget/CartWidget";
import Dropdown from "./Dropdown/Dropdown";
import FormBusqueda from "../FormBusqueda/FormBusqueda";
const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mandados Online</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <Dropdown val1="Limpieza" val2="Suavizantes" val3="Jabón en Polvo" val4="Lavandina" val5= "Papeles y Algodones" />
              <Dropdown val1="Bebidas" val2="Gaseosas" val3="Aguas" val4="Con alcohol" val5="Aguas Saborizadas"/>
              <Dropdown val1="Alimentos" val2="Carnes" val3="Lacteos" val4="Panificaciones" val5="Verduras/Frutas"/>
            </ul>
            <FormBusqueda />
            <li className="nav-item list-unstyled">
                <a className="nav-link" href="#"><button><CartWidget/></button></a>
            </li>
          </div>
        </div>
      </nav>
        </>
    );
}

export default NavBar;