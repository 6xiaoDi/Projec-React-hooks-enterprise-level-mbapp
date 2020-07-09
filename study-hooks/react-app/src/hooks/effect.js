import React, { Component, useState, useEffect } from 'react';

function Txt(props){
    let {text,setEdit} = props;
    useEffect(()=>{
        console.log("组件状态有变化了");
        return ()=>{
            console.log("txt组件卸载了");
        }
    });
    return (
        <div>{text}<a onClick={()=>{
            setEdit(true);
        }}>编辑</a></div>
    );
}
function Effect(){
    const [text,setText] = useState("这是今天的课程");
    const [edit,setEdit] = useState(false);
    // useEffect接收回调函数
    useEffect(()=>{
        console.log("状态有改变");
    });
    return (<div>
        {edit?
            <input
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
            />
            :
            <Txt text={text} setEdit={setEdit} />
        }
    </div>);
}

export default Effect;