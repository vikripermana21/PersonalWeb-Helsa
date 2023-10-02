import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/login";
import Registrasi from "./components/Login/registrasi";
import Dashboard from "./components/dashboard";
import AdminList from "./components/Admin/adminList";
import AdminEdit from "./components/Admin/adminEdit";
import DataDiriList from "./components/DataDiri/dataDiriList";
import DataDiriCreate from "./components/DataDiri/dataDiriCreate";
import DataDiriEdit from "./components/DataDiri/dataDiriEdit";
import OrganisasiList from "./components/Organisasi/organisasiList";
import OrganisasiCreate from "./components/Organisasi/organisasiCreate";
import OrganisasiEdit from "./components/Organisasi/organisasiEdit";
import PendidikanList from "./components/Pendidikan/pendidikanList";
import PendidikanCreate from "./components/Pendidikan/pendidikanCreate";
import PendidikanEdit from "./components/Pendidikan/pendidikanEdit";
import SkillList from "./components/Skill/skillList";
import SkillCreate from "./components/Skill/skillCreate";
import SkillEdit from "./components/Skill/skillEdit";
import PortofolioList from "./components/Portofolio/portofolioList";
import PortofolioCreate from "./components/Portofolio/portofolioCreate";
import PortofolioEdit from "./components/Portofolio/portofolioEdit";
import LandingPage from "./landingPage";

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
    path: "/admin",
    element: <AdminList />,
  },
  {
    path: "/admin-edit",
    element: <AdminEdit />,
  },
  {
    path: "/data-diri",
    element: <DataDiriList />,
  },
  {
    path: "/data-diri-create",
    element: <DataDiriCreate />,
  },
  {
    path: "/pendidikan",
    element: <PendidikanList />,
  },
  {
    path: "/data-diri-edit",
    element: <DataDiriEdit />,
  },
  {
    path: "/pendidikan-create",
    element: <PendidikanCreate />,
  },
  {
    path: "/pendidikan-edit",
    element: <PendidikanEdit />,
  },
  {
    path: "/organisasi",
    element: <OrganisasiList />,
  },
  {
    path: "/organisasi-create",
    element: <OrganisasiCreate />,
  },
  {
    path: "/organisasi-edit",
    element: <OrganisasiEdit />,
  },
  {
    path: "/skill",
    element: <SkillList />,
  },
  {
    path: "/skill-create",
    element: <SkillCreate />,
  },
  {
    path: "/skill-edit",
    element: <SkillEdit />,
  },
  {
    path: "/portofolio",
    element: <PortofolioList />,
  },
  {
    path: "/portofolio",
    element: <PortofolioCreate />,
  },
  {
    path: "/portofolio",
    element: <PortofolioEdit />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
