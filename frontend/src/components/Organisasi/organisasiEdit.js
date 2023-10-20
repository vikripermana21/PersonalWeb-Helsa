import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import '../../styles/style.css';
import Navbar2 from "../Navigation/navbar2";

const OrganisasiEdit = () => {
  const navigate = useNavigate();   
  const token = localStorage.getItem('access_token');

  if (!token){
    navigate('/login')
  }

  const [nama_organisasi, setNamaOrganisasi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tanggal_mulai_menjabat, setTanggalMulai] = useState(null);
  const [tanggal_akhir_menjabat, setTanggalAkhir] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { id_organisasi, id_person } = useParams();

  useEffect(() => {
    getOrganisasi();
  }, []);

  const redirectCancelButton = () => {
    navigate(`/organisasi/${id_person}`)
  }

  const OrganisasiEditHandler = async(e) => {
    e.preventDefault();
    if (tanggal_mulai_menjabat >= tanggal_akhir_menjabat) {
      setError("Tanggal mulai menjabat harus lebih awal dari tanggal akhir menjabat.");
      return;
    }

    setError("");
    try {
      const response = await axios.patch(`http://localhost:5000/organisasi/${id_organisasi}`, {
        nama_organisasi, posisi, tanggal_mulai_menjabat, tanggal_akhir_menjabat
      });

      navigate(`/organisasi/${id_person}`)
      console.log("Organisasi berhasil diubah")
      console.log("Data setelah diupdate: ", response)
    } catch (error) {
      console.log(error);
    }
  }

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/organisasi/${id_person}/${id_organisasi}`)
      console.log("Data : ", response.data)
      setNamaOrganisasi(response.data.nama_organisasi)
      setPosisi(response.data.posisi)
      setTanggalMulai(new Date(response.data.tanggal_mulai_menjabat))
      setTanggalAkhir(new Date(response.data.tanggal_akhir_menjabat))
    } catch (error) {
      console.log(error.message)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
                <b>Edit Organisasi</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <form onSubmit={OrganisasiEditHandler}>
                  <div className="mb-4 flex items-center hide-element">
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
                      <span className="label-text">Nama Organisasi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Organisasi"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      value={nama_organisasi}
                      onChange={(e) => setNamaOrganisasi(e.target.value)}
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
                      value={posisi}
                      onChange={(e) => setPosisi(e.target.value)}
                    />
                  </div>
                  {/* Tanggal Mulai Menjabat */}
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tanggal Mulai Menjabat</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                      placeholderText="DD-MM-YYYY"
                      selected={tanggal_mulai_menjabat}
                      onChange={(date) => setTanggalMulai(date)}
                      dateFormat="dd-MM-yyyy" // Format tanggal yang Anda inginkan
                      className="bg-gray-300 input input-bordered input-sm"
                      style={{ width: "10%" }}
                      showYearDropdown // Mengaktifkan pilihan tahun
                      yearDropdownItemNumber={10} // Jumlah tahun yang akan ditampilkan dalam dropdown
                      popperPlacement="top-start"
                    />
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{
                        color: "#666",
                        marginLeft: "5px"
                      }}
                    />
                  </div>
                  {/* Tanggal Akhir Menjabat */}
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
                      popperPlacement="top-start"
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

export default OrganisasiEdit;