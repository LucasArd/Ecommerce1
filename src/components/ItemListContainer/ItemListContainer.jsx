import ItemList from "../ItemList/ItemList";
import useFetch from "../../utils/useFetch";
import './ItemListContainer.css';
import { Fragment } from "react";
import { useParams } from "react-router-dom";

const URL_CATEGORY="category"
const URL = "https://fakestoreapi.com/products/"



const ItemListContainer = ({greeting}) =>{   
    


    const {category} = useParams(); 
    const final_url = category ? `${URL}/${URL_CATEGORY}/${category}`: URL;
    const [data] = useFetch(final_url)
   

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