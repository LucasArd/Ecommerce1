import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import './CartWidget.css';

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div >
            <NavLink to='http://localhost:3000/cart' className="CartWidget" style={{ display: cart.length > 0 ? '' : 'none'}}>
                <FontAwesomeIcon icon = {faCartShopping} size ="2xl" style = {{color:"black"}}/>
                <h3>{cart.length}</h3>
            </NavLink>
        </div>
    )
}

export default CartWidget;