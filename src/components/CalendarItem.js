import React from "react";

var MIDNIGHT = new Date();
MIDNIGHT.setHours(24,0,0,0)

function isAllDay(d){
    if (d.toTimeString()===MIDNIGHT.toTimeString()) return true
    return false
}

function CalendarItem(props){
    let date = new Date(props.date)
    let title = props.title
    let info = props.info
    let type = props.type

    let color = type==='pghs'?'blue':'gold'
    return(
        <div style={{padding:'12px',paddingLeft:"80px",position:"relative"}}>
            <p><b>{title}</b> {!isAllDay(date)?": "+date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }):''}</p>
            <p>{info}</p>
            <div style={{height:"12px",width:"12px",backgroundColor:color,borderRadius:"6px",position:"absolute",left:'60px',bottom:'50%'}}/>
        </div>
    )
}
export default CalendarItem