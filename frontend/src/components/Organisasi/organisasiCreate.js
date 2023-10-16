import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';

const OrganisasiCreate = () => {
  const [id_person, setIdPerson] = useState("");
  const [nama_organisasi, setNamaOrganisasi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tanggal_mulai_menjabat, setTanggalMulai] = useState(null);
  const [tanggal_akhir_menjabat, setTanggalAkhir] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIdPerson(localStorage.getItem('id'))
  }, [])

  const redirectCancelButton = () => {
    navigate(`/organisasi/${id_person}`)
  }

  const createOrganisasiHandler = async (e) => {
    e.preventDefault();
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

  return (
    <div>
    <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Tambah Organisasi</b>
              </h1>
            </div>
      <div className="flex justify-center items-center p-2 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-6/12 h-auto">
          <form onSubmit={createOrganisasiHandler}>
            <div className="mb-4 flex items-center hide-element">
              <label className="w-1/3 mr-2">
                <span className="label-text">Id Person</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Id Person"
                className="bg-gray-300 input input-bordered input-sm"
                style={{ width: "20%" }}
                value={id_person}
                disabled
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Nama Organisasi</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nama Organisasi"
                className="bg-gray-300 input input-bordered input-sm"
                style={{ width: "50%" }}
                onChange={(e) => setNamaOrganisasi(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Posisi</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Posisi"
                className="bg-gray-300 input input-bordered input-sm"
                style={{ width: "50%" }}
                onChange={(e) => setPosisi(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Tanggal Mulai Menjabat</span>
                <span className="text-red-500">*</span>
              </label>
              <DatePicker
              placeholderText="DD-MM-YYYY"
                selected={tanggal_mulai_menjabat}
                onChange={(date) => setTanggalMulai(date)}
                dateFormat="dd-MM-yyyy"
                className="bg-gray-300 input input-bordered input-sm"
                style={{ width: "10%" }}
                showYearDropdown
                yearDropdownItemNumber={10}
                required
              />
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ 
                  color: "#666",
                  marginLeft: "5px" 
                }}
              />

            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Tanggal Akhir Menjabat</span>
                <span className="text-red-500">*</span>
              </label>
              <DatePicker
                placeholderText="DD-MM-YYYY"
                selected={tanggal_akhir_menjabat}
                onChange={(date) => setTanggalAkhir(date)}
                dateFormat="dd-MM-yyyy"
                className="bg-gray-300 input input-bordered input-sm"
                style={{ width: "50%" }}
                showYearDropdown
                yearDropdownItemNumber={10}
                required
              />
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ 
                  color: "#666",
                  marginLeft: "5px"
                }}
              />
            </div>
            <div className="mt-10 flex justify-center items-center">
              <button className="btn btn-error btn-sm mr-2 w-1/3" onClick={redirectCancelButton}>
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