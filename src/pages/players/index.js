import { React} from 'react';
import {Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import CustomAnchor from '../../components/CustomAnchor'
import playerJson from './varsity_players.json'

function Players (){
    return(<div style={{background:'blue',textAlign: 'center',padding:"20px"}}>
        <CustomAnchor id="#varsity"> Varsity </CustomAnchor>
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={player.url} name={player.name} info={player.info}/>)})}
        </Wrap>
        <CustomAnchor id="#jv"> Junior Varsity </CustomAnchor>
        <CustomAnchor id="#soph"> Sophmore </CustomAnchor>
        
    </div>)
}
export default Players