import React from "react";
import { NavLink } from "react-router-dom";


const OptionNavBarComponent = (props) =>{
    const {titleOption} = props;

    return(
        <NavLink to ={`/category/${titleOption}`}>
            {titleOption}
        </NavLink>
    )
}

export default OptionNavBarComponent;