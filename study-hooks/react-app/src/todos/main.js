import React, {useState, useEffect, useRef } from 'react';

function Li(props){
    let {inner,changeCompleted,remove} = props;
    let {id} = inner;
    return (
        <li className={inner.completed ? "done" : ""}>
            <div className="view" >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={inner.completed}
                    onChange={(e)=>{
                        changeCompleted(id,e.target.checked);
                    }}
                />
                <label>{inner.val}</label>
                <a className="destroy"
                   onClick={()=>{
                       remove(id);
                   }}
                >
                </a>
            </div>
            <input
                className="edit"
                type="text"
                value={inner.val}
            />
        </li>
    )
}

function Mian(props){
    let {todos} = props;
    return (
    <section
        id="main"
        style={{
            display: todos.length > 0 ? 'block' : 'none'
        }}
    >
        <input id="toggle-all" type="checkbox" checked=""/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
            {
                todos.map(item=> {
                    return <Li
                        key = {item.id}
                        inner = {item}
                        {...props}
                    />
                })
            }
        </ul>
    </section>
    );
}


export default Mian;
