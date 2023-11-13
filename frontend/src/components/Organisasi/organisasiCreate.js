import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';
import Navbar2 from "../Navigation/navbar2";

const OrganisasiCreate = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  if (!token) {
    navigate('/login');
  }

  const [id_person, setIdPerson] = useState("");
  const [nama_organisasi, setNamaOrganisasi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tanggal_mulai_menjabat, setTanggalMulai] = useState("");
  const [tanggal_akhir_menjabat, setTanggalAkhir] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIdPerson(localStorage.getItem('id'));
  }, []);

  const redirectCancelButton = () => {
    navigate(`/organisasi/${id_person}`);
  };

  const createOrganisasiHandler = async (e) => {
    e.preventDefault();
  
    if (tanggal_mulai_menjabat >= tanggal_akhir_menjabat) {
      setError("Tanggal mulai menjabat harus lebih awal dari tanggal akhir menjabat.");
      return;
    }
  
    if (!/[A-Za-z]/.test(posisi)) {
      setError("Isikan dengan Huruf");
      return;
    }
  
    setError("");
  
    try {
      const response = await axios.post("http://localhost:5000/organisasi", {
        id_person,
        nama_organisasi,
        posisi,
        tanggal_mulai_menjabat,
        tanggal_akhir_menjabat,
      });
  
      navigate(`/organisasi/${id_person}`);
      console.log("Berhasil menambahkan pengalaman organisasi");
      console.log("Data Organisasi : ", response);
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
                <b>Tambah Organisasi</b>
              </h1>
            </div>
            {error && (
              <div className="text-red-500 text-sm mb-4">{error}</div>
            )}
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <form onSubmit={createOrganisasiHandler}>
                  <div className="mb-4">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama Organisasi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Organisasi"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      onChange={(e) => setNamaOrganisasi(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Posisi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Posisi"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      onChange={(e) => setPosisi(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tanggal Mulai Menjabat</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tanggal Mulai Menjabat"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      onChange={(e) => setTanggalMulai(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tanggal Akhir Menjabat</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tanggal Akhir Menjabat"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      onChange={(e) => setTanggalAkhir(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-danger btn-sm mr-2 w-1/3" onClick={redirectCancelButton}>
                      Cancel
                    </button>
                    <button className="btn btn-success btn-sm w-1/3">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrganisasiCreate;