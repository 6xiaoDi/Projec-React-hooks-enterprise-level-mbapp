import React,{useState} from 'react';

function LoginBox(props){
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="images/user_img.png" alt=""/>
                    <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text"  placeholder="用户名"/>
                </p>
                <p>
                    <input type="password" placeholder="请输入密码"/>
                </p>
                <p>
                    <input type="text" placeholder="验证码" value=""/>
                </p>
                <button className="form_btn">登录</button>
                <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>
        </div>
    );
}
export default LoginBox;