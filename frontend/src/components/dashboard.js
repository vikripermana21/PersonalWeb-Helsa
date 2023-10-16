import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "./Navigation/sidebar";
import { FaBars } from "react-icons/fa";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import Navbar2 from './Navigation/navbar2';

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded = jwt_decode(response.data.accessToken);
      setNama(decoded.nama);

      const id_person = decoded.id_akun;

      const personalResponse = await axios.get(
        `http://localhost:5000/personal/${id_person}`
      );
      const educationResponse = await axios.get(
        `http://localhost:5000/pendidikan/${id_person}`
      );
      const organizationResponse = await axios.get(
        `http://localhost:5000/organisasi/${id_person}`
      );
      const skillResponse = await axios.get(
        `http://localhost:5000/skill/${id_person}`
      );
      const portfolioResponse = await axios.get(
        `http://localhost:5000/portofolio/${id_person}`
      );

      setCvData({
        personal: personalResponse.data,
        education: educationResponse.data,
        organization: organizationResponse.data,
        skills: skillResponse.data,
        portfolio: portfolioResponse.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const generatePDF = () => {
    if (cvData) {
      const doc = new jsPDF();
  
      doc.setFontSize(14);
      doc.text("Curiculum Vitae (CV)", 105, 15, null, null, "center");
  
      // Data Diri
      doc.setFontSize(16);
      doc.text("Data Diri", 20, 30);
  
      const personalInfo = [
        "Nama: " + cvData.personal.nama,
        "Tempat Lahir: " + cvData.personal.tempat_lahir,
        "Tanggal Lahir: " + cvData.personal.tanggal_lahir,
        "Usia: " + cvData.personal.usia,
        "Jenis Kelamin: " + cvData.personal.jenis_kelamin,
        "Tinggi Badan: " + cvData.personal.tinggi_badan,
        "Berat Badan: " + cvData.personal.berat_badan,
        "Agama: " + cvData.personal.agama,
        "Status: " + cvData.personal.status,
        "Alamat: " + cvData.personal.alamat,
        "Email: " + cvData.personal.email,
        "Telepon: " + cvData.personal.telp,
        "Instagram: " + cvData.personal.instagram,
        "LinkedIn: " + cvData.personal.linkedin,
        "Github: " + cvData.personal.github,
      ];
  
      doc.setFontSize(11);
      doc.text(20, 40, personalInfo);
  
      let startY = 125;
  
      // Pendidikan
      doc.setFontSize(16);
      doc.text("Pendidikan", 20, startY);
  
      doc.autoTable({
        head: [["Instansi", "Jurusan", "Mulai Ajaran", "Akhir Ajaran"]],
        body: cvData.education.map((education) => [
          education.instansi_pendidikan,
          education.jurusan,
          education.tahun_mulai_ajaran,
          education.tahun_akhir_ajaran,
        ]),
        startY: startY + 5,
        theme: 'grid',
        styles: {
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
        },
      });
  
      // Organisasi
      startY = doc.autoTable.previous.finalY + 20;
      doc.setFontSize(16);
      doc.text("Organisasi", 20, startY);
  
      doc.autoTable({
        head: [["Nama Organisasi", "Posisi", "Mulai Menjabat", "Akhir Menjabat"]],
        body: cvData.organization.map((organization) => [
          organization.nama_organisasi,
          organization.posisi,
          organization.tanggal_mulai_menjabat,
          organization.tanggal_akhir_menjabat,
        ]),
        startY: startY + 5,
        theme: 'grid',
        styles: {
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
        },
      });
  
      // Skill
      startY = doc.autoTable.previous.finalY + 20;
      doc.setFontSize(16);
      doc.text("Keterampilan", 20, startY);
  
      doc.autoTable({
        head: [["Nama Skill", "Capability"]],
        body: cvData.skills.map((skill) => [skill.nama_skill, skill.capability + "%"]),
        startY: startY + 5,
        theme: 'grid',
        styles: {
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
        },
      });
  
      // Portofolio
      startY = doc.autoTable.previous.finalY + 20;
      doc.setFontSize(16);
      doc.text("Portofolio", 20, startY);
  
      doc.autoTable({
        head: [["Nama Portofolio", "Deskripsi"]],
        body: cvData.portfolio.map((portfolio) => [portfolio.nama_portofolio, portfolio.deskripsi_portofolio]),
        startY: startY + 5,
        theme: 'grid',
        styles: {
          lineWidth: 0.1,
          lineColor: [0, 0, 0],
        },
      });
  
      const pdfDataUri = doc.output("datauristring");
  
      const newTab = window.open();
      newTab.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe');
    }
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