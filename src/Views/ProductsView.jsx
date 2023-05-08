import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Fragment } from "react";



const ProductsView = (props) =>{

    return (
        <Fragment>
            <ItemListContainer greeting={'Bienvenidos'}/>
        </Fragment>
    )
}

export default ProductsView;