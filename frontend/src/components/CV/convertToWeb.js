import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ConvertToWeb = () => {
  const [data, setData] = useState(null);
  const {username} = useParams();
  const baseUrl = "http://localhost:5000/";

  const [activeView, setActiveView] = useState('first');

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);
      console.log("Data : ", response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [username])

  // Fungsi untuk mengalihkan antara tampilan pertama dan kedua
  const handleSelect = (eventKey) => {
    // Atur tampilan aktif berdasarkan item yang dipilih
    setActiveView(eventKey);
  };

  const dropdownStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  };

  return (
    <div>
      {/* <button onClick={toggleView}>Toggle View</button> */}
      <div style={dropdownStyle}>
        <DropdownButton id="dropdown-basic-button" title="Switch View" variant="success" onSelect={handleSelect}>
          <Dropdown.Item eventKey="first" style={{ width: '100%', textAlign: 'center' }}>First</Dropdown.Item>
          <Dropdown.Item eventKey="second" style={{ width: '100%', textAlign: 'center' }}>Second</Dropdown.Item>
          <Dropdown.Item eventKey="third" style={{ width: '100%', textAlign: 'center' }}>Third</Dropdown.Item>
        </DropdownButton>
      </div>
      {activeView === 'first' ? (
        data ? (
          <div>
            {/* Tampilan pertama */}
            <div className="p-6 w-6/12 h-6/12 mx-auto bg-white border-2 border-pink-500 rounded-xl shadow-md flex items-center justify-center mt-5">
              <div className="text-xl font-medium text-gray-500 text-center">
                {data.data_diri.nama}
              </div>
            </div>
            <div className="text-center p-2">{data.data_diri.status}</div>
            <div>
              <img
                src={`${baseUrl}${data.data_diri.foto}`}
                alt=""
                className="mask mask-squircle mx-auto mt-4 w-32 h-auto"
              />
            </div>
            <div className="flex flex-col w-full lg:flex-row items-stretch flex-wrap">
              <div className="flex flex-col items-end justify-start flex-grow rounded-box pr-4">
                <h2 className="text-xl font-bold text-right">Introduction</h2>
                <p className="text-sm mt-2 text-right">
                  Halo, saya {data.data_diri.nama} saya lahir pada tanggal {data.data_diri.tanggal_lahir}<br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <h2 className="text-xl font-bold mt-4">Pendidikan</h2>
                <div>
                  <ul className="steps steps-vertical">
                    {data.data_diri.pendidikans.map((pendidikan, index) => (
                      <li className="step step-primary" key={index}>
                        {pendidikan.instansi_pendidikan}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="flex flex-col items-start justify-start flex-grow h-32 rounded-box pl-4">
                <h2 className="text-xl font-bold">Skill</h2>
                <div className="flex items-start space-y-2 ml-5">
                  {data.data_diri.skills.map((skill, index) => (
                    <div className="mr-3" key={index}>
                      <span className="font-medium mr-2">{skill.nama_skill}</span>
                      <div
                        className="radial-progress text-pink-600"
                        style={{
                          "--value": skill.capability,
                          "--thickness": "2px"
                        }}
                      >
                        {skill.capability}%
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-bold mt-5">Organisasi</h2>
                {data.data_diri.organisasis.map((organisasi, index) => (
                  <div key={index}>
                    <p className="font-medium">{organisasi.nama_organisasi}</p>
                    <p className="text-sm">{organisasi.posisi}</p>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-bold text-center">Portofolio</h2>
            <div className="flex justify-center mt-4 p-4 border-2 border-gray-300 bg-white rounded-xl w-8/12 mx-auto mb-20">
              <div className="grid grid-cols-4 gap-4 mt-4">
                {data.data_diri.portofolios.map((portofolio, index) => (
                  <div key={index} className="rounded-box">
                    <img
                      src={`${baseUrl}${portofolio.file_portofolio}`}
                      alt={`portofolio ${index + 1}`}
                      className="w-full"
                    />
                    <p className="font-medium mt-2">{portofolio.nama_portofolio}</p>
                    <p className="text-sm mt-1">{portofolio.deskripsi_portofolio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )
      ) : activeView === 'second' ?(
        // Web 2
        <div>Halloww ini page 2</div>
      ) : activeView === 'third' ?(
        <div>Halloww ini page 3</div>
      ): null}
    </div>
  );
}

export default ConvertToWeb