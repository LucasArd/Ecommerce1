import './ItemDetail.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = (props) => {

    const { id, title, image, category, description, price, stock } = props;

    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        alert("Agregado al carrito")

        const item = {id, title, price, image, stock}

        addItem(item,quantity)
    }

    return (
        <Card style={{ width: '18rem' }} className='CardContainer'>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                CATEGORIA: {category}
            </Card.Text>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    DESCRIPCION: {description}
                </Card.Text>
                <Card.Text>
                    PRECIO: ${price}

                </Card.Text>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/' className='Option'><Button variant="primary">Terminar Compra</Button></Link>
                        ) : (
                            <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                        )
                    }
            </Card.Body>
        </Card>
    )

}
export default ItemDetail;