import { React,useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import routeContext from "../util/routecontext";
import { getImageURL, getData } from '../util/firbaseconfig'
import { useQuery } from '@tanstack/react-query'
import Team from "./team";

function Players (props){
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    const {isFetched, data} = useQuery(
        [ sport, "players"],
        () => getData(`${process.env.REACT_APP_TAG}/${sport}/players`),
        {staleTime: 1,cacheTime:0}
    )

    let hash = props.hash
    // const hash = team.name.replace(/\s+/g, '');
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
        console.log(sport, data)
    },[data, sport])

    return(<div style={{textAlign: 'center',padding:"20px"}}>
        {isFetched && data && data.length && data.map(team=>(
            <Team team={team} sport={sport} />
        ))}
    </div>)
}
export default Players