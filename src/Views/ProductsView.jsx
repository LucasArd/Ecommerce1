import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Fragment } from "react";
import CarouselIndex from "../components/Carousel/Carousel";

const ProductsView = (props) =>{
    

    return (
        <Fragment>
            <CarouselIndex/>
            <ItemListContainer greeting={'Welcome to S.T Gallery Experience'}/>
        </Fragment>
    )
}

export default ProductsView;