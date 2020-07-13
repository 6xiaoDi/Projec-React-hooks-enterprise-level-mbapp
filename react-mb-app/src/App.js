import React from 'react';
import {BrowserRouter} from "react-router-dom"
import IndexRouter from "./router";
import Frame from "./common/component/frame";
import "./common/css/reset.css";
import "./common/css/common.css";

function App() {
  return (
      <BrowserRouter>
          <Frame>
              <IndexRouter/>
          </Frame>
      </BrowserRouter>
  );
}

export default App;
