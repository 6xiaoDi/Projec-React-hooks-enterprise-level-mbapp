import React,{Component} from "react";

class State extends Component{
    state = {
        name:'Leo',
        age:18
    }

    render(){
        let {name,age} = this.state;
        return(
            <div>
                姓名：{name},<br/>
                年龄: {age}
            </div>
        );
    }
}

export default State;