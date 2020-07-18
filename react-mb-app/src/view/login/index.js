import React from "react";
import "../../common/css/login.css"
import LoginBox from "./login";
import RegisterBox from './register'

function Login() {
    return (
        <div id = 'login_boxWrap'>
            <h2 className="login_register">
                <span>登录&amp;注册</span>
            </h2>
            <div className="login_register_box">
                <div className="box">
                    <LoginBox/>
                    <RegisterBox/>
                </div>
            </div>
        </div>
    )
}

export default Login;