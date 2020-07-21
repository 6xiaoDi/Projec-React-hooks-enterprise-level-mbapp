import React,{useEffect,useRef} from 'react';
import BScroll from "better-scroll";
export default function LecturerAlert(props){

    return (
     <aside 
        className="elastic"
    >
        <div 
            className="elastic_box"
        >
            <span 
                className="close"
            >
                关闭
            </span>
            <div className="elastic_img">
                <img src="images/teacher_photo.png" alt="" />
            </div>
            <div className="elastic_txt">
                <h3>莫涛-妙味课堂 全职讲师</h3>
                <div className="elastic_content" >

                </div>
            </div>
        </div>
    </aside>
    );
}