import {React,useEffect,useState,useContext} from "react";
import {Wrap } from "@chakra-ui/react";

import CustomAnchor from "../../components/CustomAnchor";
import routeContext from "../util/routecontext";
import { useParams } from "react-router-dom";
import { getData } from "../util/firbaseconfig";
import SimpleField from "../../components/SimpleField";
import { useQuery } from "@tanstack/react-query";

function Page(){
    const [donateLinks, setLinks] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    setSport(sport)
   
    const allLinks = useQuery(["pghs",sport,"Highlights"], ()=>getData("pghs/"+sport+"/Highlights"),{staleTime: 1.8e+6,cacheTime:Infinity})
    useEffect(() => {
        if (allLinks.isFetched && allLinks.data){
            setLinks(allLinks.data)
        }
      }, [allLinks.isFetched,allLinks.data]);
    return(
        <Wrap spacing='30px' justify='center'>
            <CustomAnchor id="#camp" >Highlights</CustomAnchor>
            {donateLinks.map((image)=>{ return(
                <SimpleField name={image.title} db={true} image={image.url} show={true} textstyle={{fontSize:'24px'}} style={{borderRadius:"16px"}}/>
            )})}
        </Wrap>
    )
}
export default Page