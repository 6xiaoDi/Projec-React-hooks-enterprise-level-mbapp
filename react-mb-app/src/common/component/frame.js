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
    let {pullUp,getData} = props;
    function changeShow() {
        setShowMenu(!showMenu);
    }

    function menuHide() {
        setShowMenu(false);
    }

    useEffect (()=> {
        pageScroll = new BScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/, // 注意大写
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp?{threshold:200}:false  // 是否支持上滑加载
        });
        pageScroll.on("pullingUp",()=>{
            console.log("上滑加载更多");
            getData().then(res => {
                if(res){
                    pageScroll.finishPullUp(); // 当前次上滑加载执行完毕，可执行下一次了
                    pageScroll.refresh(); // 立马刷新
                } else {
                    pageScroll.closePullUp();  // 关闭上滑加载
                }
            } )
        })
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