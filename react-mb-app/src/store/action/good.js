import HTTP from "./http";

// 获取是否点赞
function getGood(id){
    return function(dispatch){
       return HTTP.post(`/lecturer/getgood`,{
        article_id:id       
    }).then(res=>{
            //console.log(res);
            if(res.data.code === 0){
                dispatch({
                    type: "GOOD",
                    goodid: res.data.goodid
                });
            } else {
                dispatch({
                    type: "CANCEL_GOOD"
                });
            }
        })
    }
}

export {getGood};