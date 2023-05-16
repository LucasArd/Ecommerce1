import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Fragment } from "react";
import CarouselIndex from "../components/Carousel/Carousel";

const ProductsView = (props) =>{
    

    return (
        <Fragment>
            <CarouselIndex/>
            <ItemListContainer greeting={'Bienvenidos'}/>
        </Fragment>
    )
}

export default ProductsView;