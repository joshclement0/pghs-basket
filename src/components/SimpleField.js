import React, { useEffect, useState } from "react"
import {Text} from "@chakra-ui/react"
import { getImageURL } from "../pages/util/firbaseconfig"
import { useQuery } from "@tanstack/react-query"
function SimpleField(props){
    let name = props.name
    let db   = props.db ?? false
    let [image,setImage]= useState(props.image)
    let style = props.style ?? {}
    let textStyle = props.textstyle??{}
    const imgurl = useQuery([db?props.image :''], ()=>{
        if(db)getImageURL(props.image)
        else return ""
    },{staleTime: 1.8e+6,cacheTime:Infinity}) 
    useEffect(()=>{
        if (db && imgurl.isFetched && imgurl.data){
            console.log("setting imgurl",imgurl.data)
            setImage(imgurl.data)
        }
    },[db,imgurl.isFetched,imgurl.data])
    return(
        <div style={{height:"200px",width:'300px',textAlign:'center',margin:'20px',borderRadius:'12px',position:'relative',...style}}>
            <Text style={{position:'absolute', left:"50%", fontSize:"28px", transform: "translate(-50%, 30px)",fontWeight:'900',...textStyle}} >{name}</Text>
            <img src={image} alt={name} style={{objectFit:"cover", borderRadius:'12px',opacity:'.4'}}/>
        </div>
    )
}
export default SimpleField