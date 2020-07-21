    import React ,{useEffect,useState} from "react";
    import Frame from "../../common/component/frame";
    import "../../common/css/coursev.css"
    import {connect} from "react-redux";
    import getWork from "../../store/action/getWork";

    function Work(props) {
        let {data,loading,dispatch,match} = props;
        let {id} = match.params;
        console.log(data, loading);
        useEffect(()=>{
            dispatch(getWork(id));
            return ()=>{
                // 清空数据
                dispatch({
                    type: "WORK_RESET"
                });
            }
        },[]);
        // console.log(props);
        return (
            // 不能直接写在框架里，有些东西在框架外，如footer
            <div>
                <Frame/>
                <footer className="miiapv_footer">
                    回复本帖
                </footer>
            </div>
        );
    }

    export default connect(state=>({...(state.work)}))(Work);