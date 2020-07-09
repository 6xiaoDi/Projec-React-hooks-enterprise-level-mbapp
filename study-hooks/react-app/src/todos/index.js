import React, {useState, useEffect, useRef } from 'react';
import "./index.css"
import Header from "./header";
import Main from  "./main"
import Footer from "./footer";

function Todos(){
    // 用数组来保存所有TODO状态
    const [todos,setTodos] = useState([]);

    function addTodo(val){
        console.log();
        setTodos([...todos,{
            id: Date.now(), // 实际工作中后端提供
            val,
            completed: false // 选中状态
        }]);
    }

    console.log(todos);
    return (<div id="todoapp">
        <Header addTodo = {addTodo}/>
        <Main todos={todos}/>
        <Footer/>
    </div>);
}


export default Todos;
