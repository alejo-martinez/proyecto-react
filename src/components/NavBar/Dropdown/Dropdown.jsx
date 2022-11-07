
import { Link } from 'react-router-dom';
const Dropdown = ({val1, val2, val3, val4, val5}) => {
    return (
        <>
          <li className="nav-item dropdown">
            
                <button className="nav-link dropdown-toggle btn" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{val1}</button>
                <div className="dropdown-menu">
                  {/* <Link className="dropdown-item" to={"/category/1"}><button >{val2}</button></Link>
                  <Link className="dropdown-item" to={"/category/2"}><button >{val3}</button></Link>
                  <Link className="dropdown-item" to={"/category/3"}><button >{val4}</button></Link>
                  <Link className="dropdown-item" to={"/category/4"}><button >{val5}</button></Link> */}
                </div>
              </li>  
        </>
    );
}

export default Dropdown;
