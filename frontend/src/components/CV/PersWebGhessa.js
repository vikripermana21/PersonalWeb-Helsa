import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PersWebGhessa = () => {
  const [data, setData] = useState(null);
  const {username} = useParams();
  const baseUrl = "http://localhost:5000/";

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/convert-web/${username}`);
      console.log("Data : ", response.data.data);
      setData(response.data.data);
      console.log("Data web 1: ",response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [username])


  return (
    <div>
      {data && data.data_diri ? (
        <>
            {/* <div>Nama : {data.data_diri.nama}</div>
            <div>Username : {data.username}</div> */}
            <h1>Personal Web Ghessa</h1>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default PersWebGhessa