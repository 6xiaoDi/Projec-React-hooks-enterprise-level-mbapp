import React from "react";
import Index from "../view/index";
import Course from "../view/course";
import Lecturer from "../view/lecturer";
import Work from "../view/work";
import Login from "../view/login";



// 存放对应的router
const routeList = [
    {
        name: "首页",
        path: "/",
        exact: true,  // 是否精确匹配
        render(props){
            return <Index {...props}/>
        }
    },{
        name: "课程安排",
        path: "/course",
        exact: true,
        render(props){
            return <Course {...props} />
        }
    },{
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(props){
            return <Lecturer {...props} />
        }
    },{
        name: "作品详情",
        path: "/work/:id",
        exact: true,
        render(props){
            return <Work {...props} />
        }
    },{
        name: "登录注册",
        path: "/login",
        exact: true,
        render(props){
            return <Login {...props} />
        }
    }
];
export default routeList;