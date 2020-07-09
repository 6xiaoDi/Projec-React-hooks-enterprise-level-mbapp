import React, {useState, useEffect, useRef } from 'react';

function Txt(props){
    let {text,setEdit} = props;
    return (
        <div>{text}<a onClick={()=>{
            setEdit(true);
        }}>编辑</a></div>
    );
}
function Edit(props){
    const {text,setText,setEdit} = props;
    let t = useRef(null);

    function toScroll(){
        let y = window.scrollY;
        t.current.style.transform = `translateY(${y}px)`;
        console.log(y);
    }
    useEffect(()=>{
        window.addEventListener("scroll",toScroll);
        t.current.select();
        return ()=>{
            window.removeEventListener("scroll",toScroll);
        }
    },[])
    return (<input
        type="text"
        value = {text}
        id = "txt"
        ref = {t}
        onChange = {
            (e)=>{
                setText(e.target.value);
            }
        }
        onBlur = {
            ()=>{
                setEdit(false)
            }
        }
    />)
}

function Ref(){
    const [nub,setNub] = useState(0);
    const prev = useRef(nub);
    useEffect(()=>{
        prev.current = nub;
    });
    return (<div>
        <p>当前值: {nub}</p>
        <p>上次值: {prev.current}</p>
        <button onClick={()=>{
            setNub(nub + 1);
        }}>递增</button>
    </div>);
}


export default Ref;
