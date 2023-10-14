import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
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
import PendidikanEdit from "./components/Pendidikan/pendidikanEdit";
import PortofolioCreate from "./components/Portofolio/portofolioCreate";
import PortofolioList from "./components/Portofolio/portofolioList";
import PortofolioDetail from "./components/Portofolio/portofolioDetail";
import OrganisasiCreate from "./components/Organisasi/organisasiCreate";
import OrganisasiList from "./components/Organisasi/organisasiList";
import OrganisasiEdit from "./components/Organisasi/organisasiEdit";
import PortofolioEdit from "./components/Portofolio/portofolioEdit";
import SkillCreate from "./components/Skill/skillCreate";
import SkillEdit from "./components/Skill/skillEdit";
import SkillList from "./components/Skill/skillList";
import DataDiriEdit from "./components/DataDiri/dataDiriEdit";
import DataDiriDetails from "./components/DataDiri/dataDiriDetails";
axios.defaults.withCredentials = true;

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
    path: "/datadiri/:id_akun",
    element: <DataDiriDetails />,
  },
  {
    path: "/datadiri/edit/:id_person",
    element: <DataDiriEdit />,
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
    path: "/pendidikan/:id_person",
    element: <PendidikanList />,
  },
  {
    path: "/pendidikan/:id_person/edit/:id_pendidikan",
    element: <PendidikanEdit />,
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
  {
    path: "/organisasi/create",
    element: <OrganisasiCreate />,
  },
  {
    path: "/organisasi/:id_person",
    element: <OrganisasiList />,
  },
  {
    path: "/organisasi/:id_person/edit/:id_organisasi",
    element: <OrganisasiEdit />,
  },
  {
    path: "/skill/create",
    element: <SkillCreate />,
  },
  {
    path: "/skill/:id_person",
    element: <SkillList />,
  },
  {
    path: "/skill/:id_person/edit/:id_skill",
    element: <SkillEdit />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
