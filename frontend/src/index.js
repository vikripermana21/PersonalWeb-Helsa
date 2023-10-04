import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./landingPage";
import Login from "./components/Login/login";
import Registrasi from "./components/Login/registrasi";
import Dashboard from "./components/dashboard";
import DataDiriCreate from "./components/DataDiri/dataDiriCreate";
import DataDiriList from "./components/DataDiri/dataDiriList";
import PendidikanCreate from "./components/Pendidikan/pendidikanCreate";
import PendidikanList from "./components/Pendidikan/pendidikanList";

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
  {
    path: "/datadiri/create",
    element: <DataDiriCreate />,
  },
  {
    path: "/datadiri",
    element: <DataDiriList />,
  },
  {
    path: "/pendidikan/create",
    element: <PendidikanCreate />,
  },
  {
    path: "/pendidikan",
    element: <PendidikanList />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
