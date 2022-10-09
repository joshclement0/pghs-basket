import {React,useEffect,useState,useContext} from "react";
import {Wrap } from "@chakra-ui/react";

import CustomAnchor from "../../components/CustomAnchor";
import routeContext from "../util/routecontext";
import { useParams } from "react-router-dom";
import { getData } from "../util/firbaseconfig";
import SimpleField from "../../components/SimpleField";

function SponsorPage(){
    const [donateLinks, setLinks] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    setSport(sport)
    useEffect(() => {
        const fetchData = async () => {
            let importlinks = await getData("pghs/"+sport+"/donate")
            setLinks(importlinks)
        }
        fetchData()
      },[]);
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#camp" style={{textAlign:'center'}}>SucessFund Campaigns</CustomAnchor>
            {donateLinks.map((ad)=>{ return(
                <div key={Math.random()} onClick={ ()=>window.location.href =ad.link } style={{borderRadius:'8px',boxShadow:'royalblue 4px 4px 20px -2px'}}>
                    <SimpleField name={ad.title} image={ad.url} show={true} textstyle={{fontSize:'24px'}}/>
                </div>
            )})}
        </Wrap>
    )
}
export default SponsorPage