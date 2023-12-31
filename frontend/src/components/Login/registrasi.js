import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiLockKeyLight } from "react-icons/pi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../AuthContext';

const Registrasi = () => {
  const [nama, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/create-user", {
        nama,
        username,
        password,
        confPassword
      });

      // login(response.data);
      navigate("/login");
      console.log("berhasil registrasi");
      console.log("Response :", response.data);
    } catch (error) {
      setMsg(error.response.data.error);
      console.log(error)
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Registrasi</h2>
          <form onSubmit={registerHandler}>
          <div className="flex items-center">
              <AiOutlineUser />
              <input
                type="text"
                placeholder="Name"
                className="bg-white input input-ghost w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <AiOutlineUser />
              <input
                type="text"
                placeholder="Username"
                className="bg-white input input-ghost w-full max-w-xs"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <PiLockKeyLight />
              <input
                type="password"
                placeholder="Password"
                className="bg-white input input-ghost w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <PiLockKeyLight />
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className="bg-white input input-ghost w-full max-w-xs"
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
            <p>Please fill in the data correctly</p>
            <div className="card-actions justify-end">
              <button
                type="submit"
                className="btn btn-outline btn-success btn-sm"
              >
                Register
              </button>
              <p>{msg}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
