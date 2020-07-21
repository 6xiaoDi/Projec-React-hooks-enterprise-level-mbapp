import React,{useEffect,useRef,useState} from 'react';
import BScroll from "better-scroll";

export default function Tab(props){
    let {data,render} = props;
    let bannerWrap = useRef(null); // 幻灯片外框
    let [now,setNow] = useState(0); // 代表当前被选中的是第几张图
    let bScroll = null;
    useEffect(()=>{
        let timer = 0;
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
        timer = setInterval(()=>{
            bScroll.next(200);
        },2000);
        // 触摸图片，清除定时器
        bannerWrap.current.addEventListener("touchstart",()=>{
            clearInterval(timer);
        });
        // 手指抬起，开启定时器
        bannerWrap.current.addEventListener("touchend",()=>{
            timer = setInterval(()=>{
                bScroll.next(200)
            },2000);
        })
        // 必须卸载后关掉定时器，否则切换到别页面定时器还在走，浪费性能
        return ()=>{
            clearInterval(timer);
        }
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
            // 如果只有一张图片，则不需要显示导航点，better-scroll不用我们考虑，如果仅有一张图片，不会有滑动切换了
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