import React from "react";
import { Box,Wrap } from "@chakra-ui/react";

import SimpleAdd from "../../components/SimpleAdd";
import CustomAnchor from "../../components/CustomAnchor";
import allAds from '../../assets/ads.json'

let platinumAds = allAds.filter(a=>a.frequency===4)
let goldAds = allAds.filter(a=>a.frequency===2)
let silverAds = allAds.filter(a=>a.frequency===1)

function SponsorPage(){
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#plat" style={{textAlign:'center'}}>Platinum Sponsors</CustomAnchor>
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