import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
    const [nama, setNama] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        refreshToken();
    }, [])

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken)
            setNama(decoded.username_akun)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <h1>Haloo {nama}</h1>
            </div>
        </div>
    );
}

export default Dashboard