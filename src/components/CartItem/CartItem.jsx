import {React, useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';



const CartItem = (props) => {

    const { title, image, price, quantity} = props

    const { removeToCart } = useContext(CartContext)

    const removeThisItem =() =>{
        removeToCart(props.id);
    }

    return (
        <div className='CardContainers'>
            <Card className='overflow-hidden CardCont'>
                <Card.Img className='card-imgg ' src={image} />
                <Card.Body className='CardBody'>
                    <Card.Title className='CardCenter' >{title}</Card.Title>
                    <Card.Text className='CardCenter'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Text className='CardCenter' >
                        {quantity}
                    </Card.Text> 
                    <Card.Text className='CardCenter' >
                        ${price}
                    </Card.Text> 
                    <Button size="sm" variant="outline-light" onClick={removeThisItem}>
                        <FontAwesomeIcon icon= { faDeleteLeft } style={{color: "#ff0000",}} className='CardCenter'/>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem;