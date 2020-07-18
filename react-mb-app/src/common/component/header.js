import React,{useEffect,useState} from 'react';
import {useBack} from "../hook/index";
import {Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import isLogin from "../../store/action/isLogin";
import logout from "../../store/action/logout";



function Header(props){
    const back = useBack(props.history);
    const path = props.location.pathname;
    const {user,setShowMenu} =  props;
    const [isBtnShow,changeShow] = useState(false);
    // 第二个参数传空数组即副作用钩子意思是在组件挂载后执行。
    useEffect(()=>{
        props.dispatch(isLogin());
    },[]);

    function getUser(){
        if(path === "/login"){
            return ""
        }
        // 判断是否登录了
        if(user){
            return (<span className="header-btn-right">
                <span
                    className="header-user"
                >{user}</span>
                <span
                    className="header-logout-btn"
                    style={{
                        display:isBtnShow?"block":"none"
                    }}
                    onClick={()=>{
                        props.dispatch(logout());
                    }}
                >退出</span>
            </span>);
        }
        return <Link className="user" to="/login" />;
    }

    return (
        <header id="header">
            <nav className="menu">
                {/* 返回按钮 */}
                {path === "/login" ?
                    <a
                    className="header-btn-left iconfont icon-back"
                    onClick={()=>{
                        back();
                    }}
                    >
                    </a>
                    :
                    <a
                    className="header-btn-left iconfont icon-hycaidan"
                    onClick={()=>{
                        changeShow();
                    }}
                    >
                    </a>}
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser()}
        </header>
    );
}
export default connect(state=>{
    return {user:state.getUser};
})(withRouter(Header));