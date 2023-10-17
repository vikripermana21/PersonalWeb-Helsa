import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const DataDiriList = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem('access_token');
  const role_akun = localStorage.getItem('role_akun');
  console.log(role_akun)

  if (!token){
    navigate('/login')
  }

  if (role_akun !== 'Admin'){
    navigate('/notfound404')
  } 

  const [data_diri, setDataDiri] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const baseUrl = 'http://localhost:5000/';

  useEffect(() => {
    getDataDiri();
  }, []);

  const getDataDiri = async () => {
    try {
      const response = await axios.get("http://localhost:5000/personal")
      console.log("Data : ", response.data)
      setDataDiri(response.data)
    } catch (error) {
        console.log(error);
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

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Data Diri</b>
              </h1>
            </div>

            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <button onClick={redirectToAddDataDiri} className="btn btn-success">
                    Tambah Data Diri
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Foto Profil</th>
                      <th className="px-4 py-2">Nama</th>
                      <th className="px-4 py-2">Tanggal Lahir</th>
                      <th className="px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data_diri.map((personal) => (
                      <tr key={personal.id_person}>
                        <td className="px-4 py-2">
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
                        <td className="px-4 py-2">{personal.nama}</td>
                        <td className="px-4 py-2">{personal.tanggal_lahir}</td>
                        <td className="px-4 py-2 text-center">
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
