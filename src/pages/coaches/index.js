import { React,useEffect,useState,useContext} from 'react';
import {Wrap} from '@chakra-ui/react'

import Person from '../../components/Person'
import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import routeContext from '../util/routecontext';
import CustomAnchor from '../../components/CustomAnchor';

import {getData} from "../util/firbaseconfig"

function CoachesPage (props){
    const [varsityCoachJson, setVarsity] = useState([]);
    const [jvCoachJson, setJV] = useState([]);
    const [sophCoachJson, setSoph] = useState([]);
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    let hash = props.hash
    setSport(sport)
    const allCoachesJson = useQuery(["pghs", sport, "coaches"], () => getData("pghs/"+sport+"/coaches"),{staleTime: 1.8e+6,cacheTime:Infinity})

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
        if (allCoachesJson.isFetched && allCoachesJson.data){
            setVarsity(allCoachesJson.data.varsity ?? {})
            setJV(allCoachesJson.data.jv ?? {})
            setSoph(allCoachesJson.data.soph ?? {})
        }
    },[allCoachesJson.isFetched,allCoachesJson.data])
    return(<div style={{textAlign: 'center',padding:"20px"}}>
        <CustomAnchor id="#varsity"> Varsity </CustomAnchor>
        <Wrap spacing='30px' justify='center'>
        {varsityCoachJson.map((player) => {return ( 
            <Person key={Math.random()} src={sport+'/coaches/'+player.url} name={player.name} info={player.info}/>)})}
        </Wrap>
        <CustomAnchor id="#jv"> Junior Varsity </CustomAnchor>
        <Wrap spacing='30px' justify='center'>
        {jvCoachJson.map((player)=>(
            <Person key={Math.random()} src={sport+'/coaches/'+player.url} name={player.name} info={player.info}/>
        ))}
        </Wrap>
        { sophCoachJson && <>
            <CustomAnchor id="#soph"> Sophomore </CustomAnchor>
            <Wrap spacing='30px' justify='center'>
            {sophCoachJson.map((player)=>(
                <Person key={Math.random()} src={sport+'/coaches/'+player.url} name={player.name} info={player.info}/>
            ))}
            </Wrap>
        </>}
        
    </div>)
}
export default CoachesPage