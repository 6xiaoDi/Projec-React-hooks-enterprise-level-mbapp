import React,{Component,useState} from "react";

function State() {
    const [name,setName] = useState("leo");
    const [age,setAge] = useState(18)
    return (<div>
        姓名:{name},<br />
        年龄:{age},<br />
        <button onClick={()=>{
            setAge(age+1);
        }}>长大一岁</button>
    </div>);
}

export default State;