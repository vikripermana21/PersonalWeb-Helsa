import React, {useState, useEffect} from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
    const [nama, setNama] = useState("");
    const [token, setToken] = useState("");
    const [expire, setExpire] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        refreshToken();
        // getUser();
    }, [])

    const refreshToken = async() => {
        try {
            const response = await axiosJWT.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken)
            setNama(decoded.username_akun)
            setExpire(decoded.exp)
        } catch (error) {
            console.log(error.message);
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken)
            setNama(decoded.username_akun)
            setExpire(decoded.exp)
        }

        return config;
    }, (error) => {
        Promise.reject(error);
    });

    const getUser = async() => {
        const response = await axiosJWT.get('http://localhost:5000/personal', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);
        setUsers(response.data);
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Haloo {nama}</h1>
                <button className='button is-info' onClick={getUser}>Get User</button>
                <table className='table is-stripped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={users.id}>
                                <td>{index + 1}</td>
                                <td>{user.nama}</td>
                                <td>{user.alamat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard