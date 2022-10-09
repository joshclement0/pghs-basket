import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Wrap, Box } from "@chakra-ui/react"

import routeContext from "./routecontext";
import SimpleField from "../../components/SimpleField"
import CustomAnchor from "../../components/CustomAnchor";

function MainHome(){
    let navigate = useNavigate();
    const { setSport } = useContext(routeContext)
    setSport('')
    let fields = {
        'Boys Basketball':{
            "route":"/boys_bball",
            "image":"https://phantom-marca.unidadeditorial.es/dce0ca951a7712498c1f48ff58591c91/resize/1200/f/jpg/assets/multimedia/imagenes/2021/11/27/16380165558995.jpg"
        },      
        'Girls Basketball':{
            "route":"/girls_bball",
            "image":"https://thespun.com/.image/t_share/MTg5MjAwOTU1MjM5MTgwMTc5/aac-basketball-tournament---quarterfinals---tulsa-v-smu.jpg",
        },
    }

    return (
        <div>
            <CustomAnchor id='#head' style={{textAlign:'center'}}>Pleasant Grove Media Guide</CustomAnchor>
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
export default MainHome