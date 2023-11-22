import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const PortofolioDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  if (!token) {
    navigate("/login");
  }

  const { id_person, id_portofolio } = useParams();
  const [nama_portofolio, setNamaPortofolio] = useState("");
  const [deskripsi_portofolio, setDeskripsiPortofolio] = useState("");
  const [file_portofolio, setFilePortofolio] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const baseUrl = "http://localhost:5000/";

  useEffect(() => {
    getDetailPortofolio();
  }, []);

  const getDetailPortofolio = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/portofolio/${id_person}/${id_portofolio}`
      );
      console.log(
        "Berhasil ambil data portofolio dari id_person = ",
        id_person,
        " dan id_portofolio = ",
        id_portofolio
      );
      console.log("Data : ", response.data);
      setNamaPortofolio(response.data.nama_portofolio);
      setDeskripsiPortofolio(response.data.deskripsi_portofolio);
      setFilePortofolio(response.data.file_portofolio);
      //   setPortofolios(response.data)
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Detail Portofolio</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">
                        Nama Portofolio
                      </td>
                      <td colSpan={2} className="border px-4 py-2">
                        {nama_portofolio}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">
                        Deskripsi Portofolio
                      </td>
                      <td colSpan={2} className="border px-4 py-2">
                        {deskripsi_portofolio}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">
                        File Portofolio
                      </td>
                      <td colSpan={2} className="border px-4 py-2">
                        <img
                          src={`${baseUrl}${file_portofolio}`}
                          alt="foto portofolio"
                          className="w-3/4 item-center "
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortofolioDetail;
