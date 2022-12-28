import { Image,Box,Text} from '@chakra-ui/react'
import { useState } from 'react';
import {getImageURL} from '../pages/util/firbaseconfig'
import {useQuery} from '@tanstack/react-query'
import defaultImage from "../assets/boys_bball/default.svg"
const styles = {
    text: {
        textShadow:"1px 1px 1px white",
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black",
        opacity: 1
    },
    number:{
        color:'white',
        fontFamily: 'Ms Madi cursive',
        position:'absolute',
        top:'22%',
        left:'72%',
        fontSize:'72px',
        fontWeight:800,
        border:'1px solid blue',
        borderRadius:'50%',
        height:'100px',
        width:'100px',  
        background: 'linear-gradient(72deg, rgba(2,0,36,1) 0%, rgba(33,35,254,1) 73%, rgba(255,194,0,1) 100%)'
    }
}
// const defaultImage = require("../assets/boys_bball/default.png")
function Person(props){
    let[ isOpen, setOpen] = useState(false);
    let infoArray = props.info
    let name      = props.name
    let playernum = props.num??false
    let incsource = props.src

    const {isLoading,data} = useQuery([incsource], () => getImageURL(incsource),{staleTime: 1.8e+6,cacheTime:Infinity})

    let radialStyle = isOpen?{}:{background:'radial-gradient(ellipse at 50% 50%, rgba(229, 227, 230, 0.93) 10%, rgba(255, 255, 255, 0) 65%)'}
    return (
            <Box onClick={()=>setOpen(!isOpen)} style={{position:'relative',textAlign: 'center', borderRadius:'8px',maxWidth:"500px",minWidth:'300px',margin:'32px',minHeight:'100px'}}>
                {playernum?<div style={{...styles.number,opacity:isOpen?.3:1}}>{playernum}</div>:''}
                {isLoading?
                <Image src={defaultImage} style={{width:'100%',opacity:isOpen?.35:1}}/>:
                <Image src={data} alt={name} style={{width:'100%',opacity:isOpen?.35:1}}/>}
                <div style={{fontSize:'3vh',position: 'absolute',bottom: isOpen?'100%':0,left:'50%',
                        transform: isOpen?"translate(-50%, 100px)":"translate(-50%, -20px)",width:"100%",...styles.text,...radialStyle}}>
                    {name}
                </div>
                {isOpen ? <div key={Math.random()}style={{position:'absolute',bottom:'0px',left:'50%',transform:"translate(-50%,0)",
                                width:'100%',minWidth:'200px',fontSize:'1.5vh',padding:'24px',overflow: 'auto', maxHeight:'75%',...styles.text}}>
                            {infoArray.map((inf)=>(<Text key={Math.random()} paddingBottom='10px'>{inf}</Text>))}
                        </div>
                    : ''}
            </Box>
        
    )
}

export default Person