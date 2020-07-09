import React, {useState, useEffect, useRef } from 'react';
import "./index.css"
import Header from "./header";
import Main from  "./main"
import Footer from "./footer";

function Todos(){
    // 用数组来保存所有TODO状态
    const [todos,setTodos] = useState([]);

    function addTodo(val){
        console.log(val);
    }


    return (<div id="todoapp">
        <Header addTodo = {addTodo}/>
        <Main/>
        <Footer/>
    </div>);
}


export default Todos;
