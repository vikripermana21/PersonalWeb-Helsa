import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const PendidikanList = () => {
  const navigate = useNavigate(); 
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }
  const { id_person } = useParams();
  const [pendidikan, setPendidikan] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    getPendidikan();
  }, []);

  const getPendidikan = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/pendidikan/${id_person}`
      );
      console.log("Berhasil ambil data pendidikan dari id_person =", id_person);
      console.log("Data:", response.data);
      setPendidikan(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const redirectToEditPendidikan = (id_pendidikan) => {
    navigate(`/pendidikan/${id_person}/edit/${id_pendidikan}`);
  };

  const redirectToAddPendidikan = () => {
    navigate("/pendidikan/create");
  };

  const deletePendidikanHandler = async (id_pendidikan) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/pendidikan/${id_pendidikan}`);
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

  const styles = {
    container: {
      // styles for the container
    },
    icon: {
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    editIconHover: {
      color: '#007bff',
    },
    deleteIconHover: {
      color: '#dc3545',
    },
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            style={{ backgroundColor: '#4D4C7D' }}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Pendidikan</b>
              </h1>
            </div>

            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <AiOutlinePlusCircle size={25} onClick={redirectToAddPendidikan} className="mr-2" style={{cursor: 'pointer'}} />
                  <span onClick={redirectToAddPendidikan} style={{cursor: 'pointer'}}>Tambah Baru</span>
                </div>
                <table className="table-auto w-full" style={{ tableLayout: 'fixed' }}>
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 w-1/3" style={{fontSize: '15px'}}>Instansi Pendidikan</th>
                      <th className="border px-4 py-2 w-1/4" style={{fontSize: '15px'}}>Jurusan</th>
                      <th className="border px-4 py-2 w-1/8" style={{fontSize: '15px'}}>Tahun Mulai Ajaran</th>
                      <th className="border px-4 py-2 w-1/8" style={{fontSize: '15px'}}>Tahun Akhir Ajaran</th>
                      <th className="border px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendidikan.map((pendidikanItem) => (
                      <tr key={pendidikanItem.id_pendidikan}>
                        <td className="border px-4 py-2" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                          {pendidikanItem.instansi_pendidikan}
                        </td>
                        <td className="border px-4 py-2" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                          {pendidikanItem.jurusan}
                        </td>
                        <td className="border px-4 py-2" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                          {pendidikanItem.tahun_mulai_ajaran.substring(0, 4)}
                        </td>
                        <td className="border px-4 py-2" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                          {pendidikanItem.tahun_akhir_ajaran.substring(0, 4)}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <div className="flex justify-center">
                            <FiEdit onClick={() => redirectToEditPendidikan(pendidikanItem.id_pendidikan)} className="mr-2" style={{cursor: 'pointer', color: '#6B7280'}} />
                            <BsTrash onClick={() => deletePendidikanHandler(pendidikanItem.id_pendidikan)} style={{cursor: 'pointer', color: '#EF4444'}} />
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

export default PendidikanList;
