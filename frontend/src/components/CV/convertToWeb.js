import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ConvertToWeb = () => {
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const id_akun = localStorage.getItem('id');
  const username = localStorage.getItem('username_akun');

  const baseUrl = "http://localhost:5000/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/convert-web/`,
          { username: username, id_akun: id_akun }
        );
        console.log("Data : ", response.data);
        setData(response.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error.message);
        setNotFound(true);
      }
    };

    fetchData();
  }, [username, id_akun]);

  if (notFound) {
    return <div>Data not found</div>;
  }

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={`${baseUrl}${data.data.foto}`} className="rounded-lg mask mask-squircle shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Hallo I'm {data.data.nama}</h1>
            <p className="py-6">{data.data.status}</p>
            <button className="btn btn-primary">Download my CV</button>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center">
        <hr className="border-t border-black my-4 h-3 w-1/3 mr-5" />
        <h1 className=""> About </h1>
        <hr className="border-t border-black my-4 h-3 w-1/3 ml-5" />
      </div>
      <div className="flex justify-center">
        <ul className="steps steps-vertical">
          <li className="step h-32">Register</li>
          <li className="step h-32">Choose plan</li>
          <li className="step h-32">Purchase</li>
          <li className="step h-32">Receive Product</li>
        </ul>
      </div>
      <div className="items-center flex flex-col w-100">
        <div>
          <p>skill 1</p>
          <progress className="progress progress-secondary w-56 mb-3" value={50} max="100"></progress>
        </div>
      </div>
      <div>
        <div className="">
          <div class="grid grid-cols-4 gap-4">
            {data.data.portofolios && data.data.portofolios.map((portofolio,index) => ( 
             <img src={`${baseUrl}${portofolio.file_portofolio}`} alt={`portofolio ${index+1}`} key={index} className="rounded-box" />
          ))}
          </div> 
        </div>
      </div> */}

  <div>
      <div className="p-6 w-6/12 h-6/12 mx-auto bg-white border-2 border-pink-500 rounded-xl shadow-md flex items-center justify-center mt-5">
        <div className="text-xl font-medium text-gray-500 text-center">{data.data.nama}</div>
      </div>
      <div className="text-center p-2">{data.data.status}</div>
      <div>
        <img src={`${baseUrl}${data.data.foto}`} alt="" className="mask mask-squircle mx-auto mt-4 w-32 h-auto" />
      </div>
     <div className="flex flex-col w-full lg:flex-row items-stretch flex-wrap">
        <div className="flex flex-col items-end justify-start flex-grow rounded-box pr-4">
          <h2 className="text-xl font-bold text-right">Introduction</h2>
          <p className="text-sm mt-2 text-right">Halo, saya {data.data.nama} saya lahir pada tanggal {data.data.tanggal_lahir}<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <h2 className="text-xl font-bold mt-4">Pendidikan</h2>
          <div>
            <ul className="steps steps-vertical">
              {data.data.pendidikans.map((pendidikan, index) => (
                <li className="step step-primary" key={index}>{pendidikan.instansi_pendidikan}</li>
              ))}x
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div className="flex flex-col items-start justify-start flex-grow h-32 rounded-box pl-4">
          <h2 className="text-xl font-bold">Skill</h2>
          <div className="flex items-start space-y-2 ml-5" >
          {data.data.skills.map((skill, index) => (
            <div className="mr-3" key={index}>
              <span className="font-medium mr-2" key={index}>{skill.nama_skill}</span>
              <div className="radial-progress text-pink-600" style={{"--value": skill.capability, "--thickness": "2px"}}>{skill.capability}%</div>
            </div>
          ))}
          </div>
          <h2 className="text-xl font-bold mt-5">Organisasi</h2>
            {data.data.organisasis.map((organisasi, index) => (
              <div key={index}>
                <p className="font-medium">{organisasi.nama_organisasi}</p>
                <p className="text-sm">{organisasi.posisi}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
      <h2 className="text-xl font-bold text-center">Portofolio</h2>
      <div className="flex justify-center mt-4 p-4 border-2 border-gray-300 bg-white rounded-xl w-8/12 mx-auto mb-20">
      <div class="grid grid-cols-4 gap-4 mt-4">
        {data.data.portofolios && data.data.portofolios.map((portofolio,index) => ( 
          <div key={index} className="rounded-box">
            <img src={`${baseUrl}${portofolio.file_portofolio}`} alt={`portofolio ${index+1}`} className="w-full" />
            <p className="font-medium mt-2">{portofolio.nama_portofolio}</p>
            <p className="text-sm mt-1">{portofolio.deskripsi_portofolio}</p>
          </div>
        ))}
      </div>
    </div>
    
  </div>  

    
    

  )
}

export default ConvertToWeb