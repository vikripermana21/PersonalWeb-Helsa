import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./AuthContext";
import AddPortofolio from "./Components/AddPortofolio";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/portofolio" element={<AddPortofolio/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
