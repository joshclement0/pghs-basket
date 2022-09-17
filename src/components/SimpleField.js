import React from "react"
import {Text} from "@chakra-ui/react"
function SimpleField(props){
    return(
        <div style={{height:"200px",width:'300px',border:'1px blue solid',textAlign:'center',margin:'30px',borderRadius:'12px'}}>
            <Text>{props.name}</Text>
        </div>
    )
}
export default SimpleField