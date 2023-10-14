import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";

const DataDiriList = () => {
  const [data_diri, setDataDiri] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();
  const baseUrl = 'http://localhost:5000/';

  useEffect(() => {
    getDataDiri();
  }, []);

  const getDataDiri = async () => {
    try {
      const response = await axios.get("http://localhost:5000/personal");
      console.log("Data : ", response.data);
      setDataDiri(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const redirectToEditDataDiri = (id_person) => {
    navigate(`/datadiri/edit/${id_person}`);
  };

  const redirectToDetailDataDiri = (id_akun) => {
    navigate(`/datadiri/${id_akun}`);
  };

  const redirectToAddDataDiri = () => {
    navigate('/datadiri/create');
  };

  const deleteDataDiriHandler = async (id_person) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/personal/${id_person}`);
        window.location.reload();
        console.log("Data berhasil dihapus");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center">
              <h1>
                <b>Data Diri</b>
              </h1>
            </div>

            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <button onClick={redirectToAddDataDiri} className="btn btn-success">
                    Tambah Data Diri
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Foto Profil</th>
                      <th className="border px-4 py-2">Nama</th>
                      <th className="border px-4 py-2">Tanggal Lahir</th>
                      <th className="border px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data_diri.map((personal) => (
                      <tr key={personal.id_person}>
                        <td className="border px-4 py-2">
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={`${baseUrl}${personal.foto}`} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{personal.username}</div>
                              <div className="text-sm opacity-50">{personal.nama}</div>
                            </div>
                          </div>
                        </td>
                        <td className="border px-4 py-2">{personal.nama}</td>
                        <td className="border px-4 py-2">{personal.tanggal_lahir}</td>
                        <td className="border px-4 py-2 text-center">
                          <button
                            className="btn btn-sm btn-primary ml-3"
                            onClick={() => redirectToEditDataDiri(personal.id_person)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-primary ml-3"
                            onClick={() => redirectToDetailDataDiri(personal.id_akun)}
                          >
                            Detail
                          </button>
                          <button
                            className="btn btn-sm btn-error ml-3"
                            onClick={() => deleteDataDiriHandler(personal.id_person)}
                          >
                            Delete
                          </button>
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

export default DataDiriList;
