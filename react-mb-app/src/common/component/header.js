import React from 'react';
import http from "../../store/action/http"

function Header(props){
    // 第一个参数是请求地址，第二个是携带的数据
    http.post("/lecturer/lists?page=1&rows=20",
        {
            order:'desc',
            sort:"id",
            category_id: 1,
            recommend: 1
        }).then((res)=>{
        return res.data;
    }).then(data=>{console.log(data)})
    return (
        <header id="header">
            <nav className="menu">
                <a >导航</a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <a className="user"></a>
        </header>
    );
} 
export default Header;