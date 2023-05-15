import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { Fragment } from "react";
import useFirestore from "../../utils/useFireStore";


const nameCollection = "items";

const ItemListContainer = ({greeting}) =>{   
    
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