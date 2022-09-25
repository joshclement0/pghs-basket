import React from "react"
import {Text} from "@chakra-ui/react"
function SimpleField(props){
    let name = props.name
    let image= props.image
    return(
        <div style={{height:"200px",width:'300px',textAlign:'center',margin:'20px',borderRadius:'12px',position:'relative'}}>
            <Text style={{position:'absolute', left:"50%", fontSize:"28px", transform: "translate(-50%, 30px)",fontWeight:'900'}} >{name}</Text>
            <img src={image} alt={name} style={{objectFit:"cover", borderRadius:'12px',opacity:'.4'}}/>
        </div>
    )
}
export default SimpleField