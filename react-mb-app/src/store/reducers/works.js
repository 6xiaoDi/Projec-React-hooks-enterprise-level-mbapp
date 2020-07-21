export default function works(state={
    data: [],  // 数据
    loading: false,  // 是否正在加载中
    loadEnd: false,  // 是否已经加载完了
},action){
    switch(action.type){
        // 正在请求数据
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        // 请求数据完毕，准备更新数据
        case "LOADOVER":
            return {
                ...state,
                loading: false,
                data: state.data
            };
        // 数据请求结束
        case "LOADEND":
            return {
                ...state,
                loadEnd: true
            }         
    };
    return state
}