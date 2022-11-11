import React from "react";

export function Reduse() {

    let nums =[10, 20, 30, 125]
    console.log(nums.reduce((acc, al)=>{
        acc = acc+al
        return acc
    }))
    console.log(nums.reduce((acc, el)=> acc>el ? acc : el))

    let student = [
        {
            id: 4,
            name: 'Vasia',
            age: 23,
            isMarried: true,
            scores: 100
        },
        {
            id: 5,
            name: 'Pasha',
            age: 37,
            isMarried: true,
            scores: 200
        },
        {
            id: 6,
            name: 'Dasha',
            age: 29,
            isMarried: false,
            scores: 11
        }
    ]
    console.log(student.reduce((acc, el)=>acc.scores>el.scores?acc:el))
    return <div>


    </div>
}