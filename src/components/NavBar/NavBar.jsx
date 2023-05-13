import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import ListOptionNavBarComponent from '../ListOptionNavBarComponent/ListOptionNavBarComponent';



const imgUrl = "https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000"

const NavBar = () => {
    
    const nameOption = ["electronics", "jewelery", "men's clothing", "women's clothing"]

    return (
        <nav className="NavBar">
            <NavLink to="http://localhost:3000"className="NavBarTitle">
                <img src={imgUrl} alt="tiendaimagen" className="NavBarImg" />
                <h3 className = "NavBarTitleH3">Free Shop</h3>
            </NavLink>
            <ListOptionNavBarComponent nameOption={nameOption} />
            <CartWidget />
        </nav>
    )
};

export default NavBar;