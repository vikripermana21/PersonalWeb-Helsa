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
    <div>{data.data.nama}
      {data.data.portofolios.map((portfolio, index) => (
          <img src={`${baseUrl}${portfolio.file_portofolio}`} alt={`Portfolio ${index + 1}`} key={index} />
      ))}
    </div>
  )
}

export default ConvertToWeb