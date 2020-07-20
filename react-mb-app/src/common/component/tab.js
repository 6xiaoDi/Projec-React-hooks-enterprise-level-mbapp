import React,{useEffect,useRef,useState} from 'react';
import BScroll from "better-scroll";

export default function Tab(props){
    let {data,render} = props;
    let bannerWrap = useRef(null); // 幻灯片外框
    let [now,setNow] = useState(0); // 代表当前被选中的是第几张图
    let bScroll = null;
    useEffect(()=>{
        bScroll = new BScroll(bannerWrap.current,{
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical", // 保留纵向滑屏
            momentum: false, // 关闭轻浮
            snap:{
                loop: true // 无缝滑屏
            }
        });
        bScroll.on("scrollEnd",()=>{
            // console.log(bScroll.getCurrentPage());
            setNow(bScroll.getCurrentPage().pageX);
        });
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
                    data.map((item,index)=><li
                        key={index}
                        className={index===now ? "active" : ""}
                    >
                    </li>)
                }
            </ul>)
        }
    </div>);
}