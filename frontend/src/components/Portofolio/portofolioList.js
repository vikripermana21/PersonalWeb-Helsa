import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const PortofolioList = () => {
  const { id_person } = useParams();
  const [portofolios, setPortofolios] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    getPortofolio();
  }, [])

  const getPortofolio = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/portofolio/${id_person}`)
      console.log("Berhasil ambil data portofolio dari id_person = ", id_person)
      console.log("Data : ", response.data)
      setPortofolios(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const redirectToPortofolioDetails = (id_portofolio) => {
    navigate(`/portofolio/${id_person}/${id_portofolio}`);
  }

  const redirectToEditPortofolio = (id_portofolio) => {
    navigate(`/portofolio/${id_person}/edit/${id_portofolio}`);
  }

  const redirectToAddPortofolio = () => {
    navigate('/portofolio/create')
  }

  const deletePortoHandler = async(id_portofolio) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if(confirmDelete){
      try {
        await axios.delete(`http://localhost:5000/portofolio/${id_portofolio}`)
        window.location.reload();
        console.log("Data berhasil dihapus")
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <div className="bg-base-200 h-auto box-border p-4">
        <div className="flex justify-center items-center mt-5">
          <h1>
            <b>Portofolio</b>
          </h1>
        </div>
        
        <div className="flex justify-center items-center p-2 mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
            <div className="flex justify-end items-center p-2 mb-4">
              <button onClick={redirectToAddPortofolio} className="btn btn-success">
                Tambah Portofolio
              </button>
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nama Portofolio</th>
                  <th className="border px-4 py-2">Deskripsi Portofolio</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {portofolios.map((portofolio) => (
                  <tr key={portofolio.id_portofolio}>
                    <td className="border px-4 py-2">{portofolio.nama_portofolio}</td>
                    <td className="border px-4 py-2">{portofolio.deskripsi_portofolio}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        className="btn btn-sm btn-success inline-block"
                        onClick={() => redirectToPortofolioDetails(portofolio.id_portofolio)}
                      >
                        Show Details
                      </button>
                      <button
                        className="btn btn-sm btn-primary ml-3"
                        onClick={() => redirectToEditPortofolio(portofolio.id_portofolio)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error ml-3"
                        onClick={() => deletePortoHandler(portofolio.id_portofolio)}
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

export default PortofolioList;
