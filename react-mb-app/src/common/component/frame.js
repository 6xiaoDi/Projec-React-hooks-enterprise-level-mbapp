import React,{useState,useEffect,useRef} from 'react';
import {useInnerHeight} from "../hook/index";
import BScroll from "better-scroll";

export default function Frame(props){
    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let pageScroll = null;
    let {pullUp,getData} = props;

    useEffect (()=> {
        window.pageScroll = new BScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/, // 注意大写
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp?{threshold:200}:false  // 是否支持上滑加载
        });
        window.pageScroll.on("pullingUp",()=>{
            getData().then(res => {
                if(res){
                    window.pageScroll.finishPullUp(); // 当前次上滑加载执行完毕，可执行下一次了
                    window.pageScroll.refresh(); // 立马刷新
                } else {
                    window.pageScroll.closePullUp();  // 关闭上滑加载
                }
            } )
        })
        return ()=>{
            window.pageScroll = null;
        }
    },[]);
    return (
        <div
            id="main"
            style={{
                height: innerH
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
    );
} 