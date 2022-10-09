import {React,useEffect,useState,useContext} from "react";
import {Wrap } from "@chakra-ui/react";

import CustomAnchor from "../../components/CustomAnchor";
import routeContext from "../util/routecontext";
import { useParams } from "react-router-dom";
import { getData } from "../util/firbaseconfig";
import SimpleField from "../../components/SimpleField";

function Page(){
    const [donateLinks, setLinks] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    setSport(sport)
    useEffect(() => {
        const fetchData = async () => {
            let importlinks = await getData("pghs/"+sport+"/Highlights")
            setLinks(importlinks)
        }
        fetchData()
      },[sport]);
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#camp" style={{textAlign:'center'}}>Highlights</CustomAnchor>
            {donateLinks.map((image)=>{ return(
                <SimpleField name={image.title} db={true} image={image.url} show={true} textstyle={{fontSize:'24px'}} style={{borderRadius:"16px"}}/>
            )})}
        </Wrap>
    )
}
export default Page