import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';

const PortofolioCreate = () => {
  const [id_person, setIdPerson] = useState("");
  const [nama_portofolio, setNamaPortofolio] = useState("");
  const [deskripsi_portofolio, setDeskripsiPortofolio] = useState("");
  const [file_portofolio, setFilePortofolio] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIdPerson(localStorage.getItem('id'))
  }, [])

  const createPortoHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/portofolio", {
        id_person,
        nama_portofolio,
        deskripsi_portofolio,
        file_portofolio,
      })

      navigate(`/portofolio/${id_person}`)
      console.log('Berhasil membuat portofolio baru');
      console.log('Data portofolio : ', response);
    } catch (error) {
      console.log(error.message)
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
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Tambah Portofolio</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <form onSubmit={createPortoHandler}>
                  <div className="mb-4 flex items-center hide-element">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Id Person</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      value={id_person}
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Portofolio"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      onChange={(e) => setNamaPortofolio(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Deskripsi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Deskripsi Portofolio"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      onChange={(e) => setDeskripsiPortofolio(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">File</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="File"
                        className="bg-gray-300 input input-bordered input-sm w-2/3"
                        onChange={(e) => setFilePortofolio(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-error btn-sm mr-2 w-1/3">
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

export default PortofolioCreate;
