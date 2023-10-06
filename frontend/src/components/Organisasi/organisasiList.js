import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const OrganisasiList = () => {
  const { id_person } = useParams();
  const [organizations, setOrganizations] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    getOrganisasi();
  }, [])

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/organisasi/${id_person}`)
      console.log("Berhasil ambil data organisasi dari id_person = ", id_person)
      console.log("Data : ", response.data)
      setOrganizations(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  // const redirectToPortofolioDetails = (id_portofolio) => {
  //   navigate(`/portofolio/${id_person}/${id_portofolio}`);
  // }

  return (
    <div>
      <div className="bg-base-200 h-auto box-border p-4">
        <div className="flex justify-center items-center mt-5">
          <h1>
            <b>Organisasi</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2 mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nama Organisasi</th>
                  <th className="border px-4 py-2">Posisi</th>
                  <th className="border px-4 py-2">Tanggal Mulai Menjabat</th>
                  <th className="border px-4 py-2">Tanggal Akhir Menjabat</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((organisasi) => (
                  <tr key={organisasi.id_organisasi}>
                    <td className="border px-4 py-2">{organisasi.nama_organisasi}</td>
                    <td className="border px-4 py-2">{organisasi.posisi}</td>
                    <td className="border px-4 py-2">{organisasi.tanggal_mulai_menjabat}</td>
                    <td className="border px-4 py-2">{organisasi.tanggal_akhir_menjabat}</td>
                    <td className="border px-4 py-2 text-center">
                      {/* <button
                        className="btn btn-sm btn-accent inline-block"
                        onClick={() => redirectToPortofolioDetails(portofolio.id_portofolio)}
                      >
                        Show Details
                      </button> */}
                      <button
                        className="btn btn-sm btn-primary ml-3"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error ml-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisasiList;
