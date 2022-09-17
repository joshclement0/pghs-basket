import React from "react"
function CustomAnchor(props){
    return (
        <div id={props.id}style={{fontSize:'6vh'}}>{props.children}</div>
    )
}
export default CustomAnchor