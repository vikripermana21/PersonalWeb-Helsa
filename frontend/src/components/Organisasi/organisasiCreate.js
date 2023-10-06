import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const OrganisasiCreate = () => {
  const [id_person, setIdPerson] = useState("");
  const [nama_organisasi, setNamaOrganisasi] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tanggal_mulai_menjabat, setTanggalMulai] = useState(null);
  const [tanggal_akhir_menjabat, setTanggalAkhir] = useState(null);

  const navigate = useNavigate();

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
    <div className="bg-base-200 h-auto box-border p-4">
      <div className="flex justify-center items-center mt-5">
      <h1 style={{ fontSize: "36px" }}>
        <b>Organisasi</b>
      </h1>
      </div>
      <div className="flex justify-center items-center p-2 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-6/12 h-auto">
          <form onSubmit={createOrganisasiHandler}>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Id Person</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Id Person"
                className="input input-bordered input-sm"
                style={{ width: "20%" }}
                onChange={(e) => setIdPerson(e.target.value)}
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
                className="input input-bordered input-sm"
                style={{ width: "50%" }}
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
                className="input input-bordered input-sm"
                style={{ width: "50%" }}
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
                className="input input-bordered input-sm"
                style={{ width: "10%" }}
                showYearDropdown // Mengaktifkan pilihan tahun
                yearDropdownItemNumber={10} // Jumlah tahun yang akan ditampilkan dalam dropdown
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
                className="input input-bordered input-sm"
                style={{ width: "50%" }}
                showYearDropdown
                yearDropdownItemNumber={10}
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
              <button className="btn btn-error btn-sm mr-2 w-1/3">
                Cancel
              </button>
              <button className="btn btn-success btn-sm w-1/3">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto text-center p-2"></div>
    </div>
  );
};

export default OrganisasiCreate;
