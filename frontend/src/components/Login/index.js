import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { PiLockKeyLight } from "react-icons/pi";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [username, password]);

  const submitLogin = () => {
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9ha3VuIjoyLCJ1c2VybmFtZSI6ImVjYWxpa2EiLCJpYXQiOjE2OTYxNDY5MTAsImV4cCI6MTc4MjU0NjkxMH0.YLlWxjjzHPpJHQyHqiKF2VSv2ySVBJHq6vQG6GgqSVE",
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
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
              type="text"
              placeholder="Password"
              className="input input-ghost w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>Please fill in the data correctly</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-outline btn-success btn-sm"
              onClick={() => submitLogin()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
