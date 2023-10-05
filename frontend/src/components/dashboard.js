import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    refreshToken();
  }, [])

  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async() => {
    try {
      // Mengambil token akses dari penyimpanan lokal
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get('http://localhost:5000/token', {
        headers: {
          'Authorization': `Bearer ${accessToken}` // Sertakan token akses dalam header
        }
      });

      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken)
      setNama(decoded.nama)
      console.log(decoded.nama)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* Sidebar */}

        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Sidebar</label>
          </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
              <ul class="menu p-8 w-80 min-h-full bg-info-content text-white">
                {/* Sidebar content here */}
                <li><a>Data Diri</a></li>
                <li><a>Pendidikan</a></li>
                <li><a>Organisasi</a></li>
                <li><a>Skill</a></li>
                <li><a>Portofolio</a></li>
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}

        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#" onClick={Logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h1>
            Halooo {nama}
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
