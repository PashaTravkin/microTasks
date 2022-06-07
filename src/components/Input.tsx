import React, {ChangeEvent, useState} from "react";

type inputPropsType = {
    title: string,
    setTitle: (value: string) => void
}

export const Input = (props: inputPropsType) => {
    let onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};