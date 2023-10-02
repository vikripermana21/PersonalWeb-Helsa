import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={loginHandler}>
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
                <p>{msg}</p>
            </form>
        </div>
    </div>
  )
}

export default Login