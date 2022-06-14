import React from "react";
import { App } from "./views/App";
import { ContextProvider } from "./components/context/Context";
import {createRoot} from 'react-dom/client'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <ContextProvider>
      <App/>
    </ContextProvider>
)
