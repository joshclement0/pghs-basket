import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Wrap, Box } from "@chakra-ui/react"
import { getImageURL, getData } from './firbaseconfig'
import { useQuery } from '@tanstack/react-query'

import routeContext from "./routecontext";
import SimpleField from "../../components/SimpleField"
import CustomAnchor from "../../components/CustomAnchor";

function MainHome(){
    let navigate = useNavigate();
    const { setSport } = useContext(routeContext)
    setSport('')
    const {isFetched, data} = useQuery(
        [ "config"],
        () => getData(`${process.env.REACT_APP_TAG}/config`),
        {staleTime: 1,cacheTime:0}
      )
    return (
        <div>
            <CustomAnchor id='#head' style={{textAlign:'center'}}>{process.env.REACT_APP_NAME}</CustomAnchor>
            <Wrap spacing='30px' justify='center'>
                {isFetched && data && data.fields.map((field) => {return (
                    <Box key={Math.random()} onClick={() => { navigate(field.tag) }}>
                        <SimpleField name={field.name} image={field.url} imgstyle={{height:'200px',width:"300px"}}/>
                    </Box>)})
                }
            </Wrap>
       </div>
    )
}
export default MainHome