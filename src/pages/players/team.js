import { React } from "react";
import { Wrap } from '@chakra-ui/react'
import Person from '../../components/Person'
import CustomAnchor from '../../components/CustomAnchor'
import { getImageURL } from '../util/firbaseconfig'
import { useQuery } from '@tanstack/react-query'

function Team (props) {
    const team = props.team
    
    const teamImg = useQuery([props.sport, "players", team.name, 'img'], ()=>getImageURL(team.url))
    const hash = team.name.replace(/\s+/g, '');

    return(<div style={{textAlign: 'center',padding:"20px"}}>
      <CustomAnchor id={`#${hash}`}> {team.name} </CustomAnchor>
      { !team.url || teamImg.isLoading || !teamImg.data ? '' :
          <img src={teamImg.data} alt={team.name+' pic'} style={{width:'100%',marginTop:'8px',marginBottom:'8px',maxWidth:'700px',marginRight:"auto",marginLeft: 'auto'}}/>
      }
      <Wrap spacing='30px' justify='center' marginTop='12px' marginBottom='24px'>
      {team.items?.map((player) => { 
        if (player.url)
          return <Person 
            key={Math.random()} 
            src={props.sport+'/players/'+player.url} 
            name={player.name} 
            info={player.info} 
            num={player.number}/>
        else return <div key={Math.random()} style={{position:'relative'}}>
            <p style={{fontWeight:600,fontSize:'18px'}}> {player.name} </p>
            <div>{player.info.map((inf)=>(<p key={Math.random()}>{inf}</p>))}</div>
            <p style={{position:'absolute',right:'5px',top:'10%',fontSize:'48px',color:'blue',fontWeight:900,opacity:.2}}>{player.number}</p>
          </div>
      })}
      </Wrap>
    </div>)
}
export default Team