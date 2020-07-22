export default function messageList(state={
    messageList: [],
    loading: false,
    loadEnd: false,
    page: 1 
},action){
    switch(action.type){
        // 更新中
        case "MESSAGE_LOAD":
            return {
                ...state,
                loading: true
            };
        // 更新完
        case "MESSAGE_LOADOVER":
            return {
                ...state,
                loading: false,
                page: ++state.page,
                messageList: state.messageList.concat(action.messageList)
            };
        // 添加评论
        case "MESSAGE_ADD":
            return {
                ...state,
                // 新数据放在前头
                messageList: [action.messageList,...state.messageList]
            };
        // 更新结束
        case "MESSAGE_LOADEND":
            return {
                ...state,
                loadEnd: true
            } 
        case "MESSAGE_RESET":
            return {
                messageList: [],
                loading: false,
                loadEnd: false,
                page: 1 
            }
    };
    return state
}