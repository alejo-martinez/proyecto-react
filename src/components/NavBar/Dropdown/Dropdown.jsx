import React from 'react';

const Dropdown = ({val1, val2, val3, val4, val5}) => {
    return (
        <>
          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{val1}</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">{val2}</a>
                  <a className="dropdown-item" href="#">{val3}</a>
                  <a className="dropdown-item" href="#">{val4}</a>
                  <a className="dropdown-item" href="#">{val5}</a>
                </div>
              </li>  
        </>
    );
}

export default Dropdown;
