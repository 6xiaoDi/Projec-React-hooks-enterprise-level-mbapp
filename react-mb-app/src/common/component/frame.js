import React,{useState,useEffect,useRef} from 'react';
import Header from "./header";
import Menu from "./menu";

export default function Frame(props){
    const [showMenu,setShowMenu] = useState(false); // 菜单的展开与收缩

    function changeShow() {
        setShowMenu(!showMenu);
    }

    function menuHide() {
        setShowMenu(false);
    }

    return ( 
        <div>
            <Header
                changeShow = {changeShow}
            />
            <Menu/>
            <div
                id="main"
                style={{
                    transform:`translateX(${showMenu?4.5:0}rem)`
                }}
                onTouchStart={()=>{
                    menuHide();
                }}
            >
                {props.children}
            </div>
        </div>
    );
} 