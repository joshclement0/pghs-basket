import React from "react"
import { useNavigate } from "react-router-dom";
import { Wrap, Box } from "@chakra-ui/react"

import SimpleField from "../../components/SimpleField"

function Home(){
    let navigate = useNavigate();
    let fields = {
        'Players':"/players",
        'Coaches':"/coaches",
        'Calendar':"/calendar",
        'Concession':"/concessions",
    }
    return(
        <Wrap spacing='30px' justify='center'>
            {Object.keys(fields).map((field) => {return (<Box key={Math.random()} onClick={() => { navigate(fields[field]) }}><SimpleField name={field} /></Box>)})}
       </Wrap>
    )
}
export default Home