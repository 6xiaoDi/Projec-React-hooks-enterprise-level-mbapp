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

    // 修养修改的对应项id
    function changeCompleted(id,completed){
        todos.forEach(item=>{
            if(id == item.id){
                item.completed = completed;
            }
        });
        // 不能直接传todos，因为对比的时候是浅层对比，还是认为同一个对象，是不会进行更新的，我们应该解构出来返回一个新数组
        setTodos([...todos]);
    }

    console.log(todos);
    return (<div id="todoapp">
        <Header addTodo = {addTodo}/>
        <Main
            todos={todos}
            changeCompleted={changeCompleted}
        />
        <Footer/>
    </div>);
}


export default Todos;
