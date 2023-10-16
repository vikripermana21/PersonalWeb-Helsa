import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const OrganisasiList = () => {
  const { id_person } = useParams();
  const [organizations, setOrganizations] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }

  useEffect(() => {
    getOrganisasi();
  }, [])

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/organisasi/${id_person}`)
      console.log("Berhasil ambil data organisasi dari id_person = ", id_person)
      console.log("Data : ", response.data)
      setOrganizations(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const redirectToEditOrganisasi = (id_organisasi) => {
    navigate(`/organisasi/${id_person}/edit/${id_organisasi}`);
  }

  const redirectToAddOrganisasi = () => {
    navigate('/organisasi/create')
  }

  const deleteOrganisasiHandler = async(id_organisasi) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if(confirmDelete){
      try {
        await axios.delete(`http://localhost:5000/organisasi/${id_organisasi}`)
        window.location.reload();
        console.log("Data berhasil dihapus")
      } catch (error) {
        console.log(error);
      }
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          <button
              className="p-2 bg-blue-500 text-white rounded-md mb-4"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              style={{ backgroundColor: '#4D4C7D' }}
            >
              <FaBars size={24} />
          </button>
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
                  <button onClick={redirectToAddOrganisasi} className="btn btn-success">
                    Tambah Organisasi
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Nama Organisasi</th>
                      <th className="border px-4 py-2">Posisi</th>
                      <th className="border px-4 py-2">Tanggal Mulai Menjabat</th>
                      <th className="border px-4 py-2">Tanggal Akhir Menjabat</th>
                      <th className="border px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizations.map((organisasi) => (
                      <tr key={organisasi.id_organisasi}>
                        <td className="border px-4 py-2">{organisasi.nama_organisasi}</td>
                        <td className="border px-4 py-2">{organisasi.posisi}</td>
                        <td className="border px-4 py-2">{organisasi.tanggal_mulai_menjabat}</td>
                        <td className="border px-4 py-2">{organisasi.tanggal_akhir_menjabat}</td>
                        <td className="border px-4 py-2 text-center">
                          <div className="flex">
                            <button
                              className="btn btn-sm btn-success ml-3"
                              onClick={() => redirectToEditOrganisasi(organisasi.id_organisasi)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger ml-3"
                              onClick={() => deleteOrganisasiHandler(organisasi.id_organisasi)}
                            >
                              Delete
                            </button>
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