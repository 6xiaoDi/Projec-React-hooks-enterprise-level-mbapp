    import React ,{useEffect,useState} from "react";
    import Frame from "../../common/component/frame";
    import "../../common/css/coursev.css"
    import {connect} from "react-redux";
    import getWork from "../../store/action/getWork";
    import Skeleton from "../../common/component/skeleton";
    import Main from "./main";
    import getMessageList from "../../store/action/getMessageList";

    function Work(props) {
        let {data,loading,dispatch,match} = props;
        let {id} = match.params;
        function getMessageData(){
            return dispatch(getMessageList(id));
        }
        useEffect(()=>{
            dispatch(getWork(id));
            getMessageData();
            return ()=>{
                // 清空数据
                dispatch({
                    type: "WORK_RESET"
                });
                dispatch({
                    type: "MESSAGE_RESET"
                });
            }
        },[]);
        return (
            // 不能直接写在框架里，有些东西在框架外，如footer
            <div>
                <Frame
                    pullUp = {true}                      // 上滑加载数据
                    getData = {getMessageData}
                >
                    {
                        loading?<Skeleton />:(
                            <Main
                                data={data}
                            />
                        )
                    }
                </Frame>
                <footer className="miiapv_footer">
                    回复本帖
                </footer>
            </div>
        );
    }

    export default connect(state=>({...(state.work)}))(Work);