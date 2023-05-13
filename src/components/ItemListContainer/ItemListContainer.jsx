import ItemList from "../ItemList/ItemList";
// import useFetch from "../../utils/useFetch";
import './ItemListContainer.css';
import { Fragment } from "react";
// import { useParams } from "react-router-dom";

import useFirestore from "../../utils/useFireStore";
// const URL_CATEGORY="category"
// const URL = "https://fakestoreapi.com/products/"

const nameCollection = "items";
// const documentId = "2iDHGQv5fy9HfzA8wi2U"

const ItemListContainer = ({greeting}) =>{   
    
    // const {category} = useParams(); 
    // const final_url = category ? `${URL}/${URL_CATEGORY}/${category}`: URL;
    // const [data] = useFetch(final_url)

    const [data] = useFirestore({nameCollection})
   

    return(
        <Fragment>
            <h3>{greeting}</h3>
            <div className="ItemListContainer">
                <ItemList products={data}/>
            </div>
        </Fragment>
    )
}

export default ItemListContainer;