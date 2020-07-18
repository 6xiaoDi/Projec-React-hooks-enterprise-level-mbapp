import React,{useState,useEffect,useRef} from 'react';
import Header from "./header";
import Menu from "./menu";

export default function Frame(props){
    const [showMenu,setShowMenu] = useState(false);

    function changeShow() {
        setShowMenu(!showMenu);
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
                    transform:`translateX(${showMenu?4.5:0})`
                }}
            >
                {props.children}
            </div>
        </div>
    );
} 