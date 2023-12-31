import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { PiLockKeyLight } from "react-icons/pi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // const { login } = useAuth();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
      e.preventDefault();
      try {
          // console.log("tesss")
          const response = await axios.post('http://localhost:5000/login', {
              username, password
          });


          // login(response.data);
          navigate('/dashboard');
          console.log("berhasil login");
          console.log("Response :", response.data);
          
      } catch (error) {
          setMsg(error.response.data.error);
      }
  }

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={loginHandler}>
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
            <p>{msg}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-outline btn-success btn-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
