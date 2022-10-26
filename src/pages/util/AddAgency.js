import {React, useEffect,useState,useContext} from "react";
import { Image } from "@chakra-ui/react";
import {useQuery} from '@tanstack/react-query'

import routeContext from './routecontext';
import { getData } from "./firbaseconfig";
// import ads from '../assets/boys_bball/ads.json'
// const frequency = ads.map(a=>a.frequency)

function Ads(){
    const { sport } = useContext(routeContext)
    let [ads, setAds]=useState([])
    let [visible,setVisible] = useState([])
    const adquery = useQuery(["pghs", sport, "ads"], () => getData("pghs/"+sport+"/ads"),{staleTime: 1.8e+6,cacheTime:Infinity})

    function getRandom(){
        let frequency=ads.map(a=>a.frequency)
        let freq=[]
        for(let i in frequency){
            for (let j=0;j<frequency[i];j++){
                freq.push(i)
            }
        }
        let randInt = Math.floor(Math.random()*freq.length)
        let visibleTemp = Array(ads.length).fill({display:'none'})
        visibleTemp[freq[randInt]] = {}
        setVisible(visibleTemp)
    }
    useEffect(() => {
        if (adquery.isFetched && adquery.data){
            setAds(adquery.data)
        }
      }, [adquery]);
    useEffect(()=>{
        let interval = setInterval(getRandom,5000)
        return ()=>clearInterval(interval)

    })
    
    return (<div>
        {ads.map((ad,index)=>(
            <div style={{padding:'18px', position:'fixed',bottom:'0px',left:'10%',borderTop:'2px solid grey',width:'80%',
                opacity:'.9',height:'120px',background: 'white', borderTopRightRadius: '20px', borderTopLeftRadius:'20px',...visible[index]}}
                key={Math.random()} onClick={()=>window.location.href =ad.link}>
                <Image alt={ad.title} src={ad.url} style={{position:'absolute',height:'80%',right:'50%',transform:'translate(50%, -28px)'}} />
            </div>)
        )}
    </div>)
}

export default Ads