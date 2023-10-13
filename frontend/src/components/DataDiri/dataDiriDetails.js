import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataDiriDetails = () => {
    const { id_akun } = useParams();
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

    const navigate = useNavigate();
    const baseUrl = 'http://localhost:5000/';

    useEffect(() => {
        getDetailPerson();
    }, [])

    const getDetailPerson = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/personal/${id_akun}`)
          console.log("Data : ", response.data)
          setFoto(response.data.foto)
          setNama(response.data.nama)
          setTempatLahir(response.data.tempat_lahir)
          setTanggalLahir(response.data.tanggal_lahir)
          setUsia(response.data.usia)
          setTinggiBadan(response.data.tinggi_badan)
          setBeratBadan(response.data.berat_badan)
          setAlamat(response.data.alamat)
          setAgama(response.data.agama)
          setJenisKelamin(response.data.jenis_kelamin)
          setTelp(response.data.telp)
          setEmail(response.data.email)
          setStatus(response.data.status)
          setInstagram(response.data.instagram)
          setLinkedin(response.data.linkedin)
          setGithub(response.data.github)
        } catch (error) {
          console.log(error.message)
        }
      }

    return (
      <div className="bg-base-200 h-auto box-border p-4">
        <div className="flex justify-center items-center mt-5">
          <h1>
            <b>Data Diri</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2 mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Nama</td>
                  <td colSpan={5} className="border px-4 py-2">{nama}</td>
                  <td rowSpan={6} className="border px-4 py-2">
                    <div className="flex items-center justify-center h-full">
                      <img src={`${baseUrl}${foto}`} alt="Foto profil" className="w-48 h-49 rounded-md item-center mask mask-squircle" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tempat Lahir</td>
                  <td colSpan={2} className="border px-4 py-2">{tempat_lahir}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tanggal Lahir</td>
                  <td colSpan={2} className="border px-4 py-2">{tanggal_lahir}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Usia</td>
                  <td colSpan={2} className="border px-4 py-2">{usia}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Jenis Kelamin</td>
                  <td colSpan={4} className="border px-4 py-2">{jenis_kelamin}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tinggi Badan</td>
                  <td colSpan={4} className="border px-4 py-2">{tinggi_badan}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Berat Badan</td>
                  <td colSpan={7} className="border px-4 py-2">{berat_badan}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Alamat</td>
                  <td colSpan={7} className="border px-4 py-2">{alamat}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Agama</td>
                  <td colSpan={7} className="border px-4 py-2">{agama}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Status</td>
                  <td colSpan={7} className="border px-4 py-2">{status}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Email</td>
                  <td colSpan={7} className="border px-4 py-2">{email}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Telepon</td>
                  <td colSpan={7} className="border px-4 py-2">{telp}</td>
                </tr>
                <tr>
                  <td rowSpan={4} className="border px-4 py-2 w-1/4">Media Sosial</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/5">Instagram</td>
                  <td colSpan={4} className="border px-4 py-2">{instagram}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/5">LinkedIn</td>
                  <td colSpan={4} className="border px-4 py-2">{linkedin}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/5">Github</td>
                  <td colSpan={4} className="border px-4 py-2">{github}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
}

export default DataDiriDetails