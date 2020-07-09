import React, {useState, useEffect, useRef } from 'react';
import "./index.css"
import Header from "./header";
import Main from  "./main"
import Footer from "./footer";

function Todos(){

    return (<div id="todoapp">
        <Header/>
        <Main/>
        <Footer/>
    </div>);
}


export default Todos;
