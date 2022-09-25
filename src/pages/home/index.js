import React from "react"
import { useNavigate } from "react-router-dom";
import { Wrap, Box } from "@chakra-ui/react"

import SimpleField from "../../components/SimpleField"
import CustomAnchor from "../../components/CustomAnchor";

function Home(){
    let navigate = useNavigate();
    let fields = {
        'Team Roster':{
            "route":"/players",
            "image":"https://phantom-marca.unidadeditorial.es/dce0ca951a7712498c1f48ff58591c91/resize/1200/f/jpg/assets/multimedia/imagenes/2021/11/27/16380165558995.jpg"
        },      
        'Coaches':{
            "route":"/coaches",
            "image":"https://thespun.com/.image/t_share/MTg5MjAwOTU1MjM5MTgwMTc5/aac-basketball-tournament---quarterfinals---tulsa-v-smu.jpg",
        }, 
        'Calendar':{
            "route":"/calendar",
            "image":"https://imageio.forbes.com/specials-images/dam/imageserve/1128442176/0x0.jpg?format=jpg&width=1200"
        },
        'Support Team':{
            "route":'/support/team',
            "image":"https://miro.medium.com/max/1400/1*ae3nIhqkTnxc0IQwwDBHXw.jpeg"
        }, 
        'Support Sponsers':{
            "route":'/support/sponsor',
            "image":"https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/03/GettyImages-1238711174-1.jpg"
        }, 
    }
    return(
        <div>
            <CustomAnchor id='#head' style={{textAlign:'center'}}>PGHS BOYS BASKETBALL</CustomAnchor>
            <Wrap spacing='30px' justify='center'>
                {Object.keys(fields).map((field) => {return (
                    <Box key={Math.random()} onClick={() => { navigate(fields[field]["route"]) }}>
                        <SimpleField name={field} image={fields[field]['image']}/>
                    </Box>)})
                }
        </Wrap>
       </div>
    )
}
export default Home