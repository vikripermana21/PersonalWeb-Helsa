import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";

const PendidikanEdit = () => {
  const [formData, setFormData] = useState({
    instansi_pendidikan: "",
    jurusan: "",
    tahun_mulai_ajaran: "",
    tahun_akhir_ajaran: "",
  });

  const [msg, setMsg] = useState(""); // Feedback message
  const { id_person, id_pendidikan } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPendidikan();
  }, []);

  const getPendidikan = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/pendidikan/${id_person}/${id_pendidikan}`
      );
      const {
        instansi_pendidikan,
        jurusan,
        tahun_mulai_ajaran,
        tahun_akhir_ajaran,
      } = response.data;
      setFormData({
        instansi_pendidikan,
        jurusan,
        tahun_mulai_ajaran,
        tahun_akhir_ajaran,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        `http://localhost:5000/pendidikan/${id_pendidikan}`,
        formData
      );
      navigate(`/pendidikan/${id_person}`);
      setMsg("Data pendidikan berhasil diubah"); // Success message
      console.log("Data setelah diupdate: ", response.data);
    } catch (error) {
      setMsg("Error updating data"); // Error message
      console.log(error);
    }
  };

  return (
    <div>
      <div className={`bg-gray-200 flex`}>
        <Sidebar />
        <main className={`flex-1 p-4`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => navigate(`/pendidikan/${id_person}`)}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Edit Pendidikan</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Instansi Pendidikan</span>
                    </label>
                    <input
                      type="text"
                      name="instansi_pendidikan"
                      value={formData.instansi_pendidikan}
                      onChange={handleChange}
                      placeholder="Nama Instansi Pendidikan"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Jurusan</span>
                    </label>
                    <input
                      type="text"
                      name="jurusan"
                      value={formData.jurusan}
                      onChange={handleChange}
                      placeholder="Jurusan"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tahun Mulai Ajaran</span>
                    </label>
                    <input
                      type="date"
                      name="tahun_mulai_ajaran"
                      value={formData.tahun_mulai_ajaran}
                      onChange={handleChange}
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tahun Akhir Ajaran</span>
                    </label>
                    <input
                      type="date"
                      name="tahun_akhir_ajaran"
                      value={formData.tahun_akhir_ajaran}
                      onChange={handleChange}
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      required
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-error btn-sm mr-2 w-1/3">
                      Cancel
                    </button>
                    <button className="btn btn-success btn-sm w-1/3">
                      Save
                    </button>
                  </div>
                </form>
                {msg && (
                  <p className={`text-center mt-4 ${msg.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
                    {msg}
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PendidikanEdit;