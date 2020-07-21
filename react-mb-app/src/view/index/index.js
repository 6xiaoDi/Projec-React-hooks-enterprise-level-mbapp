import React, {useEffect, useState} from "react";
import {connect} from "react-redux"
import Tab from '../../common/component/tab'
import "../../common/css/index.css";
import Course from "./course";
import Vip from "./vip";
import Coursev from "./coursev";
import Works from "./works";
import Frame from "../../common/component/frame";
import getWorks from "../../store/action/getWorks";



// 后端传可以调接口接收，或者直接写死。
let imgData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];

function Index(props) {
    let {dispatch} = props;
    let [page,setPage] = useState(1);
    function getWorsData(){
        let p = dispatch(getWorks(page));
        setPage(++page);
        return p;
    }
    useEffect(()=>{
        getWorsData();
    },[]);
    return (
            <Frame
                pullUp = {true}
                getData = {getWorsData}
            >
                <div>
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
                        <Works {...props}/>
                    </section>
                </div>
            </Frame>
    )
}

// 注意一定返回一个新对象否则是没办法对比后覆盖的
export default connect(props => {
    return {...props.works};
})(Index);