import React, {useReducer} from 'react';

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

function Reduce(){
    // 第一个参数reduce，第二个参数是函数初始值
    console.log(useReducer(reduce,0))
    return (
        <div>

        </div>
    );
}

export default Reduce;
