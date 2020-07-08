import React,{Component} from "react";

class State extends Component{
    state = {
        name:'Leo',
        age:18
    }

    setAge=()=>{
        let {age} = this.state;
        this.setState(
            {
                age: ++age
            }
        )
    }

    render(){
        let {name,age} = this.state;
        return(
            <div>
                姓名：{name},<br/>
                年龄: {age},<br/>
                <button onClick={this.setAge}>长大一岁</button>
            </div>
        );
    }
}

export default State;