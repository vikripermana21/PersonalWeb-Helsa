import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-500 h-screen text-white p-4 flex flex-col">
      <div className="mb-8 text-2xl font-semibold">CV Maker</div>
      <ul className="space-y-2 flex-1">
        <li>
          <Link to="/datadiri/:id_person" className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Data Diri
          </Link>
        </li>
        <li>
          <Link to="/pendidikan/:id_person" className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Pendidikan
          </Link>
        </li>
        <li>
          <Link to="/organisasi/:id_person" className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Organisasi
          </Link>
        </li>
        <li>
          <Link to="/portofolio/:id_person" className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Portofolio
          </Link>
        </li>
        <li>
          <Link to="/skill/:id_person" className="flex items-center p-2 space-x-2 rounded-md hover:bg-blue-400" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            </svg>
            Skill
          </Link>
        </li>
      </ul>
      <div>
        <button className="p-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
