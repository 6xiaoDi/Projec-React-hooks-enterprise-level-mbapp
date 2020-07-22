import React,{useState} from "react";
import {connect} from "react-redux";
import putMessage from "../../store/action/putMessage";
function Message(props){
    let {show,setShow,dispatch,id,getUser} = props;
    let [info,setInfo] = useState("");  // 使其受控组件
    let [put,setPut] = useState(false); // 是否在提交中
    return <div 
        className="message_wrap"
        style={{
            transform: `translateY(${show ? 0 : "100%" })`
        }}
    >
        <textarea 
            value={info}
            onChange={(e)=>{
                setInfo(e.target.value); // 变为受控组件
            }}
        />
        {put ?
        <footer className="miiapv_footer put">
            评论提交中……
        </footer>
        :
        <footer className="miiapv_footer"
            onClick={()=>{
                if(!info.trim()){
                    alert("请输入内容");
                    return ;
                }

                dispatch(putMessage({
                    article_id:id,
                    content:info
                })).then(()=>{
                    // 请求完成：1、提交完成状态  2、置空评论输入框  3、隐藏输入框
                    setPut(false);
                    setInfo("");
                    setShow(false);
                    // 添加评论信息（前端更新更省性能，就不再重新获取后台的数据了）
                    dispatch({
                        type: "MESSAGE_ADD",
                        messageList: {
                            content: info,
                            create_time: Date.now(),
                            username: getUser
                        }
                    })
                });
                // 异步处理请求中等待
                setPut(true);
            }}
        >发表评论</footer>}
    </div>;
}
export default connect(state=>state)(Message); 