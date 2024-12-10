import { React, useEffect, useContext} from 'react';

import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import routeContext from '../util/routecontext';

import {getData} from "../util/firbaseconfig"
import Team from './team';

function CoachesPage (props) {
    const sport = useParams("sport").sport
    const { setSport } = useContext(routeContext)
    let hash = props.hash
    setSport(sport)
    const {isFetched, data} = useQuery(
        [ sport, "coaches"], 
        () => getData(`${process.env.REACT_APP_TAG}/${sport}/coaches`),
        {staleTime: 1.8e+6, cacheTime:Infinity})

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

    return(<div style={{textAlign: 'center',padding:"20px"}}>
        {isFetched && data && data.length && data.map(team=>(
            <Team team={team} sport={sport} />
        ))} 
    </div>)
}
export default CoachesPage