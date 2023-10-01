import React from 'react'
import { useAuth } from '../AuthContext';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const {authData, logout} = useAuth();
    // const navigate = useNavigate();
    
    console.log("Auth Dataa: ",authData)
    
    useEffect(() => {
        if (authData && authData.token) { // Perhatikan perubahan ini
          const tokenExpiration = new Date(authData.exp * 1000);
          const timeDifference = tokenExpiration - new Date();
          console.log('token expiration: ' + tokenExpiration)
          console.log('data exp: ' + authData.exp)
        }
    }, [authData, logout]);

    return (
        <div>
            {authData ? (
                <p>Selamat datang, {authData.infoAkun.nama} di Dashboard!</p>
            ) : (
                <p>Silakan login terlebih dahulu.</p>
            )}
        </div>
    );
}

export default Dashboard