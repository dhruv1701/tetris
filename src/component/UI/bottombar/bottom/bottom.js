import React from 'react';
import './bottom.css'
var bottom=(props)=>{
    return(
        <div className="bottom">
            <button name="left" className="btn"  onClick={props.moveleft}>Left</button>
            <button name="right" className="btn" onClick={props.moveright}>Right</button>
            <button name="clockwise" className="btn" onClick={props.rotateclock}>Rotate</button>
            <button name="down" className="btn" onClick={props.fastdown}>Down</button>
        </div>

    )
}

export default bottom;