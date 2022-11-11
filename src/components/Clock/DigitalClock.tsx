import React from "react";
import {ClockType} from "./Clock";

export let DigitalClock: React.FC<ClockType> = ({date}) => {
    return (
        <div>
            <div style={{fontSize: '22px', fontWeight: 'bold'}}>{date.getHours()}
                :{date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
                :{date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}</div>
        </div>
    )
}