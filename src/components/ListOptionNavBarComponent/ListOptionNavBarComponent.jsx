import React from "react";
import OptionNavBarComponent from "../OptionNavBarComponent/OptionNavBarComponent.jsx";
import './ListOptionNavBarComponent.css';

const ListOptionNavBarComponent = (props) => {
    const { nameOption } = props;

    return(
        <div className='List-Nav-Bar'>
            {nameOption.map((item,index)=>{
                return <OptionNavBarComponent key={index} titleOption={item}/>
            })}
        </div>
    )
}

export default ListOptionNavBarComponent;