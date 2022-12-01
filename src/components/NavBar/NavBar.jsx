import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
const NavBar = () => {

  const {user} = useAuth()
    return (
        <>
        {user? 
        <nav className="navbar navbar-expand-lg  navegacion">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='nav-link' to="/">
                    <button className='btn btn-primary'>¡Mandados Online!</button>
                </Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to={"/category/1"}><button className="btn btn-success">Aceites</button></Link> </li>
              <li className="nav-item"><Link className="nav-link" to={"/category/2"}><button className="btn btn-success">Bebidas</button></Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/category/3"}><button className="btn btn-success">Limpieza</button></Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/category/4"}><button className="btn btn-success">Postres y Panificaciones</button></Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/category/5"}><button className="btn btn-success">Lácteos</button></Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/category/6"}><button className="btn btn-success">No perecederos</button></Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/category/7"}><button className="btn btn-success">Aderezos</button></Link></li>
              
            </ul>
            
          </div>
          <Link to={"/panel"} className="me-4 text-decoration-none">
          Mi cuenta
          </Link> 
            <CartWidget/>
        </div>
      </nav>
      :
      <nav className="navbar navbar-expand-lg  navegacion">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to="/">
              <button className='btn btn-primary'>¡Mandados Online!</button>
          </Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to={"/category/1"}><button className="btn btn-success">Aceites</button></Link> </li>
        <li className="nav-item"><Link className="nav-link" to={"/category/2"}><button className="btn btn-success">Bebidas</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/3"}><button className="btn btn-success">Limpieza</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/4"}><button className="btn btn-success">Postres y Panificaciones</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/5"}><button className="btn btn-success">Lácteos</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/6"}><button className="btn btn-success">No perecederos</button></Link></li>
        <li className="nav-item"><Link className="nav-link" to={"/category/7"}><button className="btn btn-success">Aderezos</button></Link></li>
        
      </ul>
      
    </div>
    <Link to={"/register"}><button className="btn btn-dark me-1">Registrarse</button></Link>
    <Link to={"/login"}><button className="btn btn-dark me-2">Iniciar sesión</button></Link>
      <CartWidget/>
  </div>
</nav>
      }
  
        </>
    );
}

export default NavBar;