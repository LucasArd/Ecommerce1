import useFetch from '../utils/useFetch';
import { Fragment } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './CssViews/CssViews.css';

const URL = "https://fakestoreapi.com/products/"


const DetailProductView = ({greeting}) =>{    

    const {idProduct} = useParams();
    const [data] = useFetch(`${URL}/${idProduct}`);

    return(
        <Fragment>
            <h3>{greeting}</h3>
            <div className="ItemDetailContainer">
                <ItemDetail {...data} />
            </div>
        </Fragment>
    )
}

export default DetailProductView;