import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    const nameOption = ["electronics","jewelery","men's clothing","women's clothing"]


    return (
        <nav className="NavBar">
            <NavLink to="http://localhost:3000">
                <h3>Ecommerce</h3>
            </NavLink>
            <div className="NavBarDiv">
                <NavLink to={`products/category/${nameOption[0]}`}>
                    <button>electronics</button>
                </NavLink>
                <NavLink to={`/products/category/jewelery`}>
                    <button>jewelery</button>
                </NavLink>
                <NavLink to={`/products/category/men'sclothing`}>
                    <button>men's clothing</button>
                </NavLink>
                <NavLink to={`/products/category/women'sclothing`}>
                    <button>women's clothing</button>
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;