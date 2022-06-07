import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }
    let collBackButtonHandler = () => {
        addMessage(title)
    }


    return (
        <div className={'App'}>
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} collBack={collBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message} </div>
                )
            })}
        </div>
    )

}

export default App;
