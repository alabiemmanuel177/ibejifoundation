import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import { Home } from "./Home";
import { Aboutus } from "./Aboutus";
import { Foundation } from "./Foundation";
import { Project } from "./Project";
import { Admin } from "./Admin";
import { Applicants } from "./Applicants";
import { Signup } from "../views/Signup";
import { AppForm } from "./AppForm";
import {Login} from "./Login";

export const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="admin"/>
        <Route index element={<Home />} path="/" />
        <Route element={<Aboutus />} path="aboutus" />
        <Route element={<Foundation />} path="thefoundation" />
        <Route element={<Project />} path="project" />
        <Route element={<Login />} path="login"/>
        <Route element={<Applicants />} path="applicants" />
        <Route element={<Signup/>} path="signup"/>
        <Route element={<AppForm/>} path="appform"/>
      </Routes>
    </BrowserRouter>
  );
};
