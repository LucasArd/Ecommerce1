import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import ListOptionNavBarComponent from '../ListOptionNavBarComponent/ListOptionNavBarComponent';


const NavBar = () => {

    const nameOption = ["electronics","jewelery","men'sclothing","women'sclothing"]

    return (
        <nav className="NavBar">
            <NavLink to="http://localhost:3000">
                <h3>Ecommerce</h3>
            </NavLink>
            <ListOptionNavBarComponent nameOption = {nameOption}/>
            <CartWidget />
        </nav>
    )
};

export default NavBar;