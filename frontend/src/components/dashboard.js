import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "./Navigation/sidebar";
import { FaBars } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import jsPDF from "jspdf";

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [cvVisible, setCvVisible] = useState(false);

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded = jwt_decode(response.data.accessToken);
      setNama(decoded.nama);
      localStorage.setItem("id", decoded.id_akun);

      const id_person = decoded.id_akun;

      const personalResponse = await axios.get(
        `http://localhost:5000/personal`
      );
      const personalData = personalResponse.data;

      const educationResponse = await axios.get(
        `http://localhost:5000/pendidikan/${id_person}`
      );
      const educationData = educationResponse.data;

      const organizationResponse = await axios.get(
        `http://localhost:5000/organisasi/${id_person}`
      );
      const organizationData = organizationResponse.data;

      const skillResponse = await axios.get(
        `http://localhost:5000/skill/${id_person}`
      );
      const skillData = skillResponse.data;

      const portfolioResponse = await axios.get(
        `http://localhost:5000/portofolio/${id_person}`
      );
      const portfolioData = portfolioResponse.data;

      setCvData({
        personal: personalData,
        education: educationData,
        organization: organizationData,
        skills: skillData,
        portfolio: portfolioData,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const generatePDF = () => {
    if (cvData) {
      const doc = new jsPDF();
  
      // Tambahkan konten ke PDF
      doc.setFontSize(16);
      doc.text("Curriculum Vitae", 105, 15, null, null, "center");
  
      // Data diri
      doc.setFontSize(14);
      doc.text("Data Diri", 20, 30);
      doc.setFontSize(12);
      doc.text(`Nama: ${cvData.personal.nama}`, 20, 40);
      doc.text(`Alamat: ${cvData.personal.alamat}`, 20, 50);
      doc.text(`Email: ${cvData.personal.email}`, 20, 60);
  
      // Tambahkan data pendidikan
      doc.setFontSize(14);
      doc.text("Pendidikan", 20, 80);
      doc.setFontSize(12);
      let educationY = 90;
      cvData.education.forEach((education) => {
        doc.text(`Instansi: ${education.instansi_pendidikan}`, 20, educationY);
        doc.text(`Jurusan: ${education.jurusan}`, 20, educationY + 10);
        educationY += 20;
      });
  
      // Tambahkan data organisasi
      doc.setFontSize(14);
      doc.text("Organisasi", 20, educationY + 20);
      doc.setFontSize(12);
      let organizationY = educationY + 30;
      cvData.organization.forEach((organization) => {
        doc.text(
          `Nama Organisasi: ${organization.nama_organisasi}`,
          20,
          organizationY
        );
        doc.text(`Posisi: ${organization.posisi}`, 20, organizationY + 10);
        doc.text(
          `Tanggal Mulai Menjabat: ${organization.tanggal_mulai_menjabat}`,
          20,
          organizationY + 20
        );
        doc.text(
          `Tanggal Akhir Menjabat: ${organization.tanggal_akhir_menjabat}`,
          20,
          organizationY + 30
        );
        organizationY += 40;
      });
  
      // Tambahkan data skill
      doc.setFontSize(14);
      doc.text("Skill", 20, organizationY + 20);
      doc.setFontSize(12);
      let skillY = organizationY + 30;
      cvData.skills.forEach((skill) => {
        doc.text(`Nama Skill: ${skill.nama_skill}`, 20, skillY);
        doc.text(`Capability Skill: ${skill.capability}%`, 20, skillY + 10);
        skillY += 20;
      });
  
      // Tambahkan data portofolio
      doc.setFontSize(14);
      doc.text("Portofolio", 20, skillY + 20);
      doc.setFontSize(12);
      let portofolioY = skillY + 30;
      cvData.portfolio.forEach((portofolio) => {
        doc.text(
          `Nama Portofolio: ${portofolio.nama_portofolio}`,
          20,
          portofolioY
        );
        doc.text(
          `Deskripsi Portofolio: ${portofolio.deskripsi_portofolio}`,
          20,
          portofolioY + 10
        );
        portofolioY += 20;
      });
  
      // Simpan file PDF
      const pdfDataUri = doc.output("datauristring");
  
      // Buka PDF di tab baru dengan iframe
      const newWindow = window.open();
      newWindow.document.write(
        '<iframe src="data:application/pdf;base64,' + btoa(pdfDataUri) + '"></iframe>'
      );
    }
  };  

  return (
    <div>
      <div className={`bg-gray-200 ${isSidebarVisible ? "" : "h-screen"} flex`}>
        {isSidebarVisible && <Sidebar />}
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <button
            className="p-2 bg-blue-500 text-white rounded-md mb-4"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <FaBars size={24} />
          </button>
          <div className="bg-white p-4 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <p className="text-lg">Hello, {nama}</p>
            {cvData && cvVisible ? (
              <Document file={cvData}>
                <Page pageNumber={1} />
              </Document>
            ) : (
              <button
                onClick={generatePDF}
                className="btn btn-success" // Use the desired styling class
              >
                Generate CV
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
