import HTTP from "./http";
export default function login(data){
    return function(dispatch){
       return HTTP.post("/user/login",data).then(res=>{
           // 登录成功
           if(res.data.code == 0){
               dispatch({
                   type: "LOGIN",
                   user: data.username
               });
           }
           return res.data;
       })
    }
}