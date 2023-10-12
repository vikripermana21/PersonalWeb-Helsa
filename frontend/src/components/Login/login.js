import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { PiLockKeyLight } from "react-icons/pi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../AuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // const { login } = useAuth();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      const token = response.data.access_token;
      localStorage.setItem('token', token); 

      // login(response.data);
      navigate("/dashboard");
      console.log("berhasil login");
      console.log("Response :", response.data);
    } catch (error) {
      setMsg(error.response.data.error);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={loginHandler}>
            <div className="flex items-center">
              <AiOutlineUser />
              <input
                type="text"
                placeholder="Username"
                className="input input-ghost w-full max-w-xs"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <PiLockKeyLight />
              <input
                type="password"
                placeholder="Password"
                className="input input-ghost w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Please fill in the data correctly</p>
            <div className="card-actions justify-end">
              <button
                type="submit"
                className="btn btn-outline btn-success btn-sm"
              >
                Login
              </button>
              <p>{msg}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
