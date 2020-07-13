import React from 'react';
import {useBack} from "../hook/index";
import {Link,withRouter} from "react-router-dom";

function Header(props){
    const back = useBack(props.history);
    const path = props.location.pathname;
    return (
        <header id="header">
            <nav className="menu">
                {/* 返回按钮 */}
                {path === "/login" ? <a
                    className="header-btn-left iconfont icon-back"
                    onClick={()=>{
                        back();
                    }}
                ></a> : <a
                    className="header-btn-left iconfont icon-hycaidan"
                    onClick={()=>{
                    }}
                ></a>}
            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login"/>
        </header>
    );
} 
export default withRouter(Header);