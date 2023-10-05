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
import PortofolioCreate from "./components/Portofolio/portofolioCreate";
import PortofolioList from "./components/Portofolio/portofolioList";
import PortofolioDetail from "./components/Portofolio/portofolioDetail";
import PortofolioEdit from "./components/Portofolio/portofolioEdit";

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
    path: "/portofolio/create",
    element: <PortofolioCreate />,
  },
  {
    path: "/portofolio/:id_person",
    element: <PortofolioList />,
  },
  {
    path: "/portofolio/:id_person/:id_portofolio",
    element: <PortofolioDetail />,
  },
  {
    path: "/portofolio/:id_person/edit/:id_portofolio",
    element: <PortofolioEdit />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
