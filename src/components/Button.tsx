import React from "react";

type buttonPropsType ={
    name: string,
    collBack:()=> void,

}

export const Button = (props:buttonPropsType) => {
let onClickButtonHandler =()=>{
    props.collBack()
}
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};