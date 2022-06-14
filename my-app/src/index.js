import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./views/Home";
import { Aboutus } from "./views/Aboutus";
import { Foundation } from "./views/Foundation";
import { Project } from "./views/Project";
import { Admin } from "./views/Admin";
import Login from "./views/Login";
import { Applicants } from "./views/Applicants";
import Protectedroutes from "./components/Protectedroutes/Protectedroutes";
import AppForm from "./views/AppForm";
import Signup from "./views/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route element={<Admin />} path="admin" />
          <Route index element={<Home />} path="/" />
          <Route element={<Aboutus />} path="aboutus" />
          <Route element={<Foundation />} path="thefoundation" />
          <Route element={<Project />} path="project" />
          <Route element={<Login/>} path="login"/>
          <Route element={<AppForm/>} path="appform"/>
          <Route element={<Signup/>} path="signup"/>
          
          <Route element={<Protectedroutes/> }>
          <Route element={<Applicants/>} path="applicants"/>
          </Route>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
