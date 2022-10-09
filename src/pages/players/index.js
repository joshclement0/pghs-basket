import {React,useEffect,useState,useContext} from "react";
import { Wrap} from '@chakra-ui/react'
import Person from '../../components/Person'
import CustomAnchor from '../../components/CustomAnchor'
import { useParams } from "react-router-dom";
import routeContext from "../util/routecontext";
import {getImageURL,getData} from '../util/firbaseconfig'

function Players (props){
    const [teamImages, setImages] = useState(['','',''])
    const [playerJson, setVarsity] = useState([]);
    const [jv_playerJson, setJV] = useState([]);
    const [soph_playerJson, setSoph] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    let hash = props.hash
    setSport(sport)
    useEffect(() => {
        const fetchData = async () => {
            let importAll = await getData("pghs/"+sport+"/players")
            setVarsity(importAll.varsity??{})
            setJV(importAll.jv??{})
            setSoph(importAll.soph??{})

            let varsImgUrl = await getImageURL(sport+'/players/vars_team.jpeg')
            let juniorImgUrl = await getImageURL(sport+'/players/junior_team.jpeg')
            let sophImgUrl = await getImageURL(sport+'/players/soph_team.jpeg')
            setImages([varsImgUrl,juniorImgUrl,sophImgUrl])
            setTimeout(() => {
                // const id = hash.replace('#', '');
                const id = hash
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView();
                }
              }, 1500);
        }
        fetchData()
      }, []);
    return(<div style={{textAlign: 'center',padding:"20px"}}>
        <CustomAnchor id="#varsity"> Varsity </CustomAnchor>
        <img src={teamImages[0]} alt="Varsity Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px'}}/>
        <Wrap spacing='30px' justify='center'>
        {playerJson.map((player) => {return ( 
            <Person key={Math.random()} src={sport+'/players/'+player.url} name={player.name} info={player.info} num={player.number}/>)})}
        </Wrap>
        <CustomAnchor id="#jv"> Junior Varsity </CustomAnchor>
        <img src={teamImages[1]} alt="Junior Varsity Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px'}}/>
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
        <img src={teamImages[2]} alt="Sophmore Basketball Team" style={{width:'100%',marginTop:'8px',marginBottom:'8px'}}/>
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