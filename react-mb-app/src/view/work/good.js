import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getGood,setGood,cancelGood} from "../../store/action/good";
import {withRouter} from "react-router-dom";


function Good(props){
    let {goodNub,good,goodid,user,dispatch,id,history} = props;
    let point = {};
    const [goodCount,setGoodCount] = useState(parseInt(goodNub)); // 数据同步还需要重新请求数据，比较繁琐浪费性能，我们就设置临时变量记录点赞

    useEffect(()=>{
        dispatch(getGood(id));
    },[user]);

    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span 
                className={"iconfont icon-tuijian1 " + (good ? "good" : "")}  // 切换点赞和未点赞的两个图标

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
                    if(Math.abs(nowPoint.x - point.x)<5
                        &&Math.abs(nowPoint.y - point.y)<5){

                        if(user){
                            // 判断是否点赞，没有点赞就点赞，有点赞就取消点赞
                            if(good){
                                dispatch(cancelGood({
                                    id,
                                    goodid
                                })).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount - 1);
                                    }
                                });
                            } else {
                                dispatch(setGood(id)).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount + 1);
                                    }
                                });
                            }
                        // user 为空则没有登录
                        } else {
                            history.push("/login");
                        }
                    }
                }}
            >

            </span>
        </p>
    );
}

export default withRouter(connect(state=>({
    ...state.good,
    user: state.getUser
}))(Good));