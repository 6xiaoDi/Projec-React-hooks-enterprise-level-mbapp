import HTTP from "./http";
export default function register(data){
    return function(dispatch){
        console.log(data);
       return HTTP.post("/user/register",data).then(res=>{
            if(res.data.code == 0){
                // 暂时不需要做数据上的操作
                // dispatch({
                //     type: "LOGIN",
                //     user: data.username
                // });
            }
            console.log(res)
            return res.data;
        })
    }
}