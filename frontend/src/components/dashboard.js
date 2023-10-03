import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Sidebar, Button } from 'daisyui/react';

const Dashboard = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          
              <Sidebar name="my-sidebar" side="left" width="64" hideOnClickOutside>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Sidebar Menu</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <Button className="mt-4" tag="a" href="#" color="blue">Sign In</Button>
              </div>
            </Sidebar>

          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#" onClick={Logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
