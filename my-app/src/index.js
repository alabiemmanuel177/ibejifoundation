import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./views/Home";
import { Aboutus } from "./views/Aboutus";
import { Foundation } from "./views/Foundation";
import { Project } from "./views/Project";
import { Admin } from "./views/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin" />
          <Route index element={<Home />} path="/" />
          <Route element={<Aboutus />} path="aboutus" />
          <Route element={<Foundation />} path="thefoundation" />
          <Route element={<Project />} path="project" />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
