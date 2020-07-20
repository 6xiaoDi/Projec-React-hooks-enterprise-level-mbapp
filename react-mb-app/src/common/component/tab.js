import React,{useEffect,useRef,useState} from 'react';
import BScroll from "better-scroll";

export default function Tab(props){
    let {data,render} = props;
    let bannerWrap = useRef(null); // 幻灯片外框
    let bScroll = null;
    useEffect(()=>{
        bScroll = new BScroll(bannerWrap.current,{
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical", // 保留纵向滑屏
            snap:{
                loop: true // 无缝滑屏
            }
        })
    },[]);
    return (<div className="banner">
        <div className="banner_img" ref={bannerWrap}>
            <ul className="banner_list clearfix">
                {
                    data.map((item,index)=><li key={index}>{render(item)}</li>)
                }
            </ul>
        </div>
        {
            data.length < 1 ?"":(<ul className="banner_nav">
                {
                    data.map((item,index)=><li key={index}>

                    </li>)
                }
            </ul>)
        }
    </div>);
}