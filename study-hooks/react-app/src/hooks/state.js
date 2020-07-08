import React,{Component,useState} from "react";

function State() {
    const [state,setAge] = useState({
        name:"leo",
        age: 18
    });
    let {name,age} = state;
    return (<div>
        姓名:{name},<br />
        年龄:{age},<br />
        <button onClick={()=>{
            setAge({
                ...state,
                age: age + 1
            });
        }}>长大一岁</button>
    </div>);
}

export default State;