import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const SkillEdit = () => {
  const [nama_skill, setNamaSkill] = useState("");
  const [capability, setCapability] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { id_skill, id_person } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getSkill();
  }, [])

  const skillEditHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/skill/${id_skill}`, {
        nama_skill, capability
      });

      navigate(`/skill/${id_person}`)
      console.log("Skill berhasil diubah")
      console.log("Data setelah diupdate: ", response)
    } catch (error) {
      console.log(error);
    }
  }

  const getSkill = async() => {
    try {
      const response = await axios.get(`http://localhost:5000/skill/${id_person}/${id_skill}`)
      console.log("Data Skill : ", response.data)
      setNamaSkill(response.data.nama_skill)
      setCapability(response.data.capability)
    } catch (error) {
      console.log(error);
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Navbar2 toggleSidebar={toggleSidebar}/>
      <div className={`bg-gray-200 ${isSidebarVisible ? '' : 'h-screen'} flex`}>
        {isSidebarVisible && <Sidebar />}
        {/* Main Content */}
        <main className={`flex-1 p-4 ${isSidebarVisible ? '' : ''}`}>
          {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
          <div className="bg-gray-200 h-screen box-border p-4">
            <div className="flex justify-center items-center">
              <h1>
                <b>Edit Skill</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <form onSubmit={skillEditHandler}>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Id Person</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Id Person"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      value={id_person}
                      disabled
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Nama</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Skill"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      value={nama_skill}
                      onChange={(e) => setNamaSkill(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 flex items-center">
                    <label className="w-1/3 mr-2">
                      <span className="label-text">Capability</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Capability Percent"
                      className="bg-gray-300 input input-bordered input-sm w-2/3"
                      value={capability}
                      onChange={(e) => setCapability(e.target.value)}
                    />
                  </div>
                  <div className="mt-10 flex justify-center items-center">
                    <button className="btn btn-error btn-sm mr-2 w-1/3">Cancel</button>
                    <button className="btn btn-success btn-sm w-1/3">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillEdit;
