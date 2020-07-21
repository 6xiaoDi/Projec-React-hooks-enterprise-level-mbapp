import React from "react";
import Frame from "../../common/component/frame";
import "../../common/css/coursev.css"

function Work(props) {
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

export default Work;