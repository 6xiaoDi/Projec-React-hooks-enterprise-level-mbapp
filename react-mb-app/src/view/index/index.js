import React from "react";
import {connect} from "react-redux"
import Tab from '../../common/component/tab'
import "../../common/css/index.css";
import Course from "./course";
import Vip from "./vip";
import Coursev from "./coursev";
import Works from "./works";


// 后端传可以调接口接收，或者直接写死。
let imgData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];

function Index(props) {
    return (<div>
                {/*结构不统一，我们处理不同的数据=>return可以写不同的结构，可以是li，也可以是这里的图片*/}
                <Tab
                    data = {imgData}
                    render = {(data,index)=>{
                        return <img src={data}/>
                    }}
                />
                <section className="index_content">
                    <Course />
                    <Vip/>
                    <Coursev/>
                    <Works/>
                </section>
            </div>

    )
}

export default connect(res => {
    return res;
})(Index);