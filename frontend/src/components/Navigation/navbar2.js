// Navbar2.js
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar2 = ({ toggleSidebar }) => {
  return (
    <div className="navbar rounded-md mb-2" style={{ backgroundColor: '#973AE9' }}>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <div
            className="p-2 text-white rounded-md mb-4"
            style={{ backgroundColor: '#B45EF4' }}
            onClick={toggleSidebar}
          >
            <FaBars size={24} /> {/* Ikon hamburger */}
          </div>
        </button>
      </div>
      <div className="flex-1">
        <a className="normal-case text-white text-xl">Dashboard</a>
      </div>
    </div>
  );
};

export default Navbar2;
