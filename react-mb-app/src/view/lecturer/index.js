import React,{useEffect,useState} from 'react';
import Frame from '../../common/component/frame';
import "../../common/css/teacher.css";
import {connect} from "react-redux"
import Tab from "../../common/component/tab";
import getLectirers from "../../store/action/getLectirers";
import LecturerTab from "./tab";
import Join from "./join";
import Footer from "./footer";
import LecturerAlert from "./lecturerAlert";



function Lecturer(props) {
    const [show,setShow] = useState(false);  // 是否显示弹出层
    const [alertDate,setAlertData] = useState(null); // 弹框数据
    let {data,dispatch} = props;
    let newData = [];
    function showAlert(data){
        setAlertData(data);
        setShow(true);
    }
    function hideAlert(){
        setShow(false);
    }
    // 每隔3个讲师分成一组
    for(let i = 0; i < data.length; i+=3){

        let newArr = [];
        let end = i+3;
        end = end > data.length?data.length:end;

        // data[i]&&newArr.push(data[i]);
        // data[i+1]&&newArr.push(data[i+1]);
        // data[i+2]&&newArr.push(data[i+2]);

        for(let j = i; j < end; j++){
            newArr.push(data[j]);
        }
        newData.push(newArr);
    }
    useEffect(()=>{
        dispatch(getLectirers());
    },[]);

    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2>
                        <span>
                        妙味团队
                        </span>
                    </h2>
                    <LecturerTab
                        data={data}
                        newData = {newData}
                        showAlert = {showAlert}
                    />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show?<LecturerAlert
                    data = {alertDate}
                    hideAlert = {hideAlert}/>
                :""}
        </div>

    );
}

export default connect(state=>state.lecturers)(Lecturer);