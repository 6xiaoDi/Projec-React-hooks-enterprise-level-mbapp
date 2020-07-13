import React from 'react';
import {Link} from "react-router-dom";

function Header(props){
    return (
        <header id="header">
            <nav className="menu">

            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login"/>
        </header>
    );
} 
export default Header;