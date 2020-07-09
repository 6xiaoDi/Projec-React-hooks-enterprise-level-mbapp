import React, {useState, useEffect } from 'react';

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
    return (<input
        type="text"
        value = {text}
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
function Effect(){
    const [text,setText] = useState("这是今天的课程");
    const [edit,setEdit] = useState(false);
    // useEffect(()=>{
    //     console.log("组件更新了");
    // },[edit,text]);
    // useEffect(()=>{
    //     console.log("组件更新了");
    // },[edit]);
    useEffect(()=>{
        console.log("组件更新了");
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


export default Effect;
