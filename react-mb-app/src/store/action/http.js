import axios from "axios";
import qs from "qs"
const HTTP = axios.create({
    baseURL: "/miaov", // 替代地址/默认路径
    withCredentials: true, // 请求的时候携带cookie，请求登录的时候，要把后端传过来的进行cookie校验，再传给后端，这样就知道现在对应的是哪个设备了，即哪个单点登录的信息
    transformRequest:(data)=>{  // 请求拦截器
        return qs.stringify(data) // url请求转换编码状态（url可能是中文需要转化编码）
    }
});
export default HTTP;