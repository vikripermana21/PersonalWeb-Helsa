import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Sidebar from "./Navigation/sidebar";
import { FaBars } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Navbar2 from "./Navigation/navbar2";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const [cvData, setCvData] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const generateToWebHandler = async () => {
    try {
      const username = localStorage.getItem("username_akun");
      const id_akun = localStorage.getItem("id");

      const response = await axios.get(
        `http://localhost:5000/convert-web/${username}`
      );

      console.log(response);
      navigate(`/${username}`);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const generatePDF = () => {
    if (!cvData) {
      alert("CV data is not available. Please wait for the data to load.");
      return;
    }

    const doc = new jsPDF();

    // Set document properties (optional)
    doc.setProperties({
      title: "My CV",
      author: "Your Name",
    });

    // Set the initial y-coordinate
    let startY = 10;

    // Define a function to add data and table with a header
    function addDataAndTable(title, data, header) {
      if (startY + 20 > 280) {
        doc.addPage();
        startY = 10;
      }
      doc.text(title, 10, startY);
      startY += 10;
      doc.autoTable({
        head: [header], // Header row
        body: data,
        startY,
        theme: "striped",
      });
      startY = doc.autoTable.previous.finalY + 10;
    }

    // Add personal data to the CV
    const personalHeader = ["Attribute", "Value"];
    const personalData = [
      ["Name", cvData.personal.nama],
      ["Date of Birth", cvData.personal.tanggal_lahir],
      ["Place of Birth", cvData.personal.tempat_lahir],
      ["Age", cvData.personal.usia],
      ["Height", cvData.personal.tinggi_badan],
      ["Weight", cvData.personal.berat_badan],
      ["Address", cvData.personal.alamat],
      ["Religion", cvData.personal.agama],
      ["Gender", cvData.personal.jenis_kelamin],
      ["Phone", cvData.personal.telp],
      ["Email", cvData.personal.email],
      ["Marital Status", cvData.personal.status],
      ["Instagram", cvData.personal.instagram],
      ["LinkedIn", cvData.personal.linkedin],
      ["GitHub", cvData.personal.github],
    ];
    addDataAndTable("Personal Information", personalData, personalHeader);

    // Add education data to the CV
    const educationHeader = ["Institution", "Major", "Start Year", "End Year"];
    const educationData = cvData.education.map((edu) => [
      edu.instansi_pendidikan,
      edu.jurusan,
      edu.tahun_mulai_ajaran,
      edu.tahun_akhir_ajaran,
    ]);
    addDataAndTable("Education", educationData, educationHeader);

    // Add organization data to the CV
    const organizationHeader = [
      "Organization",
      "Position",
      "Start Date",
      "End Date",
    ];
    const organizationData = cvData.organization.map((org) => [
      org.nama_organisasi,
      org.posisi,
      org.tanggal_mulai_menjabat,
      org.tanggal_akhir_menjabat,
    ]);
    addDataAndTable("Organizations", organizationData, organizationHeader);

    // Add skills data to the CV
    const skillsHeader = ["Skill", "Capability"];
    const skillsData = cvData.skills.map((skill) => [
      skill.nama_skill,
      skill.capability + "%",
    ]);
    addDataAndTable("Skills", skillsData, skillsHeader);

    // Add portfolio data to the CV
    const portfolioHeader = ["Portfolio", "Description"];
    const portfolioData = cvData.portfolio.map((portfolio) => [
      portfolio.nama_portofolio,
      portfolio.deskripsi_portofolio,
    ]);
    addDataAndTable("Portfolio", portfolioData, portfolioHeader);

    const pdfDataUri = doc.output("datauristring");

    const newTab = window.open();
    newTab.document.write(
      '<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe'
    );
  };

  return (
    <div>
      {/* Navbar */}
      <div>
        <main className={`flex-1 p-4 ${isSidebarVisible ? "" : ""}`}>
          <div className="bg-white p-4 rounded-lg shadow-md ">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <p className="text-lg">Hello, {nama}</p>
          </div>

          {cvData ? (
            <div className="flex flex-row">
              <div className="bg-white p-4 rounded-lg shadow-md w-1/4 mt-5 mr-4">
                <p className="text-lg">Generate CV to Web</p>
                <button
                  onClick={generateToWebHandler}
                  className="btn btn-outline btn-success btn-sm mt-2"
                >
                  Click
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md w-1/4 mt-5">
                <p className="text-lg">Generate CV to PDF</p>
                <button
                  onClick={generatePDF}
                  className="btn btn-outline btn-success btn-sm mt-2"
                >
                  Click
                </button>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
