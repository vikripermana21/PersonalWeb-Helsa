import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const OrganisasiList = () => {
  const { id_person } = useParams();
  const [organizations, setOrganizations] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    getOrganisasi();
  }, []);

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/organisasi/${id_person}`
      );
      console.log("Berhasil ambil data organisasi dari id_person =", id_person);
      console.log("Data :", response.data);
      setOrganizations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const redirectToEditOrganisasi = (id_organisasi) => {
    navigate(`/organisasi/${id_person}/edit/${id_organisasi}`);
  };

  const redirectToAddOrganisasi = () => {
    navigate("/organisasi/create");
  };

  const deleteOrganisasiHandler = async (id_organisasi) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/organisasi/${id_organisasi}`);
        window.location.reload();
        console.log("Data berhasil dihapus");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  function extractYearFromDate(dateString) {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    return date.getFullYear();
  }

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
                <b>Organisasi</b>
              </h1>
            </div>

            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <AiOutlinePlusCircle
                    size={25}
                    onClick={redirectToAddOrganisasi}
                    className="mr-2"
                    style={{ cursor: "pointer" }}
                  />
                  <span
                    onClick={redirectToAddOrganisasi}
                    style={{ cursor: "pointer" }}
                  >
                    Tambah Baru
                  </span>
                </div>
                <table
                  className="table-auto w-full"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 w-1/4">
                        Nama Organisasi
                      </th>
                      <th className="border px-4 py-2 w-1/4">Posisi</th>
                      <th className="border px-4 py-2 w-1/6">Mulai Menjabat</th>
                      <th className="border px-4 py-2 w-1/6">Akhir Menjabat</th>
                      <th className="border px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizations.map((organisasi) => (
                      <tr key={organisasi.id_organisasi}>
                        <td
                          className="border px-4 py-2"
                          style={{
                            whiteSpace: "pre-line",
                            overflowWrap: "break-word",
                          }}
                        >
                          {organisasi.nama_organisasi}
                        </td>
                        <td
                          className="border px-4 py-2"
                          style={{
                            whiteSpace: "pre-line",
                            overflowWrap: "break-word",
                          }}
                        >
                          {organisasi.posisi}
                        </td>
                        <td
                          className="border px-4 py-2"
                          style={{
                            whiteSpace: "pre-line",
                            overflowWrap: "break-word",
                          }}
                        >
                          {extractYearFromDate(
                            organisasi.tanggal_mulai_menjabat
                          )}
                        </td>
                        <td
                          className="border px-4 py-2"
                          style={{
                            whiteSpace: "pre-line",
                            overflowWrap: "break-word",
                          }}
                        >
                          {extractYearFromDate(
                            organisasi.tanggal_akhir_menjabat
                          )}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <div className="flex justify-center">
                            <FiEdit
                              onClick={() =>
                                redirectToEditOrganisasi(
                                  organisasi.id_organisasi
                                )
                              }
                              className="mr-2"
                              style={{ cursor: "pointer", color: "#6B7280" }}
                            />
                            <BsTrash
                              onClick={() =>
                                deleteOrganisasiHandler(
                                  organisasi.id_organisasi
                                )
                              }
                              style={{ cursor: "pointer", color: "#EF4444" }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
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

export default OrganisasiList;
