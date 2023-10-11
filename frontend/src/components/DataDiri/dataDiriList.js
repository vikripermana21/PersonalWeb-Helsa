import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Navigation/sidebar";

const DataDiriList = () => {
  const { id_person } = useParams();
  const [dataDiri, setDataDiri] = useState({});
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataDiri();
  }, []);

  const fetchDataDiri = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/datadiri/${id_person}`);
      console.log("Berhasil ambil data diri dari id_person =", id_person);
      console.log("Data:", response.data);
      setDataDiri(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigateToEditDataDiri = () => {
    navigate(`/datadiri/edit/${id_person}`);
  };

  return (
    <div>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-gray-200 h-auto box-border p-4">
            <div className="flex justify-center items-center">
              <h1>
                <b>Data Diri</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <div className="mb-4 flex items-center">
                  <label className="w-1/3 mr-2">
                    <span className="label-text">Nama</span>
                  </label>
                  <span className="text-black">{dataDiri.nama}</span>
                </div>
                {/* Add more fields here */}
                <div className="mt-4">
                  <button
                    onClick={navigateToEditDataDiri}
                    className="btn btn-primary"
                  >
                    Edit Data Diri
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataDiriList;