import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

import Login from "./Component/Login.jsx";
import MainDashboard from "./Dashboard/MainDashboard.jsx";
import AppSetting from "./Routes/AppSetting.jsx";
import Profile from "./Routes/Profile.jsx";
import Wallcome from "./Routes/Wallcome.jsx";
import Todo from "./Pages/Todo.jsx";
import RegisterUser from "./Component/RegisterUser.jsx";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<RegisterUser />} />

      <Route path="login" element={<Login/>}/>

      <Route path="dashboard" element={<MainDashboard />}>
        <Route index element={<Wallcome />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="todos/" element={<Todo />} />
        <Route path="setting/" element={<AppSetting />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
