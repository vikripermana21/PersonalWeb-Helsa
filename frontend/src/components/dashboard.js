import React, {useState, useEffect} from 'react'
import axios from "axios";
import jwt_decode from 'jwt-decode';
import Sidebar from './Navigation/sidebar';
import Navbar2 from './Navigation/navbar2';
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
          console.log("Decoded response : ", decoded)
      } catch (error) {
          console.log(error.message);
      }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Navbar */}         
      <Navbar2 toggleSidebar={toggleSidebar}/>
      
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
        
          {/* Content */}  
          <div className="bg-white h-screen p-4 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Let's Make Your Own CV !</h1>
            <p className="text-lg">Hallooo {nama} !</p>
          </div>
        </main>
      </div>
      <button className="btn btn-primary" style={{ position: 'absolute', bottom: '50px', left: '350px'}}>Generate ke Web</button>
      <button className="btn btn-secondary" style={{ position: 'absolute', bottom: '50px', left: '510px'}}>Generate ke PDF</button>
    </div>
  );
};

export default Dashboard;