import React from 'react';
function Footer(props){
    let {todos} = props;
      return (
          <footer
              style={{
                  display:todos.length > 0 ? "block":"none"
              }}
          >
              <a id="clear-completed" >Clear 0 completed item</a>
              <div id="todo-count">10 items left</div>
          </footer>
      );
}


export default Footer;
