import React, {useState, useEffect} from 'react'
import axios from "axios";
import jwt_decode from 'jwt-decode';
import Sidebar from './Navigation/sidebar';
import { FaBars } from 'react-icons/fa';

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
      refreshToken();
  }, [])

  const refreshToken = async() => {
      try {
          const response = await axios.get('http://localhost:5000/token');
          const decoded = jwt_decode(response.data.accessToken)
          setNama(decoded.nama)
          localStorage.setItem('id', decoded.id_akun)
          console.log("Decoded response : ", decoded)
      } catch (error) {
          console.log(error.message);
      }
  }

  return (
    <div>
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} /> {/* Ikon hamburger */}
          </button>
          <div className="bg-white p-4 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <p className="text-lg">Hallooo {nama}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;