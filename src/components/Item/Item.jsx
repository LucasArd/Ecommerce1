import './Item.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Item = (props) => {

    const { id: idProduct, title, image, price } = props

    return (
        <Card className='CardContainer overflow-hidden'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    {price}
                </Card.Text>
                <NavLink to={`/products/detail/${idProduct}`}>
                    <Button variant="primary">Ver Detalle</Button>
                </NavLink>
            </Card.Body>
        </Card>
    )
}

export default Item;