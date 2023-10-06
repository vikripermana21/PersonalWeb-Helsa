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
import OrganisasiCreate from "./components/Organisasi/organisasiCreate";
import OrganisasiList from "./components/Organisasi/organisasiList";

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
    path: "/organisasi/create",
    element: <OrganisasiCreate />,
  },
  {
    path: "/organisasi/:id_person",
    element: <OrganisasiList />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
