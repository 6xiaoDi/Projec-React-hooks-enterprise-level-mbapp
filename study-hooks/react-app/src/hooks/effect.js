import React,{Component,useState} from "react";

function Txt(props){
    let {text,setEdit} = props;

    return (
        <div>{text}<a onClick={()=>{
            setEdit(true);
        }}>编辑</a></div>
    );
}

class Effect extends Component{
   state = {
        text: "这是今天的进度",
        edit: false  // 是否显示编辑状态
   }

   // 更新编辑方法
   setEditState=(edit)=>{
        this.setState({
            edit
        });
   }


   componentDidMount(){
       console.log("组件挂载完毕");
   }

   componentDidUpdate(){
       console.log("组件更新完毕");
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
                            this.setEditState(false);
                        }
                    }
                />
                :
                <Txt text={text} setEdit={this.setEditState}/>
            }
      </div>);
   }
}

export default Effect;