import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Registrasi = () => {
  const [nama, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

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
      setMsg(error.response.data.msg);
      setError(true);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Registrasi</h2>
          <Form onSubmit={registerHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Nama" onChange={(e) => setName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="*******" onChange={(e) => setConfPassword(e.target.value)} required/>
            </Form.Group>

            {error ? (
              <Alert variant="danger">
                {msg}
              </Alert>
            ): null}

            <p className="subtitle">Sudah memiliki akun? <Link to={'/login'}>Login</Link></p>
            <div className="d-grid gap-2">
              <Button variant="success" type="submit">Register</Button>{' '}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
