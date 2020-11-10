import React from "react";


function Image(props) {
    return <div className="col card character" onClick={() => props.handleClick(props.id)}><img className="img" src={props.image} alt={props.name}></img></div>
}

export default Image;