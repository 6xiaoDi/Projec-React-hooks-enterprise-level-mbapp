import React,{Component,useState} from "react";

function State() {
    console.log(useState({
        name:"leo",
        age: 18
    }));
    return (<div>
        姓名:,<br />
        年龄:,<br />
        <button onClick={()=>{
        }}>长大一岁</button>
    </div>);
}

export default State;