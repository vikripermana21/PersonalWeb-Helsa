import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DataDiriList = () => {
  const [data_diri, setDataDiri] = useState([]);
  const [msg, setMsg] = useState("");
  

  const navigate = useNavigate();
  const baseUrl = 'http://localhost:5000/';

  useEffect(() => {
    getDataDiri();
  }, [])

  const token = localStorage.getItem('token');

  const getDataDiri = async () => {
    try {
      const response = await axios.get("http://localhost:5000/personal", 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Data : ", response.data)
      setDataDiri(response.data)
    } catch (error) {
        setMsg(error.response.data.error);
        console.log(error);
    }
  }

  return (
    <div>
      <div className="bg-base-200 h-auto box-border p-4">
        <div className="flex justify-center items-center mt-5">
          <h1>
            <b>Data Diri</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2 mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Foto Profil</th>
                    <th>Nama</th>
                    <th>Tanggal Lahir</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data_diri.map((personal) => (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={`${baseUrl}${personal.foto}`}  alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{personal.username}</div>
                            <div className="text-sm opacity-50">{personal.nama}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {personal.nama}
                      </td>
                      <td>
                        {personal.tanggal_lahir}
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                      </th>
                    </tr>
                  ))}
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDiriList;