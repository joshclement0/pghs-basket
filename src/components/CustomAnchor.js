import React from "react"
function CustomAnchor(props){
    let id = props.id
    let addStyle = props.style??{}
    return (
        <div id={id}style={{fontSize:'6vh', textAlign:'center',width:'90%',borderRadius:'8px',
        marginRight: 'auto', marginLeft: 'auto',background: 'linear-gradient(90deg, rgba(65, 105, 225,.8) 0%, rgba(65,105,255,.3) 50%, rgba(65, 105, 225,.8) 100%)',...addStyle}}>{props.children}</div>
    )
}
export default CustomAnchor