import React, {Component, createContext} from 'react';

let myContext = createContext();

class Child extends Component {
    // 不用Consumer传递数据，在类式组件中可以申明一个静态属性contextType给它赋值后，其实它就是类式组件中context属性
    static contextType = myContext;
    render(){
        console.log(this.context);
        return (
            <strong>这是祖先传下来的宝贝: {this.context.info}</strong>
        )
    }
}


class Parent extends Component {
    render(){
        return (<p>
            <Child/>
        </p>);
    }
}

class Context extends Component {
   render(){
       return <div>
           <myContext.Provider value={{info :"今天天气不错"}}>
               <Parent />
           </myContext.Provider>
       </div>
   }
}

export default Context;
