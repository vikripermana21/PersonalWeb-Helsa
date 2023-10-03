import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./landingPage";
import Login from "./components/Login/login";
import Registrasi from "./components/Login/registrasi";
import Dashboard from "./components/dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registrasi",
    element: <Registrasi />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
