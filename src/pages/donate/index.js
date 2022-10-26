import {React,useEffect,useState,useContext} from "react";
import {Wrap } from "@chakra-ui/react";

import CustomAnchor from "../../components/CustomAnchor";
import routeContext from "../util/routecontext";
import { useParams } from "react-router-dom";
import { getData } from "../util/firbaseconfig";
import SimpleField from "../../components/SimpleField";
import { useQuery } from "@tanstack/react-query";

function SponsorPage(){
    const [donateLinks, setLinks] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    setSport(sport)
    
    const allLinks = useQuery(["pghs",sport,"donate"], ()=>getData("pghs/"+sport+"/donate"),{staleTime: 1.8e+6,cacheTime:Infinity})
    useEffect(() => {
        if (allLinks.isFetched){
            setLinks(allLinks.data)
        }
      }, [allLinks.isFetched,allLinks.data]);
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#camp" >SucessFund Campaigns</CustomAnchor>
            <br/>
            {donateLinks.map((ad)=>{ return(
                <div key={Math.random()} onClick={ ()=>window.location.href =ad.link } style={{borderRadius:'8px',boxShadow:'royalblue 4px 4px 20px -2px'}}>
                    <SimpleField name={ad.title} image={ad.url} show={true} textstyle={{fontSize:'24px'}}/>
                </div>
            )})}
        </Wrap>
    )
}
export default SponsorPage