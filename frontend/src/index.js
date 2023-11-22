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
import ConvertToWeb from "./components/CV/personalWeb";
import NotFound404 from "./components/notFound404";
import Sidebar from "./components/Navigation/sidebar";
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
    element: <Sidebar page={<Dashboard />} />,
  },
  {
    path: "/datadiri/create",
    element: <Sidebar page={<DataDiriCreate />} />,
  },
  {
    path: "/datadiri/:id_akun",
    element: <Sidebar page={<DataDiriDetails />} />,
  },
  {
    path: "/datadiri/edit/:id_person",
    element: <Sidebar page={<DataDiriEdit />} />,
  },
  {
    path: "/datadiri",
    element: <Sidebar page={<DataDiriList />} />,
  },
  {
    path: "/pendidikan/create",
    element: <Sidebar page={<PendidikanCreate />} />,
  },
  {
    path: "/pendidikan/:id_person",
    element: <Sidebar page={<PendidikanList />} />,
  },
  {
    path: "/pendidikan/:id_person/edit/:id_pendidikan",
    element: <Sidebar page={<PendidikanEdit />} />,
  },
  {
    path: "/portofolio/create",
    element: <Sidebar page={<PortofolioCreate />} />,
  },
  {
    path: "/portofolio/:id_person",
    element: <Sidebar page={<PortofolioList />} />,
  },
  {
    path: "/portofolio/:id_person/:id_portofolio",
    element: <Sidebar page={<PortofolioDetail />} />,
  },
  {
    path: "/portofolio/:id_person/edit/:id_portofolio",
    element: <Sidebar page={<PortofolioEdit />} />,
  },
  {
    path: "/organisasi/create",
    element: <Sidebar page={<OrganisasiCreate />} />,
  },
  {
    path: "/organisasi/:id_person",
    element: <Sidebar page={<OrganisasiList />} />,
  },
  {
    path: "/organisasi/:id_person/edit/:id_organisasi",
    element: <Sidebar page={<OrganisasiEdit />} />,
  },
  {
    path: "/skill/create",
    element: <Sidebar page={<SkillCreate />} />,
  },
  {
    path: "/skill/:id_person",
    element: <Sidebar page={<SkillList />} />,
  },
  {
    path: "/skill/:id_person/edit/:id_skill",
    element: <Sidebar page={<SkillEdit />} />,
  },
  {
    path: "/:username",
    element: <ConvertToWeb />,
  },
  {
    path: "/notfound404",
    element: <NotFound404 />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
