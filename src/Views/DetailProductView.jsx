import { Fragment } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './CssViews/CssViews.css';
import useFirestore from '../utils/useFireStore';

// const URL = "https://fakestoreapi.com/products/"

const nameCollection = 'items';

const DetailProductView = ({greeting}) =>{    

    const {idProduct:documentId} = useParams();
    const [data] = useFirestore({nameCollection,documentId})

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