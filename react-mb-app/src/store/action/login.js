import HTTP from "./http";
export default function login(data){
    return function(dispatch){
       return HTTP.post("/user/login").then(res=>{
            console.log(res);
        })
    }
}