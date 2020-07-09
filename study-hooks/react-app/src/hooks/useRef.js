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
        // 修改位移值相对于滚动条进行位移
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
        ref={t}
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
    const [text,setText] = useState("这是今天的课程");
    const [edit,setEdit] = useState(false);
    useEffect(()=>{
        console.log("Effect组件更新了");
    },[]);
    return (<div>
        {edit?
            <Edit
                text = {text}
                setText = {setText}
                setEdit = {setEdit}
            />
            :
            <Txt text={text} setEdit={setEdit} />
        }
        {[...(".".repeat(100))].map((item,index)=>{
            return <div key={index}>页面内容填充</div>
        })}
    </div>);
}


export default Ref;
