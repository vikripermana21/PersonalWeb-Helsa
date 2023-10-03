import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [nama, setNama] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [confPassword, setConfPass] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate()


    const saveUser = async (e) => {
        e.preventDefault();
        if (!nama || !username || !password || !confPassword) {
            setMsg("All fields are required.");
            return;
        }
        try {
            await axios.post('http://localhost:5000/create-user', {
                nama, username, password, confPassword, role
            });
            navigate('/');
            console.log("berhasil daftar");
        } catch (error) {
            console.log(error);
            setMsg(error.response.data.error);
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
                    <label className="label">Konfirmasi Password</label>
                    <div className="control">
                        <input type="password" className="input" value={confPassword} onChange={(e) => setConfPass(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <label className="label">Role</label>
                    <div className="control">
                        <input type="text" className="input" value={role} onChange={(e) => setRole(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className="button is-success">Save</button>
                </div>
                <p>{msg}</p>
            </form>
        </div>
    </div>
  )
}

export default Register