import React, {useState, useEffect, useRef } from 'react';
function Li(){
    return (
        <li className="">
            <div className="view" >
                <input className="toggle" type="checkbox"/>
                <label>213213</label>
                <a className="destroy">

                </a>
            </div>
            <input className="edit" type="text" value="213213"/>
        </li>
    )
}

function Mian(){
  return (
      <section id="main" >
          <input id="toggle-all" type="checkbox" checked=""/>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul id="todo-list">
              <Li/>
          </ul>
      </section>
    );
}


export default Mian;
