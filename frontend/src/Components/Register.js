import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [nama, setNama] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    // const [password, setPass] = useState("")
    // const [usia, setUsia] = useState()

    const navigate = useNavigate()


    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/admin', {
                nama, username, password
            });
            navigate('/login');
            console.log("berhasil daftar");
        } catch (error) {
            console.log(error.response);
        }
    }
    
    

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className='field'>
                    <label className="label">Nama</label>
                    <div className="control">
                        <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <label className="label">Username</label>
                    <div className="control">
                        <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <label className="label">Password</label>
                    <div className="control">
                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className="button is-success">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register