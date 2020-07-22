import React,{useRef,useEffect} from 'react';
export default function Article(props){
    let {data} = props;
    let wrap = useRef(null);

    // data更新再重新获取
    useEffect(()=>{
        // 获取所有图片
        let imgs = wrap.current.querySelectorAll("img");

        imgs.forEach(img => {
            // 图片每加载完毕，better-scroll就去刷新
            img.onload = function(){
                window.pageScroll.refresh();
            };
        });
    },[data])

    return (
        <article className="miiaov_article" ref={wrap}>
               <h3>{data.title}</h3>
               <div className="miiaov_txt"
                    dangerouslySetInnerHTML={{
                        __html: data.content  
                    }}
               >
                   
               </div>
           </article>
    )
}