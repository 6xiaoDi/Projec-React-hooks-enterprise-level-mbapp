import React, {useState} from 'react';
function Header(){

  return (<header>
            <h1>Todos</h1>
            <input id="new-todo" type="text" placeholder="What needs to be done?" value=""/>
         </header>);
}


export default Header;
