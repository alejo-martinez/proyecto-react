import CartWidget from "../CartWidget/CartWidget";
// import Dropdown from "./Dropdown/Dropdown";
// import FormBusqueda from "../FormBusqueda/FormBusqueda";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to="/">
              <button className='btn btn-light'>¡Mandados Online!</button>
          </Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to={"/category/1"}><button className="btn btn-dark">Aceites</button></Link> </li>
        <li className="nav-item"><Link className="nav-link" to={"/category/2"}><button className="btn btn-dark">Bebidas</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/3"}><button className="btn btn-dark">Limpieza</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/4"}><button className="btn btn-dark">Postres y Panificaciones</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/5"}><button className="btn btn-dark">Lácteos</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/6"}><button className="btn btn-dark">No perecederos</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/7"}><button className="btn btn-dark">Aderezos</button></Link></li>
        
        
        
      </ul>
      
    </div>
      <CartWidget/>
  </div>
</nav>
        </>
    );
}

export default NavBar;