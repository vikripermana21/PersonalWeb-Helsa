import React, { useState, useEffect } from "react";
import axios from "axios";

const DataDiriList = () => {
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
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Nama</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Helsa Alika
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tempat Lahir</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Cimahi
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tanggal Lahir</td>
                  <td colSpan={2} className="border px-4 py-2">
                    13 Mei 2003
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Jenis Kelamin</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Perempuan
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Tinggi Badan</td>
                  <td colSpan={2} className="border px-4 py-2">
                    160
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Berat Badan</td>
                  <td colSpan={2} className="border px-4 py-2">
                    45
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Alamat</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Cimahi
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Agama</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Islam
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Status</td>
                  <td colSpan={2} className="border px-4 py-2">
                    Mahasiswa
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Email</td>
                  <td colSpan={2} className="border px-4 py-2">
                    helsa@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Telepon</td>
                  <td colSpan={2} className="border px-4 py-2">
                    +6281572548494
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4">Media Sosial</td>
                  <td className="border px-4 py-2 w-1/5">Instagram</td>
                  <td className="border px-4 py-2">helsalika13</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4"></td>
                  <td className="border px-4 py-2 w-1/5">LinkedIn</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 w-1/4"></td>
                  <td className="border px-4 py-2 w-1/5">Github</td>
                  <td className="border px-4 py-2">helsaalika</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDiriList;
