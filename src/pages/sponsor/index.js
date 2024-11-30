import {React,useEffect,useState,useContext} from "react";
import { Box,Wrap } from "@chakra-ui/react";

import SimpleAdd from "../../components/SimpleAdd";
import CustomAnchor from "../../components/CustomAnchor";
import { useParams } from "react-router-dom";
import routeContext from "../util/routecontext";
import { getData } from "../util/firbaseconfig";
import { useQuery } from "@tanstack/react-query";

function SponsorPage(){
    const [platinumAds, setPlatinum] = useState([]);
    const [goldAds, setGold] = useState([]);
    const [silverAds, setSilver] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)

    const allAds = useQuery([sport,"ads"], ()=>getData(`${process.env.REACT_APP_TAG}/${sport}/ads`),{staleTime: 1.8e+6,cacheTime:Infinity})
    
    setSport(sport)
    useEffect(() => {
        if (allAds.isFetched){
            setPlatinum(allAds.data.filter(a=>a.frequency===4))
            setGold(allAds.data.filter(a=>a.frequency===2))
            setSilver(allAds.data.filter(a=>a.frequency===1))
        }
      }, [allAds.isFetched, allAds.data]);
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#plat" >Platinum Sponsors</CustomAnchor>
            <br/>
            {platinumAds.map((ad)=>{ return(
                <div key={Math.random()} onClick={ ()=>window.location.href =ad.link }>
                    <SimpleAdd name={ad.title} image={ad.url} height='300px'/>
                </div>
            )})}
            <CustomAnchor id="#gold">Gold Sponsors</CustomAnchor>
            {goldAds.map((ad)=>{ return (
                <Box key={Math.random()} onClick={ ()=>window.location.href =ad.link } marginBottom="30px">
                    <SimpleAdd name={ad.title} image={ad.url} />
                </Box>
            )})}
            <CustomAnchor id="#gold">Silver Sponsors</CustomAnchor>
            {silverAds.map(ad=>{return (
                <Box key={Math.random()} onClick={ ()=>window.location.href =ad.link }>
                    <SimpleAdd name={ad.title} image={ad.url} />
                </Box>
            )})}
        </Wrap>
    )
}
export default SponsorPage