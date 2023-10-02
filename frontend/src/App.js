import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { AuthProvider } from "./AuthContext";
import AddPortofolio from "./Components/AddPortofolio";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/portofolio" element={<AddPortofolio/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
