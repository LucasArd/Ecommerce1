import { Fragment, useContext } from "react";
import {  CartContext } from "../context/CartContext";
import CartItem from '../components/CartItem/CartItem';
import './CssViews/CssViews.css';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const CartView = () => {
    const { cart, total, clearCart } = useContext(CartContext)


    if(cart.length === 0){
        return(
            <div className="DivNoProducts">
                <h1> No hay productos agregados al carro </h1>
                <Button className="btn btn-success">
                    <Link to='http://localhost:3000/' className='Option'> <h5> Return Ecommerce </h5></Link>
                </Button>
            </div>
        )
    }
    
    return (
        <Fragment>
            <div className="CartViewContainer">
                {cart.map((prod) => (
                    <CartItem key={prod.id} {...prod}/>
                ))}
                <h3 className="CartViewH3">Total a pagar: ${total}</h3>
                <div className="BorrarCarritoBtn">
                    <Button className="btn btn-success" onClick={clearCart}>
                        <Link to='http://localhost:3000/' className='Option'> <h5> Finalizar Compra </h5></Link>
                    </Button>
                    <Button className="btn btn-danger " onClick={clearCart}>
                        <h5 > Borrar carrito </h5>
                    </Button>
                </div>
            </div>
        </Fragment>
    )
};

export default CartView;