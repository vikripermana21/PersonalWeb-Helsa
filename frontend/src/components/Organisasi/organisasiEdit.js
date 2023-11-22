import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import "../../styles/style.css";
import Navbar2 from "../Navigation/navbar2";

const OrganisasiEdit = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const { id_organisasi, id_person } = useParams();

  if (!token) {
    navigate("/login");
  }

  const [nama_organisasi, setNamaOrganisasi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tanggal_mulai_menjabat, setTanggalMulai] = useState("");
  const [tanggal_akhir_menjabat, setTanggalAkhir] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [error, setError] = useState(""); // New state for error messages

  useEffect(() => {
    getOrganisasi();
  }, []);

  const redirectCancelButton = () => {
    navigate(`/organisasi/${id_person}`);
  };

  const OrganisasiEditHandler = async (e) => {
    e.preventDefault();

    if (tanggal_mulai_menjabat >= tanggal_akhir_menjabat) {
      setError(
        "Tanggal mulai menjabat harus lebih awal dari tanggal akhir menjabat."
      );
      return;
    }

    if (!/[A-Za-z]/.test(posisi)) {
      setError("Isikan dengan Huruf");
      return;
    }

    setError(""); // Reset error state

    try {
      const response = await axios.patch(
        `http://localhost:5000/organisasi/${id_organisasi}`,
        {
          nama_organisasi,
          posisi,
          tanggal_mulai_menjabat,
          tanggal_akhir_menjabat,
        }
      );

      navigate(`/organisasi/${id_person}`);
      console.log("Organisasi berhasil diubah");
      console.log("Data setelah diupdate: ", response);
    } catch (error) {
      setError("Terjadi kesalahan saat menyimpan data."); // Display error message
      console.log(error);
    }
  };

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/organisasi/${id_person}/${id_organisasi}`
      );
      console.log("Data : ", response.data);
      setNamaOrganisasi(response.data.nama_organisasi);
      setPosisi(response.data.posisi);
      setTanggalMulai(response.data.tanggal_mulai_menjabat);
      setTanggalAkhir(response.data.tanggal_akhir_menjabat);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data."); // Display error message
      console.log(error.message);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <div>
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Edit Organisasi</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                {error && (
                  <div className="text-red-500 text-sm mb-4">{error}</div>
                )}
                <form onSubmit={OrganisasiEditHandler}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama Organisasi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Organisasi"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={nama_organisasi}
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
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={posisi}
                      onChange={(e) => setPosisi(e.target.value)}
                      required
                    />
                  </div>
                  {/* Tanggal Mulai Menjabat */}
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tanggal Mulai Menjabat</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tanggal Mulai Menjabat"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={tanggal_mulai_menjabat}
                      onChange={(e) => setTanggalMulai(e.target.value)}
                      required
                    />
                  </div>
                  {/* Tanggal Akhir Menjabat */}
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tanggal Akhir Menjabat</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Tanggal Akhir Menjabat"
                      className="input input-bordered input-sm"
                      style={{ width: "50%" }}
                      value={tanggal_akhir_menjabat}
                      onChange={(e) => setTanggalAkhir(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button
                      className="btn btn-danger btn-sm mr-2 w-1/3"
                      onClick={redirectCancelButton}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-success btn-sm w-1/3"
                      onClick={OrganisasiEditHandler}
                    >
                      Save
                    </button>
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
