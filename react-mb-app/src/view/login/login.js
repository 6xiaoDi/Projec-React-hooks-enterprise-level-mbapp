import React,{useState} from 'react';
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import login from "../../store/action/login";

function LoginBox(props){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [vcode,setVcode] = useState(""); // 验证码
    const [vcodeShow,setVcodeShow] = useState(false); // 显示验证码
    const [vcodeSrc,setVcodeSrc] = useState("/miaov/user/verify?"+Date.now()); // 验证码src，后加时间戳（每次不一样）是为了防止缓存。
    function toLogin(){
        props.dispatch(login({
            verify: vcode,
            username: user,
            password
        })).then(data=>{
            alert(data.msg);
            setTimeout(()=>{ //alert如果有获得焦点的功能，弹出的同时又会触发获得焦点，这个时候会有反复的循环问题，定时器就为了解决这个bug。如果自己写的弹窗就不需要这个定时器，只需监测用户关闭了弹窗后再继续下面的操作。
                // 登录失败
                if(data.code != 0){
                    setVcodeSrc("/miaov/user/verify?"+Date.now());
                } else {
                }
            },100);
        })
    }
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="../../common/images/icon_user.png" alt=""/>
                    <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p className='clearfix'>
                    <input
                        type="text"
                        placeholder="验证码"
                        value={vcode}
                        onChange={e => {
                            setVcode(e.target.value);
                        }}
                        onFocus={()=>{
                            setVcodeShow(true);
                        }}
                        className="verifyCode"
                    />
                    {vcodeShow ? <img
                        className="verify"
                        src={vcodeSrc}
                        onClick={()=>{
                            setVcodeSrc("/miaov/user/verify?"+Date.now());
                        }}
                    /> : ""}
                </p>
                <button
                    className="form_btn"
                    onClick={toLogin}
                >登录</button>

                <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>
        </div>
    );
}
// 原样返回
export default connect(res=>res)(LoginBox);