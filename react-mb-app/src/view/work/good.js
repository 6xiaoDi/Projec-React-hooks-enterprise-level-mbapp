import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getGood} from "../../store/action/good";


function Good(props){
    let {goodNub,good,user,dispatch,id} = props;

    useEffect(()=>{
        dispatch(getGood(id));
    },[user]);
    
    return (
        <p className="miiaov_zan">
            <span>有{goodNub}人学的很赞</span>
            <span 
                className={"iconfont icon-tuijian1 " + (good ? "good" : "")}  // 切换点赞和未点赞的两个图标
            >

            </span>
        </p>
    );
}

export default connect(state=>({
    ...state.good,
    user: state.getUser
}))(Good);