import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    const login = (data) => {
        setAuthData(data);

        // Set timeout untuk logout setelah waktu kedaluwarsa token (10 detik)
        // const tokenExpiration = new Date(data.exp * 1000);
        // const timeDifference = tokenExpiration - new Date();
        // console.log('token expiration: ' + tokenExpiration)
        // console.log('data exp: ' + data.exp)
        // const logoutTimeout = setTimeout(() => {
        //     logout(); // Panggil fungsi logout untuk menghapus data login
        // }, timeDifference);

        // Simpan timer timeout di dalam state jika diperlukan untuk membersihkannya nanti
        // setLogoutTimeout(logoutTimeout);
    };

    const logout = () => {
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
