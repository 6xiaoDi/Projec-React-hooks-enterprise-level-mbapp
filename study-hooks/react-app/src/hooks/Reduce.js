import React, {useReducer, createContext, useContext} from 'react';

let myContext = createContext();

// state 状态 action 操作动作
function reduce(state = 0,action){
    switch(action.type){
        case "add":
            state += 1
            break;
        case "minus":
            state -= 1
            break;        
    }
    return state;
}

function Child(){
    let {state,dispatch} = useContext(myContext);
    return (
        <div>
            {/*减法*/}
            <button
                onClick={()=>{
                    dispatch({
                        type: "minus"
                    });
                }}
            >-</button>
            <span> {state}  </span>
            {/*加法*/}
            <button
                onClick = {()=>{
                    dispatch({
                        type: "add"
                    });
                }}
            >+</button>
        </div>
    )
}

function Reduce(){
    // 第一个参数reduce，第二个参数是state初始值
    let [state,dispatch] = useReducer(reduce,0);
    return (
        <myContext.Provider value = {{
            state,
            dispatch
        }}>
            <Child />
        </myContext.Provider>
    );
}

export default Reduce;
