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
            "image":"./boys_bball.jpeg"
        },      
        'Girls Basketball':{
            "route":"/girls_bball",
            "image":"./girls_bball.jpeg",
        },
        'Boys Soccer':{
            "route":"/boys_soc",
            "image":"./girls_soc.jpg",
        },
        'Wrestling':{
            "route":"wrestling",
            "image":"./wrestling.jpg",
        }
    }

    return (
        <div>
            <CustomAnchor id='#head' style={{textAlign:'center'}}>Pleasant Grove Media Guide</CustomAnchor>
            <Wrap spacing='30px' justify='center'>
                {Object.keys(fields).map((field) => {return (
                    <Box key={Math.random()} onClick={() => { navigate(fields[field]["route"]) }}>
                        <SimpleField name={field} image={fields[field]['image']} imgstyle={{height:'200px',width:"300px"}}/>
                    </Box>)})
                }
            </Wrap>
       </div>
    )
}
export default MainHome