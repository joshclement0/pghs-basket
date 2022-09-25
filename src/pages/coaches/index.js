import { React} from 'react';
import {Wrap} from '@chakra-ui/react'

import Person from '../../components/Person'
import coachesJson from './coaches.json'

function CoachesPage (){
    return(<div style={{textAlign: 'center',padding:"10px"}}>
        
        <Wrap spacing='30px' justify='center'>
        {coachesJson.map((player) => {return ( 
            <Person key={Math.random()} src={player.url} name={player.name} info={player.info}/>)})}
        </Wrap>
        
    </div>)
}
export default CoachesPage