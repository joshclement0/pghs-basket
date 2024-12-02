import {React,useEffect,useState,useContext} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import './index.css'

import CalendarItem from "../../components/CalendarItem";
import { useParams } from "react-router-dom";
import routeContext from "../util/routecontext";
import { getData } from "../util/firbaseconfig";
import { useQuery } from "@tanstack/react-query";

let datesToAddContentTo = []
let datesToAddGoldContentTO= []
function isSameDay(date1, date2) {
  if(
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  ) return true
  else return false
}

function MyCalendar(){
  const [value, onChange] = useState(new Date());
  const [games, setGames] = useState({})
  const sport = useParams("sport").sport
  const { setSport } = useContext(routeContext)
  setSport(sport)

  const importgames = useQuery(
    ["calendar"], 
    ()=>getData(`${process.env.REACT_APP_TAG}/${sport}/calendar`),
    {staleTime: 1.8e+6,cacheTime:Infinity}
  )
  useEffect(() => {
    if (importgames.isFetched){
      let allgames = importgames.data
      setGames(allgames)
      datesToAddContentTo = allgames.filter(g => g.type==='pghs').map(g => new Date(g.date));
      datesToAddGoldContentTO= allgames.filter(g => g.type==='spon').map(g => new Date(g.date))
      onChange(new Date())
    }
  }, [importgames.isFetched, importgames.data]);
      
    function add({ date, view }) {
        // Add class to tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of dates to add class to
            if (datesToAddGoldContentTO.find(dDate => isSameDay(dDate, date)) && datesToAddContentTo.find(dDate => isSameDay(dDate, date))){
                return (<div style={{position:'relative'}}>
                    <div className="SponsPresent" style={{position:'absolute',right:'24px'}} />
                    <div className="GamePresent"  style={{position:'absolute',right:'26px'}}/></div>)
            }
            if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
                return (<div className='GamePresent'></div>);
            }
            if (datesToAddGoldContentTO.find(dDate => isSameDay(dDate, date))){
                return (<div className="SponsPresent"/>)
            }
            
        }
    }
    function handleChange(e){
        onChange(e)
    }
    return (
        <div>
            <div style={{position:'absolute',left:"50%",transform:'translate(-50%,10px)'}}>
            <Calendar  onChange={handleChange} value={value} tileContent={add}/>
            </div>
            <div style={{position:'absolute',left:"50%",top:'400px',transform:'translate(-50%,10px)',width: '100%'}}>
                <h1 style={{fontSize:'24px',paddingLeft:'100px'}}>{value.toDateString()}</h1>
                <div style={{overflow:"auto",height:'270px'}}>
                    {games.length>0?games.filter((game) => {if (isSameDay(new Date(game.date),value)){return true} else return false}).map((game)=>{ return (
                        <CalendarItem key={Math.random()} {...game}/>
                    )}):''}
                    <div style={{height:'105px'}} />
                </div>
            </div>
        </div>
    );
}
export default MyCalendar