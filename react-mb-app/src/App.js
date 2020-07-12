import React from 'react';
import {BrowserRouter} from "react-router-dom"
import IndexRouter from "./router";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <IndexRouter/>
        </div>
      </BrowserRouter>
  );
}

export default App;
