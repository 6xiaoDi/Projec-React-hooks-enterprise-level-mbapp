import React,{Component,useState} from "react";

class Effect extends Component{
   state = {
        text: "这是今天的进度",
        edit: false  // 是否显示编辑状态
   }
   setEditState=(edit)=>{
        this.setState({
            edit
        });
   }

   render(){
      let {text,edit} = this.state;
      return (<div>
            {edit?
                <input
                    type="text"
                    value={text}
                    onChange={
                        (e) => {
                            this.setState({
                            text:e.target.value
                            })
                        }
                    }
                    onBlur={
                        ()=>{
                            this.setState({
                                edit:false
                            })
                        }
                    }
                />
                :
                <div >{text}  <a onClick={()=>{
                    this.setState({
                        edit: true
                    })
                }}>编辑</a>
                </div>
            }
      </div>);
   }
}

export default Effect;