import React, {Component, createContext} from 'react';

let {Provider,Consumer} = createContext();

class Child extends Component {
    render(){
        return (
                <Consumer>
                    {(context)=>{
                        console.log(context);
                        return <strong>这是祖先传下来的宝贝:{context.info} </strong>
                    }}
                 </Consumer>
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
           <Provider value={{info :"今天天气不错"}}>
               <Parent />
           </Provider>
       </div>
   }
}

export default Context;
