import React, { useEffect, useState } from "react"
import {Text} from "@chakra-ui/react"
import { getImageURL } from "../pages/util/firbaseconfig"
function SimpleField(props){
    let name = props.name
    let db   = props.db ?? false
    let [image,setImage]= useState(props.image)
    let style = props.style ?? {}
    let textStyle = props.textstyle??{}
    useEffect(()=>{
        async function getImg(){
            let url = await getImageURL(props.image)
            setImage(url)
        }
        if (db){
            getImg()
        }
    },[db,props.image])
    return(
        <div style={{height:"200px",width:'300px',textAlign:'center',margin:'20px',borderRadius:'12px',position:'relative',...style}}>
            <Text style={{position:'absolute', left:"50%", fontSize:"28px", transform: "translate(-50%, 30px)",fontWeight:'900',...textStyle}} >{name}</Text>
            <img src={image} alt={name} style={{objectFit:"cover", borderRadius:'12px',opacity:'.4'}}/>
        </div>
    )
}
export default SimpleField