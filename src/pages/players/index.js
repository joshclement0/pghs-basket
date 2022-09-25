import { React} from 'react';
import { Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import CustomAnchor from '../../components/CustomAnchor'

import playerJson from './varsity_players.json'
import jv_playerJson from './junior_payers.json'
import soph_playerJson from './soph_players.json'

import varsity_team from '../../assets/players/vars_team.jpeg'

function Players (){
    return(<div style={{textAlign: 'center',padding:"20px"}}>
        <CustomAnchor id="#varsity"> Varsity </CustomAnchor>
        <img src={varsity_team} alt="Varsity Basketball Team" style={{width:'100%'}}/>
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={require('../../assets/'+player.url)} name={player.name} info={player.info} num={player.number}/>)})}
        </Wrap>
        <CustomAnchor id="#jv"> Junior Varsity </CustomAnchor>
        <Wrap spacing='30px' justify='center'>
        {jv_playerJson.map((player)=>(
            <div key={Math.random()} style={{position:'relative'}}>
                <p style={{fontWeight:600,fontSize:'18px'}}>{player.name}</p>
                <div>{player.info.map((inf)=>(<p key={Math.random()}>{inf}</p>))}</div>
                <p style={{position:'absolute',right:'5px',top:'10%',fontSize:'48px',color:'blue',fontWeight:900,opacity:.2}}>{player.number}</p>
            </div>
        ))}
        </Wrap>
        <CustomAnchor id="#soph"> Sophomore </CustomAnchor>
        <Wrap spacing='30px' justify='center'>
        {soph_playerJson.map((player)=>(
            <div key={Math.random()} style={{position:'relative'}}>
                <p style={{fontWeight:600,fontSize:'18px'}}>{player.name}</p>
                <div>{player.info.map((inf)=>(<p key={Math.random()}>{inf}</p>))}</div>
                <p style={{position:'absolute',right:'5px',top:'10%',fontSize:'48px',color:'blue',fontWeight:900,opacity:.2}}>{player.number}</p>
            </div>
        ))}
        </Wrap>
        
    </div>)
}
export default Players