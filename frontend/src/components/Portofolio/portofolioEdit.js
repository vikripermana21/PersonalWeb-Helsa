import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";

const PortofolioEdit = () => {
  const [nama_portofolio, setNamaPortofolio] = useState("");
  const [deskripsi_portofolio, setDeskripsiPortofolio] = useState("");
  const [file_portofolio, setFilePortofolio] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { id_portofolio, id_person } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getPortofolio();
  }, [])

  const portoEditHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/portofolio/${id_portofolio}`, {
        nama_portofolio, deskripsi_portofolio, file_portofolio
      });

      navigate(`/portofolio/${id_person}`)
      console.log("Portofolio berhasil diubah")
      console.log("Data setelah diupdate: ", response)
    } catch (error) {
      console.log(error);
    }
  }

  const getPortofolio = async() => {
    try {
      const response = await axios.get(`http://localhost:5000/portofolio/${id_person}/${id_portofolio}`)
      console.log("Data Porto : ", response.data)
      setNamaPortofolio(response.data.nama_portofolio)
      setDeskripsiPortofolio(response.data.deskripsi_portofolio)
      setFilePortofolio(response.data.file_portofolio)
    } catch (error) {
      console.log(error);
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
                <b>Edit Portofolio</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <form onSubmit={portoEditHandler}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Id Person</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Id Person"
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
                      value={nama_portofolio}
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
                      value={deskripsi_portofolio}
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
                        value={file_portofolio}
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

export default PortofolioEdit;
