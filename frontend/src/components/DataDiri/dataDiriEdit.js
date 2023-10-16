import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Navigation/sidebar";
import { FaBars } from "react-icons/fa";
import Navbar2 from "../Navigation/navbar2";

const DataDiriEdit = ({ id_person }) => {
  const [formData, setFormData] = useState({
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    tinggi_badan: "",
    berat_badan: "",
    alamat: "",
    agama: "",
    status: "",
    email: "",
    telp: "",
    instagram: "",
    linkedin: "",
    github: "",
  });

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchDataDiri = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/personal/${id_person}`
        );
        const dataDiri = response.data;
        setFormData(dataDiri);
      } catch (error) {
        console.error("Error fetching data diri:", error);
      }
    };

    fetchDataDiri();
  }, [id_person]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/personal/${id_person}`,
        formData
      );

      navigate(`/datadiri`);
      console.log("Data Diri updated successfully:", response.data);
    } catch (error) {
      setMsg(error.response.data.error);
      console.error("Error updating Data Diri:", error);
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
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Edit Data Diri</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Nama Lengkap"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tempat Lahir</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tempat_lahir"
                      value={formData.tempat_lahir}
                      onChange={handleChange}
                      placeholder="Tempat Lahir"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Tanggal Lahir</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="tanggal_lahir"
                        value={formData.tanggal_lahir}
                        onChange={handleChange}
                        className="bg-gray-300 input input-bordered input-sm w-1/2"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Jenis Kelamin</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <label className="mr-2">
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="Laki-Laki"
                            checked={formData.jenis_kelamin === "Laki-Laki"}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Laki-laki
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="Perempuan"
                            checked={formData.jenis_kelamin === "Perempuan"}
                            onChange={handleChange}
                            className="mr-1"
                          />
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Tinggi Badan</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="tinggi_badan"
                        value={formData.tinggi_badan}
                        onChange={handleChange}
                        placeholder="0"
                        className="bg-gray-300 input input-bordered input-sm w-1/12"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Berat Badan</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="berat_badan"
                        value={formData.berat_badan}
                        onChange={handleChange}
                        placeholder="0"
                        className="bg-gray-300 input input-bordered input-sm w-1/12"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Alamat</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                        placeholder="Alamat lengkap..."
                        className="bg-gray-300 input input-bordered input-sm w-1/2 h-20"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Agama</span>
                      </label>
                      <select
                        name="agama"
                        value={formData.agama}
                        onChange={handleChange}
                        className="bg-gray-300 input input-sm input-bordered w-1/2"
                        size="1"
                      >
                        <option value="">Pilih Agama...</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Buddha">Buddha</option>
                        <option value="Konghucu">Konghucu</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-1">
                      <span className="label-text">Status</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      placeholder="Contoh : Mahasiswa"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Email</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className="bg-gray-300 input input-bordered input-sm w-2/3"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Telepon</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="telp"
                        value={formData.telp}
                        onChange={handleChange}
                        placeholder="+62..."
                        className="bg-gray-300 input input-bordered input-sm w-2/3"
                      />
                    </div>
                  </div>
                  <div className="box-border">
                    <div className="mb-4 grid grid-cols-3">
                      <label className="mr-1 mb-3">
                        <span className="label-text">Media Sosial</span>
                      </label>
                      <div>
                        <div className="mb-4">
                          <label className="mr-5">
                            <span className="label-text">Instagram</span>
                          </label>
                          <input
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            placeholder="username"
                            className="bg-gray-300 input input-bordered input-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="mr-5">
                            <span className="label-text">LinkedIn</span>
                          </label>
                          <input
                            type="text"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="username"
                            className="bg-gray-300 input input-bordered input-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="mr-5">
                            <span className="label-text">Github</span>
                          </label>
                          <input
                            type="text"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            placeholder="username"
                            className="bg-gray-300 input input-bordered input-sm w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="mt-10 flex justify-center items-center">
                    <button
                      className="btn btn-error btn-sm mr-2 w-1/3"
                      onClick={() => navigate(`/datadiri`)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success btn-sm w-1/3"
                    >
                      Save
                    </button>
                  </div>
                </form>
                <p>{msg}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataDiriEdit;