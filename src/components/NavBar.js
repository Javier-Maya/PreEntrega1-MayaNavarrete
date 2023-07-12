import React from 'react';
import CartWidget from './CartWidget';
import logo from '../img/Universidad_de_Chile.png';
import '../App.css';

function NavBar (){
    return(
        <nav className="navbar">
            <div>
                <a href="#"><img src={logo} alt="Universidad de Chile Logo" className="logo-img"/></a>
            </div>
            <div>
                <ul className="navbar">
                    <li className="nav-item"><a href="#">INICIO</a></li>
                    <li className="nav-item"><a href="#">VENTAS</a></li> 
                    <li className="nav-item"><a href="#">CONTACTO</a></li>     
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;