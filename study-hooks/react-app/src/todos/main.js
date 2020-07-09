import React, {useState, useEffect, useRef } from 'react';

function Li(props){
    let {inner} = props;
    return (
        <li className={inner.completed ? "done" : ""}>
            <div className="view" >
                <input
                    className="toggle"
                    type="checkbox"
                    checked={inner.completed}
                />
                <label>{inner.val}</label>
                <a className="destroy">

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
                    />
                })
            }
        </ul>
    </section>
    );
}


export default Mian;
