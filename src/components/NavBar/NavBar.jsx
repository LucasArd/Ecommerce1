import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import ListOptionNavBarComponent from '../ListOptionNavBarComponent/ListOptionNavBarComponent';
import { useMemo } from "react";
import useFireStore from "../../utils/useFireStore";

const nameCollection = "categories";
const imgUrl = "https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000"

const NavBar = () => {

    const [data] = useFireStore({nameCollection})

    const dataProcess = useMemo(() => {
        const categoriesObject = data.length !== 0 ? data[0] : [];
        return "category" in categoriesObject ? categoriesObject.category :[];
    }, [data])
    
    return (
        <nav className="NavBar">
            <NavLink to="http://localhost:3000"className="NavBarTitle">
                <img src={imgUrl} alt="tiendaimagen" className="NavBarImg" />
                <h3 className = "NavBarTitleH3">Free Shop</h3>
            </NavLink>
            <ListOptionNavBarComponent nameOption={dataProcess} />
            <CartWidget />
        </nav>
    )
};

export default NavBar;