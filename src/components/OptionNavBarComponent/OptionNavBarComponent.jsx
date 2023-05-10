import React from "react";
import { NavLink } from "react-router-dom";
import './OptionNavBarComponent.css';


const OptionNavBarComponent = (props) =>{
    const {titleOption} = props;

    return(
        <NavLink to ={`/category/${titleOption}`} className="NavOptions">
            <h5>{titleOption}</h5>
        </NavLink>
    )
}

export default OptionNavBarComponent;