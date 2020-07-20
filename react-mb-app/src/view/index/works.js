import React from 'react';
export default function Works(props){
    return (
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                <li>
                    <a href="#">
                        <img src="images/work1.jpg"/>
                            <span className="wrork_txt clearfix">
                                <strong>时空唱片机1111111111111111</strong>
                                <span>
                                    <em>25</em>
                                    <em>986</em>
                                </span>
                            </span>
                    </a>
                </li>
            </ul>
            <a className="more" href="#">上滑加载更多...</a>
            {/* 正在加载中 */}
            {/* 没有新的数据了 */}
        </div>
    );
};