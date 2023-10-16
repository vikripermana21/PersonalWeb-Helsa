import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";

const PortofolioDetail = () => {
    const { id_person, id_portofolio } = useParams();
    const [nama_portofolio, setNamaPortofolio] = useState("");
    const [deskripsi_portofolio, setDeskripsiPortofolio] = useState("");
    const [file_portofolio, setFilePortofolio] = useState("");
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const navigate = useNavigate();
    const baseUrl = 'http://localhost:5000/';

    useEffect(() => {
        getDetailPortofolio();
    }, [])

    const getDetailPortofolio = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/portofolio/${id_person}/${id_portofolio}`)
          console.log("Berhasil ambil data portofolio dari id_person = ", id_person, " dan id_portofolio = ", id_portofolio)
          console.log("Data : ", response.data)
          setNamaPortofolio(response.data.nama_portofolio)
          setDeskripsiPortofolio(response.data.deskripsi_portofolio)
          setFilePortofolio(response.data.file_portofolio)
        //   setPortofolios(response.data)
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
              <div className="flex justify-center items-center">
                <h1>
                  <b>Detail Portofolio</b>
                </h1>
              </div>
              <div className="flex justify-center items-center p-2 mt-5">
                <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                  <table className="table-auto w-full">
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 w-1/4">Nama Portofolio</td>
                        <td colSpan={2} className="border px-4 py-2">
                          {nama_portofolio}
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 w-1/4">Deskripsi Portofolio</td>
                        <td colSpan={2} className="border px-4 py-2">
                          {deskripsi_portofolio}
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 w-1/4">File Portofolio</td>
                        <td colSpan={2} className="border px-4 py-2">
                          <img src={`${baseUrl}${file_portofolio}`} alt="foto portofolio" className="w-3/4 item-center " />
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
}

export default PortofolioDetail