import React,{useState,useEffect,useRef} from 'react';
import Header from "./header";
import Menu from "./menu";
import {useInnerHeight} from "../hook/index";
import BScroll from "better-scroll";

export default function Frame(props){
    const [showMenu,setShowMenu] = useState(false); // 菜单的展开与收缩
    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let pageScroll = null;
    function changeShow() {
        setShowMenu(!showMenu);
    }

    function menuHide() {
        setShowMenu(false);
    }

    useEffect (()=> {
        console.log(wrap);
        pageScroll = new BScroll(wrap.current);
    },[]);
    return ( 
        <div>
            <Header
                changeShow = {changeShow}
            />
            <Menu
                menuHide = {menuHide}
            />
            <div
                id="main"
                style={{
                    transform:`translateX(${showMenu?4.5:0}rem)`,
                    height:innerH
                }}
                onTouchStart={()=>{
                    menuHide();
                }}
            >
                <div
                    className="pageWrap"
                    ref = {wrap}
                >
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
} 