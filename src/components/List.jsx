import React from "react";

let List = ()=>{
    return <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>Iphone</li>
        <li>Windows Phone</li>
    </ul>
}


let Manuf = ({names})=>{
    return (<ul>
        <li>{names}</li>
    </ul>)
}

export  {List,Manuf};