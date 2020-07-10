import React, {useState} from 'react';
function Header(props){
    const [todo,setTodo] = useState("");
    let {addTodo} = props;
    return (<header>
            <h1>Todos</h1>
            <input
                id="new-todo"
                type="text"
                placeholder="What needs to be done?"
                value={todo}
                onChange={(e) => {
                        setTodo(e.target.value);
                    }
                }
                autoComplete='off'
                onKeyDown={(e) => {  // 回车事件
                    // 判断如果是回车
                    if (e.keyCode === 13){
                        if (!todo.trim()){
                            alert("输入内容不能为空！");
                            e.target.focus();
                        }else{
                            addTodo(todo);
                            // 清空
                            setTodo('');
                        }
                    }
                }}
            />
         </header>);
}


export default Header;
