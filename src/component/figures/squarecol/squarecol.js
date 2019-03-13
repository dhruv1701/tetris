import React from 'react'
import './squarecol.css';
var squarecol=(props)=>{
    var figure="k "+props.shape;
    var top=props.topp*20;
    var left=props.leftt*20;
    return(
        <div className={figure} style={{position:"fixed",top:top+"px",left:left+"px"}}>
            
        </div>
    );
}

export default squarecol;