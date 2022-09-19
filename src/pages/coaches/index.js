import { React} from 'react';
import {Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import playerJson from './players.json'

function Players (){
    return(<div style={{textAlign: 'center',padding:"10px",marginTop:"40px"}}>
        
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={player.url} name={player.name} info={player.info}/>)})}
        </Wrap>
        
    </div>)
}
export default Players