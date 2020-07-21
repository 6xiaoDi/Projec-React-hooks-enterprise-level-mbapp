import React,{useRef,useEffect} from 'react';
export default function Article(props){
    let {data} = props;
    return (
        <article className="miiaov_article">
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