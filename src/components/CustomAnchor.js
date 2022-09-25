import React from "react"
function CustomAnchor(props){
    let id = props.id
    let addStyle = props.style??{}
    return (
        <div id={id}style={{fontSize:'6vh', background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,254,.3) 50%, rgba(255,255,255,1) 100%)',...addStyle}}>{props.children}</div>
    )
}
export default CustomAnchor