import React from 'react';
import './Z.css';

var z=(props)=>{
    return(
        <div className="z">
            <div className="squarez" style={{borderRight:"None",width:"18px"}}></div>
            <div className="squarez" ></div>
            <div className="squarez" style={{top: "-20px",left: "-20px",borderBottom:"None"}}></div>
            <div className="squarez" style={{top:"20px",left:"-58px",borderTop:"None"}}></div>
        </div>
    );
}

export default z;
