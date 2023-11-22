import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/style.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const DataDiriEdit = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  if (!token) {
    navigate("/login");
  }

  const { id_person } = useParams();
  const [foto, setFoto] = useState(null);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const baseUrl = "http://localhost:5000/";

  useEffect(() => {
    getPerson();
  }, []);

  const redirectCancelButton = () => {
    navigate(`/datadiri/${id_person}`);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const personEditHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id_person", id_person);
      if (foto) {
        formData.append("foto", foto);
      }
      formData.append("nama", nama);
      formData.append("deskripsi", deskripsi);
      formData.append("tempat_lahir", tempat_lahir);
      formData.append("tanggal_lahir", tanggal_lahir);
      formData.append("usia", usia);
      formData.append("tinggi_badan", tinggi_badan);
      formData.append("berat_badan", berat_badan);
      formData.append("alamat", alamat);
      formData.append("agama", agama);
      formData.append("jenis_kelamin", jenis_kelamin);
      formData.append("telp", telp);
      formData.append("email", email);
      formData.append("status", status);
      formData.append("instagram", instagram);
      formData.append("github", github);
      formData.append("linkedin", linkedin);

      console.log("JK: ", jenis_kelamin);
      const response = await axios.patch(
        `http://localhost:5000/personal/${id_person}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate(`/datadiri/${id_person}`);
      console.log("Data : ", response);
      console.log("JK: ", jenis_kelamin);
    } catch (error) {
      setMsg(error.response.data.error);
      console.log(error);
    }
  };

  const getPerson = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/personal/${id_person}`
      );
      console.log("Data: ", response.data);
      setFoto(response.data.foto);
      setNama(response.data.nama);
      setDeskripsi(response.data.deskripsi);
      setTempatLahir(response.data.tempat_lahir);
      setTanggalLahir(response.data.tanggal_lahir);
      setUsia(response.data.usia);
      setTinggiBadan(response.data.tinggi_badan);
      setBeratBadan(response.data.berat_badan);
      setAlamat(response.data.alamat);
      setAgama(response.data.agama);
      setJenisKelamin(response.data.jenis_kelamin);
      setTelp(response.data.telp);
      setEmail(response.data.email);
      setStatus(response.data.status);
      setInstagram(response.data.instagram);
      setLinkedin(response.data.linkedin);
      setGithub(response.data.github);
    } catch (error) {
      setMsg(error.response.data.error);
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}

          <div className="bg-gray-200 h-auto box-border p-4 pt-0">
            <div className="flex justify-center items-center">
              <h1>
                <b>Edit Data Diri</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
                <form onSubmit={personEditHandler}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Foto</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      placeholder="foto"
                      className=" input input-bordered input-sm w-1/8"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;
                          if (!allowedExtensions.exec(file.name)) {
                            alert(
                              "File harus berupa gambar dengan ekstensi .png, .jpg, atau .jpeg"
                            );
                          } else {
                            setFoto(file);
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Preview</span>
                    </label>
                    {foto && typeof foto === "object" && (
                      <img
                        src={URL.createObjectURL(foto)}
                        alt="Preview"
                        className="object-cover max-w-48 max-h-48 rounded-md item-center mask mask-squircle"
                      />
                    )}
                    {foto && typeof foto === "string" && (
                      <img
                        src={`${baseUrl}${foto}`}
                        alt="Existing"
                        className="object-cover max-w-48 max-h-48 rounded-md item-center mask mask-squircle"
                      />
                    )}
                  </div>
                  <div className="mb-4 flex items-center hide-element">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Id Akun</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="id"
                      className=" input input-bordered input-sm w-2/3"
                      value={id_person}
                      disabled
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
                      className=" input input-bordered input-sm w-2/3"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Deskripsi</span>
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder="Contoh: Halo, saya Alex, seorang profesional dengan pengalaman 2 tahun di bidang Software Engineer. Saya memiliki latar belakang pendidikan di..."
                        className=" input input-bordered input-sm w-2/3 h-20"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        style={{ resize: "none" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Tempat Lahir</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Tempat Lahir"
                      className=" input input-bordered input-sm w-2/3"
                      value={tempat_lahir}
                      onChange={(e) => setTempatLahir(e.target.value)}
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
                        className=" input input-bordered input-sm w-1/2"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                        required
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
                      className=" input input-bordered input-sm w-2/3"
                      value={usia}
                      onChange={(e) => setUsia(e.target.value)}
                      required
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
                            name="jenis_kelamin"
                            value="Laki-Laki"
                            checked={jenis_kelamin === "Laki-Laki"}
                            className="mr-1"
                            onChange={(e) => setJenisKelamin(e.target.value)}
                          />
                          Laki-laki
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="Perempuan"
                            checked={jenis_kelamin === "Perempuan"}
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
                        className=" input input-bordered input-sm w-1/12"
                        value={tinggi_badan}
                        onChange={(e) => setTinggiBadan(e.target.value)}
                        required
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
                        className=" input input-bordered input-sm w-1/12"
                        value={berat_badan}
                        onChange={(e) => setBeratBadan(e.target.value)}
                        required
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
                        className=" input input-bordered input-sm w-1/2 h-20"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        style={{ resize: "none" }}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-2">
                      <label className="w-1/3 mr-1">
                        <span className="label-text">Agama</span>
                      </label>
                      <select
                        className=" input input-sm input-bordered w-1/2"
                        size="1"
                        value={agama}
                        onChange={(e) => setAgama(e.target.value)}
                      >
                        <option disabled>Pilih Agama...</option>
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
                      className=" input input-bordered input-sm w-2/3"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      required
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
                        className=" input input-bordered input-sm w-2/3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        type="number"
                        placeholder="contoh: 0812783817283"
                        className=" input input-bordered input-sm w-2/3"
                        value={telp}
                        onChange={(e) => setTelp(e.target.value)}
                        required
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
                            className=" input input-bordered input-sm w-full"
                            value={instagram}
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
                            className=" input input-bordered input-sm w-full"
                            value={linkedin}
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
                            className=" input input-bordered input-sm w-full"
                            value={github}
                            onChange={(e) => setGithub(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>{msg}</p>
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
              </div>
            </div>
            <div className="container mx-auto text-center p-2"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataDiriEdit;
