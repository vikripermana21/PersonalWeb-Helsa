import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const AddPortofolio = () => {
    const [nama_portofolio, setNama] = useState("")
    const [deskripsi_portofolio, setDeskripsi] = useState("")
    const [file_portofolio, setSelectedFile] = useState("");
    // const [password, setPass] = useState("")
    // const [usia, setUsia] = useState()

    const navigate = useNavigate()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const savePortofolio = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/portofolio', {
                nama_portofolio, deskripsi_portofolio, file_portofolio
            });
            console.log(nama_portofolio)
            navigate('/');
        } catch (error) {
            console.log(error.response);
        }
    }
    
    

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={savePortofolio}>
                <div className='field'>
                    <label className="label">Nama Portofolio</label>
                    <div className="control">
                        <input type="text" className="input" value={nama_portofolio} onChange={(e) => setNama(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <label className="label">Deskripsi</label>
                    <div className="control">
                        <input type="text" className="input" value={deskripsi_portofolio} onChange={(e) => setDeskripsi(e.target.value)}/>
                    </div>
                </div>
                {/* Input File */}
                <div className='field'>
                    <div className="file is-success has-name">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" onChange={(e) => handleFileChange(e)} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                            <span className="file-name">
                                {file_portofolio ? file_portofolio.name : 'No file chosen'}
                            </span>
                        </label>
                    </div>
                </div>
                {/* Input File */}
                <div className='field'>
                    <button type='submit' className="button is-success">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPortofolio