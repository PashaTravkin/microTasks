import React, {ChangeEvent, useRef, useState} from "react";

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <div>
        <h2>UncontrolledInput:</h2>
        <input value={value} onChange={onChangeHandler}/> {value}
    </div>
};

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const gettingValue = useRef<HTMLInputElement>(null)
    const onClickHandler =()=>{
        const el = gettingValue.current as HTMLInputElement
        setValue(el.value)
    }
    return <div>
        <h2>UncontrolledInput 2:</h2>
        <input ref={gettingValue}/>
        <button onClick={onClickHandler}>CHANGE VALUE</button>
        ---change Value: {value}
    </div>
};