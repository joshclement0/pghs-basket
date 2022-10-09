import React, {useContext, useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Wrap, Box } from "@chakra-ui/react"

import SimpleField from "../../components/SimpleField"
import CustomAnchor from "../../components/CustomAnchor";
import routeContext from "../util/routecontext";
import { getData } from "../util/firbaseconfig";

const defaultFields = [
    {
      "name":"Team Roster",
      "image": "https://phantom-marca.unidadeditorial.es/dce0ca951a7712498c1f48ff58591c91/resize/1200/f/jpg/assets/multimedia/imagenes/2021/11/27/16380165558995.jpg",
      "route": "/players"
    },
    {
      "name": "Coaches",
      "image": "https://thespun.com/.image/t_share/MTg5MjAwOTU1MjM5MTgwMTc5/aac-basketball-tournament---quarterfinals---tulsa-v-smu.jpg",
      "route": "/coaches"
    },
    {
      "name":"Calendar",
      "image": "https://imageio.forbes.com/specials-images/dam/imageserve/1128442176/0x0.jpg?format=jpg&width=1200",
      "route": "/calendar"
    },
    {
      "name":"Support Team",
      "image": "https://miro.medium.com/max/1400/1*ae3nIhqkTnxc0IQwwDBHXw.jpeg",
      "route": "/support/team"
    },
    {
      "name":"Support Sponsers",
      "image": "https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/03/GettyImages-1238711174-1.jpg",
      "route": "/support/sponsor"
    }
  ]
function Home(){
    let navigate = useNavigate();
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    const [fields, setFields] = useState(defaultFields)
    const [name, setName] = useState("PGHS BOYS BASKETBALL")
    useEffect(()=>{
        setSport(sport)
        async function fetchData(){
            let importdata = await getData("pghs/"+sport+"/config")
            setFields(importdata.fields??defaultFields)
            setName(importdata.name??"PGHS BOYS BASKETBALL")
        } 
        fetchData()
    },[])
    
    return(
        <div>
            <CustomAnchor id='#head' style={{textAlign:'center'}}>{name}</CustomAnchor>
            <Wrap spacing='30px' justify='center'>
                {fields.map((field) => {return (
                    <Box key={Math.random()} onClick={() => { navigate('/'+sport+field.route) }}>
                        <SimpleField name={field.name} image={field.image}/>
                    </Box>)})
                }
        </Wrap>
       </div>
    )
}
export default Home