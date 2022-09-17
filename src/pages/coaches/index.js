import { React} from 'react';
import {Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import playerJson from './players.json'

function Players (){
    return(<div style={{background:'blue',textAlign: 'center',padding:"20px",marginTop:"40px"}}>
        HEY THIS IS THE MAIN SCREEN
        
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={player.url} name={player.name} info={player.info}/>)})}
        </Wrap>
        
    </div>)
}
export default Players