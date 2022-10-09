import React from "react"
// import {Text} from "@chakra-ui/react"

function SimpleField(props){
    let name  = props.name
    let image = props.image
    let height = props.height ?? '200px'
    let showName = props.show ?? false
    return(
        <div style={{height:height,textAlign:'center',margin:'20px',borderRadius:'12px'}}>
            {showName?<div>{name}</div>:''}
            <img src={image} alt={name} style={{objectFit:"contain", borderRadius:'12px', height:'inherit',maxWidth:'100%'}}/>
        </div>
    )
}
export default SimpleField