import { Image,Box,Text} from '@chakra-ui/react'
import { useState } from 'react';

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
        zIndex:'-1',
        border:'1px solid blue',
        borderRadius:'50%',
        height:'100px',
        width:'100px',  
        background: 'linear-gradient(72deg, rgba(2,0,36,1) 0%, rgba(33,35,254,1) 73%, rgba(255,194,0,1) 100%)'
    }
}

function Person(props){
    let[ isOpen, setOpen] = useState(false);
    let imageSrc  = props.src
    let infoArray = props.info
    let name      = props.name
    let playernum = props.num??false
    return (
            <Box onClick={()=>setOpen(!isOpen)} style={{position:'relative',textAlign: 'center', borderRadius:'8px',maxWidth:"600px",minWidth:'300px',margin:'32px'}}>
                {playernum?<div style={{...styles.number,opacity:isOpen?.3:1}}>{playernum}</div>:''}
                <Image src={imageSrc} alt={name} style={{width:'100%',opacity:isOpen?.35:1}}/>
                <div style={{fontSize:'3vh',position: 'absolute',bottom: isOpen?'100%':0,left:'50%',
                        transform: isOpen?"translate(-50%, 100px)":"translate(-50%, -20px)",width:"100%",...styles.text}}>
                    {name}
                </div>
                {isOpen ? <div key={Math.random()}style={{position:'absolute',bottom:'0px',left:'50%',transform:"translate(-50%,0)",
                                width:'100%',minWidth:'200px',fontSize:'1.5vh',padding:'24px',overflow: 'auto', maxHeight:'75%',...styles.text}}>
                            {infoArray.map((inf)=>(<Text paddingBottom='10px'>{inf}</Text>))}
                        </div>
                    : ''}
            </Box>
        
    )
}

export default Person