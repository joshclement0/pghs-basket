import {React, useEffect,useState} from "react";
import { Image } from "@chakra-ui/react";

import ads from '../assets/ads.json'
const frequency = ads.map(a=>a.frequency)

function Ads(){
    let [ad,setAdd] = useState(ads[0])
    function getRandom(){
        let freq=[]
        for(let i in frequency){
            for (let j=0;j<frequency[i];j++){
                freq.push(i)
            }
        }
        let randInt = Math.floor(Math.random()*freq.length)
        setAdd(ads[freq[randInt]])
    }
    useEffect(() => {
        const interval = setInterval(() => {
          getRandom()
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    
    return(
        <div style={{padding:'18px', position:'fixed',bottom:'0px',left:'10%',borderTop:'2px solid grey',width:'80%',
            opacity:'.8',height:'120px',background: 'white', borderTopRightRadius: '20px', borderTopLeftRadius:'20px'}}
            onClick={()=>window.location.href =ad.link}>
            <Image alt={ad.title} src={ad.url} style={{position:'absolute',height:'80%',right:'50%',transform:'translate(50%, -34px)'}} />
        </div>
    )
}

export default Ads