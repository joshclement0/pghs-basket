import {React,useEffect,useState,useContext} from "react";
import { Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import CustomAnchor from '../../components/CustomAnchor'
import { useParams } from "react-router-dom";
import routeContext from "../util/routecontext";
import {getImageURL,getData} from '../util/firbaseconfig'
import {useQuery} from '@tanstack/react-query'

function Players (props){
    const [playerJson, setVarsity] = useState([]);
    const [jv_playerJson, setJV] = useState([]);
    const [soph_playerJson, setSoph] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    const allPlayerJson = useQuery(["pghs", sport, "players"], () => getData("pghs/"+sport+"/players"),{staleTime: 1.8e+6,cacheTime:Infinity})
    
    const varsImage = useQuery([sport, "players", 'vars_team.jpeg'], ()=>getImageURL(sport+'/players/vars_team.jpeg'))
    const jvImage = useQuery([sport, "players", 'jv_team.jpeg'], ()=>getImageURL(sport+'/players/junior_team.jpeg'))
    const sophImage = useQuery([sport, "players", 'soph_team.jpeg'], ()=>getImageURL(sport+'/players/soph_team.jpeg'))
    let hash = props.hash
    
    setSport(sport)
    useEffect(() => {
        setTimeout(() => {
            // const id = hash.replace('#', '');
            const id = hash
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
            }
        }, 1500);
    }, [hash]);
    useEffect(()=>{
        if (allPlayerJson.isFetched){
            setVarsity(allPlayerJson.data.varsity ?? {})
            setJV(allPlayerJson.data.jv ?? {})
            setSoph(allPlayerJson.data.soph ?? {})
        }
    },[allPlayerJson.isFetched,allPlayerJson.data])
    return(<div style={{textAlign: 'center',padding:"20px"}}>
        <CustomAnchor id="#varsity"> Varsity </CustomAnchor>
        {varsImage.isLoading? '':
            <img src={varsImage.data} alt="Varsity Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px',maxWidth:'700px',marginRight:"auto",marginLeft: 'auto'}}/>
        }
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={sport+'/players/'+player.url} name={player.name} info={player.info} num={player.number}/>)})}
        </Wrap>
        <br />
        <br />
        <CustomAnchor id="#jv"> Junior Varsity </CustomAnchor>
        <br />
        {jvImage.isLoading || jvImage.isError ? '':
            <img src={jvImage.data} alt="Junior Varsity Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px',maxWidth:'700px',marginRight:"auto",marginLeft: 'auto'}}/>
        }
        <Wrap spacing='30px' justify='center'>
        {jv_playerJson.map((player)=>(
            <div key={Math.random()} style={{position:'relative'}}>
                <p style={{fontWeight:600,fontSize:'18px'}}>{player.name}</p>
                <div>{player.info.map((inf)=>(<p key={Math.random()}>{inf}</p>))}</div>
                <p style={{position:'absolute',right:'5px',top:'10%',fontSize:'48px',color:'blue',fontWeight:900,opacity:.2}}>{player.number}</p>
            </div>
        ))}
        </Wrap>
        <br />
        <br />
        <CustomAnchor id="#soph"> Sophomore </CustomAnchor>
        <br/>
        {sophImage.isLoading || sophImage.isError? '':
            <img src={sophImage.data} alt="Sophmore Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px',maxWidth:'700px',marginRight:"auto",marginLeft: 'auto'}}/>
        }
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