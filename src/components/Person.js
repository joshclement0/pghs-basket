import { Image,Box,Text} from '@chakra-ui/react'
import { useState } from 'react';
function Person(props){
    let[ isOpen, setOpen] = useState(false);
    
    return (
            <Box onClick={()=>setOpen(!isOpen)} style={{position:'relative',textAlign: 'center',border:'1px solid white', borderRadius:'8px',maxWidth:"600px",minWidth:'300px',margin:'32px'}}>
                <Image src={props.src} alt={props.name} style={{margin:"15px",width:'100%',opacity:isOpen?.5:1}}/>
                <div style={{color: 'white',fontSize:'3vh',position: 'absolute',bottom: isOpen?'100%':0,left:'50%',
                transform: isOpen?"translate(-50%, 100px)":"translate(-50%, -20px)",width:"100%"}}>{props.name}</div>
                {isOpen?<Text style={{position:'absolute',bottom:'50px',color:'white',fontSize:'2vh',padding:'24px'}}>{props.info}</Text>:''}
            </Box>
        
    )
}
export default Person