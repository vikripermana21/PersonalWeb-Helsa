import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PendidikanEdit = () => {
  const [formData, setFormData] = useState({
    instansi_pendidikan: "",
    jurusan: "",
    tahun_mulai_ajaran: "",
    tahun_akhir_ajaran: "",
  });

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
      const { instansi_pendidikan, jurusan, tahun_mulai_ajaran, tahun_akhir_ajaran } = response.data;
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
      console.log("Data pendidikan berhasil diubah");
      console.log("Data setelah diupdate: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-base-200 h-auto box-border p-4">
      <div className="flex justify-center items-center mt-5">
        <h1>
          <b>Edit Pendidikan</b>
        </h1>
      </div>
      <div className="flex justify-center items-center p-2 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
          <form onSubmit={handleSubmit}>
            {/* Input fields for editing pendidikan data */}
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Instansi Pendidikan</span>
              </label>
              <input
                type="text"
                name="instansi_pendidikan"
                value={formData.instansi_pendidikan}
                onChange={handleChange}
                className="input input-bordered input-sm w-2/3"
                required
              />
            </div>
            {/* Add similar fields for other attributes (jurusan, tahun_mulai_ajaran, tahun_akhir_ajaran) */}
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Jurusan</span>
              </label>
              <input
                type="text"
                name="jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                className="input input-bordered input-sm w-2/3"
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
                className="input input-bordered input-sm w-2/3"
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
                className="input input-bordered input-sm w-2/3"
                required
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
    </div>
  );
};

export default PendidikanEdit;
