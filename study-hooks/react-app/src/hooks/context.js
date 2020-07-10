import React, {Component} from 'react';

class Child extends Component {
    render(){
        return (
            <strong>这是祖先传下来的宝贝: {this.props.info}</strong>
        )
    }
}

class Parent extends Component {
    render(){
        return (<p>
            <Child info={this.props.info}/>
        </p>);
    }
}

class Context extends Component {
   render(){
       return <div>
           <Parent
               info ={"今天天气不错！"}
           />
       </div>
   }
}

export default Context;
