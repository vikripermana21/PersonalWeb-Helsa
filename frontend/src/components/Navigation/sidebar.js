import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ page }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const [admin, setAdmin] = useState(false);
  const [visible, setVisible] = useState(true);

  const menu = [
    {
      label: "Data Diri",
      link: `/datadiri/${id}`,
    },
    {
      label: "Portofolio",
      link: `/portofolio/${id}`,
    },
    {
      label: "Skill",
      link: `/skill/${id}`,
    },
    {
      label: "Pendidikan",
      link: `/pendidikan/${id}`,
    },
    {
      label: "Organisasi",
      link: `/organisasi/${id}`,
    },
  ];

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setRole(localStorage.getItem("role_akun"));

    if (role === "Admin") {
      setAdmin(true);
    }
  }, [role]);

  const logoutHandler = async () => {
    try {
      localStorage.removeItem("id");
      axios.delete("http://localhost:5000/logout");
      localStorage.clear();
      navigate("/");
      console.log("berhasil logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-nowrap">
      <div
        className="z-10 p-3  w-full fixed"
        style={{ backgroundColor: "#192655" }}
      >
        <div className="flex-none">
          <img src="../images/logo2.png" alt="" />
        </div>
      </div>
      <aside
        className={`${
          visible ? "w-[16rem] px-4 pb-4 " : "w-0 "
        }h-full text-white pt-20 flex flex-col justify-between relative transition-all`}
        style={{ backgroundColor: "#4D4C7D" }}
      >
        <button
          className="absolute p-3 -right-14 bg-[#4D4C7D] rounded-md"
          onClick={() => setVisible(!visible)}
        >
          <FaBars />
        </button>
        {visible && (
          <>
            <Link to={`/dashboard`}>
              <div
                className="mb-8 text-2xl font-semibold text-center pt-2"
                style={{ color: "#fff" }}
              >
                CV Maker
                <div className="mt-2 border-b border-white"></div>
              </div>
            </Link>

            {admin ? (
              <ul className="space-y-2 flex-1 overflow-y-auto ml-0 pl-0">
                <li>
                  <Link
                    to={`/datadiri`}
                    className="flex items-center p-2  text-white rounded-md hover:bg-blue-400"
                    style={{ width: "100%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    ></svg>
                    Manage User
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 flex-1 overflow-y-auto ml-0 pl-0">
                {menu.map((item) => (
                  <li>
                    <Link
                      to={item.link}
                      className="flex items-center p-2  text-white rounded-md hover:bg-blue-400"
                      style={{ width: "100%" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      ></svg>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <button
              className="p-2 bg-red-500 text-white absolute bottom-5 font-semibold rounded-md hover:bg-red-600"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        )}
      </aside>
      <div className="w-full flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pt-20 bg-slate-200">{page}</div>
      </div>
    </div>
  );
};

export default Sidebar;
