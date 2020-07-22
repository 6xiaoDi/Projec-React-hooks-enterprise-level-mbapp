import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom"
import "./common/css/reset.css";
import "./common/css/common.css";
import IndexRoute from './router';
import Header from './common/component/header';
import Menu from './common/component/menu';

function App() {
    const [showMenu,setShowMenu] = useState(false); // 菜单的展开与收缩

    function changeShow() {
        setShowMenu(!showMenu);
    }

    function menuHide() {
        setShowMenu(false);
    }

    return (
        <BrowserRouter>
            <div>
                <Header
                    changeShow = {changeShow}
                />
                <Menu
                    menuHide={menuHide}
                />
                <div
                    className="pageWrap"
                    style={{
                        transform: `translateX(${showMenu?4.5:0}rem)`
                    }}
                    onTouchStart={menuHide}
                >
                    <IndexRoute />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
