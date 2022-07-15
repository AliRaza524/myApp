import React from "react";
import './Mystyle.css'

const StyleCom=(props)=>{
    let className=props.styleprops?'primary':''
    return(
        <div>
            <h1 className={`${className} myfont`}>STYLESHEET</h1>
        </div>
    )
}

export default StyleCom;