import React, {useState} from 'react';

function useCount(init){
    let [count,setCount] = useState(init);
    function add(){
        count++;
        setCount(count);
    }
    function minus(){
        count--;
        setCount(count);
    }
    return [count,add,minus,setCount];
}

function Hook(){
    let [count,add,minus,setCount] = useCount(0);
    return (<div>
        <button
            onClick={()=>{
                minus();
            }}
        >-</button>
        <span> {count}  </span>
        <button
            onClick = {()=>{
                add();
            }}
        >+</button>
        <button onClick={()=>{
            setCount(5);
        }}>自定义设置</button>
    </div>);
}

export default Hook;
