import React from "react";
import  ReactDOM  from "react-dom";
import { App } from "./views/App";
import { ContextProvider } from "./components/context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)