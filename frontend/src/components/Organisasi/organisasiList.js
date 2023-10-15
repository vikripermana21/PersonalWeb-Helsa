import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";

const OrganisasiList = () => {
  const { id_person } = useParams();
  const [organizations, setOrganizations] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

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

  return (
    <div>
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} /> {/* Ikon hamburger */}
          </button>
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center">
              <h1>
                <b>Organisasi</b>
              </h1>
            </div>
            
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
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
                              className="btn btn-sm btn-primary ml-3"
                              onClick={() => redirectToEditOrganisasi(organisasi.id_organisasi)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-error ml-3"
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