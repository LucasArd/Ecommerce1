import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { Fragment, useMemo} from "react";
import useFirestore from "../../utils/useFireStore";
import { useParams } from "react-router-dom";


const nameCollection = "items";

const ItemListContainer = ({greeting}) =>{   
    
    const {category} = useParams();
    const options = useMemo(() =>{
        const optionsWithFilters = {nameCollection, filters: { where: ["category","==", category]}}; // filters es lo que va a recibir useFirestore como parametro. Es el filtro/s que va a aplicar
        const optionsWithNoFilters = {nameCollection};
        return category ? optionsWithFilters : optionsWithNoFilters;
    },[category])
    
    const [data] = useFirestore(options)
   
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