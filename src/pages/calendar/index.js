import {React,useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import './index.css'

import CalendarItem from "../../components/CalendarItem";
import games from "./calendar.json"

const datesToAddContentTo = games.filter(g=>g.type==='pghs').map(g=>new Date(g.date));
const datesToAddGoldContentTO= games.filter(g=>g.type==='spon').map(g=>new Date(g.date))
function isSameDay(date1, date2) {
    if(
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    ) return true
    else return false
}
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
console.log(datesToAddGoldContentTO,datesToAddContentTo)
function MyCalendar(){
    const [value, onChange] = useState(new Date());
    function handleChange(e){
        console.log(e)
        onChange(e)
    }
    return (
        <div>
            <div style={{position:'absolute',left:"50%",transform:'translate(-50%,10px)'}}>
            <Calendar  onChange={handleChange} value={value} tileContent={add}/>
            </div>
            <div style={{position:'absolute',left:"50%",top:'400px',transform:'translate(-50%,10px)',width: '100%',
                    padding: '10%px'}}>
                <h1 style={{fontSize:'24px',paddingLeft:'100px'}}>{value.toDateString()}</h1>
                {games.filter((game) => {if (isSameDay(new Date(game.date),value)){return true} else return false}).map((game)=>{ return (
                    <CalendarItem {...game}/>
                )})
                }
            </div>
        </div>
    );
}
export default MyCalendar