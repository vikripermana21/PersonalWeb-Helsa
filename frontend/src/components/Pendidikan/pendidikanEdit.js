import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";
import "../../styles/style.css";

const PendidikanEdit = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  if (!token) {
    navigate("/login");
  }

  const [formData, setFormData] = useState({
    instansi_pendidikan: "",
    jurusan: "",
    tahun_mulai_ajaran: "",
    tahun_akhir_ajaran: "",
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [msg, setMsg] = useState(""); // Feedback message
  const { id_person, id_pendidikan } = useParams();

  useEffect(() => {
    getPendidikan();
  }, []);

  const redirectCancelButton = () => {
    navigate(`/pendidikan/${id_person}`);
  };

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

    // Additional validation to check if tahun_mulai_ajaran is earlier than tahun_akhir_ajaran
    const startDate = new Date(formData.tahun_mulai_ajaran);
    const endDate = new Date(formData.tahun_akhir_ajaran);

    if (startDate >= endDate) {
      setMsg("Tahun mulai ajaran harus lebih awal dari tahun akhir ajaran.");
      return; // Prevent further execution
    }

    try {
      const response = await axios.post("http://localhost:5000/pendidikan", {
        ...formData,
        id_person,
      });

      navigate(`/pendidikan/${id_person}`);
      console.log("Pendidikan record created successfully:");
      console.log("Response:", response.data);
    } catch (error) {
      setMsg(error.response.data.error);
      console.error("Error creating Pendidikan record:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <div>
        <main className={`flex-1 p-4`}>
          <div className="bg-gray-200 h-screen box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Edit Pendidikan</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
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
                    <button
                      className="btn btn-danger btn-sm mr-2 w-1/3"
                      onClick={redirectCancelButton}
                    >
                      Cancel
                    </button>
                    <button className="btn btn-success btn-sm w-1/3">
                      Save
                    </button>
                  </div>
                </form>
                {msg && (
                  <p
                    className={`text-center mt-4 ${
                      msg.startsWith("Error")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
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
