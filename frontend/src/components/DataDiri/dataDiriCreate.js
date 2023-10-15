import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataDiriCreate = () => {
  const [id_akun, setIdAkun] = useState("");
  const [foto, setFoto] = useState("");
  const [nama, setNama] = useState("");
  const [tempat_lahir, setTempatLahir] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [usia, setUsia] = useState("");
  const [tinggi_badan, setTinggiBadan] = useState("");
  const [berat_badan, setBeratBadan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [agama, setAgama] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [telp, setTelp] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const createPersonal = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id_akun', id_akun);
      if (typeof foto === 'object') {
        formData.append('foto', foto);
      }
      formData.append('nama', nama);
      formData.append('tempat_lahir', tempat_lahir);
      formData.append('tanggal_lahir', tanggal_lahir);
      formData.append('usia', usia);
      formData.append('tinggi_badan', tinggi_badan);
      formData.append('berat_badan', berat_badan);
      formData.append('alamat', alamat);
      formData.append('agama', agama);
      formData.append('jenis_kelamin', jenis_kelamin);
      formData.append('telp', telp);
      formData.append('email', email);
      formData.append('status', status);
      formData.append('instagram', instagram);
      formData.append('github', github);
      formData.append('linkedin', linkedin);

      const response = await axios.post("http://localhost:5000/personal", formData);
      console.log(response.data);
      const id_person = response.data.data.id_person;
      navigate(`/datadiri/${id_person}`)
    } catch (error) {
        setMsg(error.response.data.error);
        console.log(error);
      }
  }

  return (
    <div className="bg-gray-200 h-auto box-border p-4">
      <div className="flex justify-center items-center mt-5">
        <h1>
          <b>Data Diri</b>
        </h1>
      </div>
      <div className="flex justify-center items-center p-2 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
          <form onSubmit={createPersonal}>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Foto</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="bg-gray-300 input input-bordered input-md w-2/3"
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text"></span>
              </label>
              {foto && typeof foto === 'object' && <img src={URL.createObjectURL(foto)} alt="Preview" className="mask mask-squircle w-48 h-49" />}
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Id Akun</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="id"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
                onChange={(e) => setIdAkun(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Nama</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Tempat Lahir</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Tempat Lahir"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
                onChange={(e) => setTempatLahir(e.target.value)}
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
                  className="bg-gray-300 input input-bordered input-sm w-1/2"
                  onChange={(e) => setTanggalLahir(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Usia</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Usia"
                className="bg-gray-300 input input-bordered input-sm w-1/12"
                onChange={(e) => setUsia(e.target.value)}
              />
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
                      name="gender"
                      value="Laki-Laki"
                      className="mr-1"
                      onChange={(e) => setJenisKelamin(e.target.value)}
                    />
                    Laki-laki
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Perempuan"
                      className="mr-1"
                      onChange={(e) => setJenisKelamin(e.target.value)}
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
                  placeholder="0"
                  className="bg-gray-300 input input-bordered input-sm w-1/12"
                  onChange={(e) => setTinggiBadan(e.target.value)}
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
                  placeholder="0"
                  className="bg-gray-300 input input-bordered input-sm w-1/12"
                  onChange={(e) => setBeratBadan(e.target.value)}
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
                  placeholder="Alamat lengkap..."
                  className="bg-gray-300 input input-bordered input-sm w-1/2 h-20"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Agama</span>
                </label>
                <select
                  className="bg-gray-300 input input-sm input-bordered w-1/2"
                  size="1"
                  onChange={(e) => setAgama(e.target.value)}
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
                placeholder="Contoh : Mahasiswa"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
                onChange={(e) => setStatus(e.target.value)}
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
                  placeholder="email@contoh.com"
                  className="bg-gray-300 input input-bordered input-sm w-2/3"
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="+62..."
                  className="bg-gray-300 input input-bordered input-sm w-2/3"
                  onChange={(e) => setTelp(e.target.value)}
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
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mr-5">
                      <span className="label-text">LinkedIn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mr-5">
                      <span className="label-text">Github</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                      onChange={(e) => setGithub(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div><p>{msg}</p>
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

export default DataDiriCreate;