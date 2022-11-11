import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";
import {cleanup} from "@testing-library/react";

const Clock = () => {

    let [date, setDate] = useState(new Date())
    let [digitalClock, setDigitalClock] = useState(true)


    useEffect(() => {
           const setIntervalID = setInterval(() => {
                setDate(new Date())
            }, 1000)
        return ()=>{
               clearInterval(setIntervalID)
        }
        }, []
    )

    return (
        <div>
            <br/>
            <button onClick={() => setDigitalClock(!digitalClock)}>{digitalClock?'Analog Clock':'Digital    Clock'}</button>
            {digitalClock
                ? <DigitalClock date={date}/>
                : <AnalogClock date={date}/>
            }


        </div>
    );
};

export type ClockType = {
    date: Date
}


export default Clock;