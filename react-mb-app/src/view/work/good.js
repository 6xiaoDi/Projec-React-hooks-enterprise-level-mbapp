import React from 'react';

export default function Good(props){
    let {goodNub} = props;

    return (
        <p className="miiaov_zan">
            <span>有{goodNub}人学的很赞</span>
            <span 
                className="iconfont icon-tuijian1"
            >

            </span>
        </p>
    );
}
