function useBack(history){
    return ()=>{
        if(history.length > 1){
            // 返回上一步
            history.goBack();
        // 没有历史记录，增加历史记录同时跳转到首页
        } else {
            history.push("/")
        }
    }
}


export {useBack};