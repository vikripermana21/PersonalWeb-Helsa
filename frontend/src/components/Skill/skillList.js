import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Sidebar from "../Navigation/sidebar";
import Navbar2 from "../Navigation/navbar2";

const SkillList = () => {
  const { id_person } = useParams();
  const [skills, setSkills] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getSkill();
  }, [])

  const getSkill = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/skill/${id_person}`)
      console.log("Berhasil ambil data skill dari id_person = ", id_person)
      console.log("Data : ", response.data)
      setSkills(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const redirectToEditSkill = (id_skill) => {
    navigate(`/skill/${id_person}/edit/${id_skill}`);
  }

  const redirectToAddSkill = () => {
    navigate('/skill/create')
  }

  const deleteSkillHandler = async(id_skill) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if(confirmDelete){
      try {
        await axios.delete(`http://localhost:5000/skill/${id_skill}`)
        window.location.reload();
        console.log("Data berhasil dihapus")
      } catch (error) {
        console.log(error);
      }
    }
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return(
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
                <b>Skill</b>
              </h1>
            </div>
            <div className="flex justify-center items-center p-2 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
                <div className="flex justify-end items-center p-2 mb-4">
                  <button onClick={redirectToAddSkill} className="btn btn-success">
                    Tambah Skill
                  </button>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Nama Skill</th>
                      <th className="border px-4 py-2">Capability Skill</th>
                      <th className="border px-4 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr key={skill.id_skill}>
                        <td className="border px-4 py-2">{skill.nama_skill}</td>
                        <td className="border px-4 py-2">{skill.capability}%</td>
                        <td className="border px-4 py-2 text-center">
                          <button
                            className="btn btn-sm btn-success ml-3"
                            onClick={() => redirectToEditSkill(skill.id_skill)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger ml-3"
                            onClick={() => deleteSkillHandler(skill.id_skill)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillList;
