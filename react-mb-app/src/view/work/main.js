import React from 'react';
import Tab from '../../common/component/tab';
import Article from "./article";

export default function Main(props){
    let {data} = props;
    return (
        <div className="workDetails">
            <Tab 
                data={data.image_path.map(item=>item.path)}
                render={src=><img src={src} />}
            />
            <div className="miiaov_box">
                <article className="miiaov_comment">
                    <Article
                        data={data}
                    />
                </article>
            </div>
        </div>
    )
}