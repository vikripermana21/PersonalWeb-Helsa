import React, { useState, useEffect } from "react";
import axios from "axios";

const PendidikanList = () => {
  const [pendidikanData, setPendidikanData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your API endpoint to fetch Pendidikan data
    axios.get("http://localhost:5000/pendidikan/1")
      .then((response) => {
        // Update the component's state with the fetched data
        setPendidikanData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Pendidikan data:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <div className="bg-base-200 h-auto box-border p-4">
        <div className="flex justify-center items-center mt-5">
          <h1>
            <b>Pendidikan</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2 mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 w-1/4">Instansi Pendidikan</th>
                  <th className="border px-4 py-2 w-1/4">Jurusan</th>
                  <th className="border px-4 py-2 w-1/4">Tahun Mulai</th>
                  <th className="border px-4 py-2 w-1/4">Tahun Akhir</th>
                </tr>
              </thead>
              <tbody>
                {pendidikanData.map((pendidikan) => (
                  <tr key={pendidikan.id_pendidikan}>
                    <td className="border px-4 py-2">{pendidikan.instansi_pendidikan}</td>
                    <td className="border px-4 py-2">{pendidikan.jurusan}</td>
                    <td className="border px-4 py-2">{pendidikan.tahun_mulai_ajaran}</td>
                    <td className="border px-4 py-2">{pendidikan.tahun_akhir_ajaran}</td>
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

export default PendidikanList;