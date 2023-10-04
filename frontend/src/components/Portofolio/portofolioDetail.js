import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PortofolioDetail = () => {
    const { id_person, id_portofolio } = useParams();
    const [nama_portofolio, setNamaPortofolio] = useState("");
    const [deskripsi_portofolio, setDeskripsiPortofolio] = useState("");
    const [file_portofolio, setFilePortofolio] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        getDetailPortofolio();
    }, [])

    const getDetailPortofolio = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/portofolio/${id_person}/${id_portofolio}`)
          console.log("Berhasil ambil data portofolio dari id_person = ", id_person, " dan id_portofolio = ", id_portofolio)
          console.log("Data : ", response.data)
          setNamaPortofolio(response.data.nama_portofolio)
          setDeskripsiPortofolio(response.data.deskripsi_portofolio)
          setFilePortofolio(response.data.file_portofolio)
        //   setPortofolios(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }

    return (
        <div>
          <div className="bg-base-200 h-screen box-border p-4">
            <div className="flex justify-center items-center mt-5">
              <h1>
                <b>Detail Portofolio</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">Nama Portofolio</td>
                      <td colSpan={2} className="border px-4 py-2">
                        {nama_portofolio}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">Deskripsi Portofolio</td>
                      <td colSpan={2} className="border px-4 py-2">
                        {deskripsi_portofolio}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 w-1/4">File Portofolio</td>
                      <td colSpan={2} className="border px-4 py-2">
                        {file_portofolio}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}

export default PortofolioDetail