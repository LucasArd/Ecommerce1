import React from "react";
import './ItemCount.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) =>{

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="Controls">
                <Button className="Button" variant="secondary" onClick={decrement} > - </Button>
                <h4 className="Number">{quantity}</h4>
                <Button className="Button" variant="secondary" onClick={increment}> + </Button>
            </div>
            <div className="AgregarACarrito">
                <Button className="Button " variant="success" onClick={() => onAdd(quantity)} disabled= {!stock}>
                    Agregar al Carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount;