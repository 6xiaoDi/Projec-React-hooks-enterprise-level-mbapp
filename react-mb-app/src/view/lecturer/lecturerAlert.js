import React,{useEffect,useRef} from 'react';
import BScroll from "better-scroll";
export default function LecturerAlert(props){
    let {data,hideAlert} =  props;
    let wrap = useRef(null); // 外框
    let point = {};
    // 组件挂载后加better-scroll
    useEffect(()=>{
        let bscroll = new BScroll(wrap.current,{
            scrollbar: true // 滚动条
        });
    },[]);
    return (
     <aside 
        className="elastic"
        onTouchStart={()=>{
            // 点击其他区域也隐藏弹出层
            hideAlert();
        }}
    >
        <div 
            className="elastic_box"
            onTouchStart={(e)=>{
                // 弹出层·一碰就隐藏，因此阻止冒泡
                e.stopPropagation();
            }}
        >
            <span 
                className="close"
                onTouchStart={(e)=>{
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y = touch.pageY;
                }}
                onTouchEnd={(e)=>{
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    //console.log(point,nowPoint);
                    // 计算手指抬起和按下的坐标差，超过5个孝素就不是想点击，而是别的操作了
                    if(Math.abs(nowPoint.x - point.x)<5
                    &&Math.abs(nowPoint.y - point.y)<5){
                        hideAlert();
                    }
                }}
            >关闭</span>
            <div className="elastic_img">
                <img src={data.icon} alt="" />
            </div>
            <div className="elastic_txt">
                <h3>{data.title}-妙味课堂 全职讲师</h3>
                <div className="elastic_content" ref={wrap}>
                    {/*内容：加一层div，以免发生超出现象（加滚蛋蛋条），更方便滑屏*/}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.content
                      }}
                    ></div>
                </div>
            </div>
        </div>
    </aside>
    );
}