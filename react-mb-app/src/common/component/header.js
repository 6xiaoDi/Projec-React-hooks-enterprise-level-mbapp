import React from 'react';
import http from "../../store/action/http"

function Header(props){
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