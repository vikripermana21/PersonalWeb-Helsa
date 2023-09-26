//AdminControllers.js

import Akun from '../models/AkunModels.js';
import jwt from 'jsonwebtoken';
import DataDiri from '../models/DataDiriModels.js';


export const createAdmin = async (req, res) => {
    try {
      const { nama, username, password, role } = req.body;
  
      // Cek apakah admin dengan username yang sama sudah ada
      const existingAdmin = await Akun.findOne({
        where: { username: username },
      });
  
      // Jika admin dengan username yang sama sudah ada, kembalikan pesan kesalahan
      if (existingAdmin) {
        return res.status(409).json({ error: 'Username sudah digunakan' });
      }
  
      // Buat admin baru
      const newAdmin = await Akun.create({
        nama: nama,
        username: username,
        password: password,
        role: role,
      });
  
      res.status(201).json({ message: 'Registrasi berhasil', data: newAdmin });
  
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan saat registrasi' });
    }
  };

  export const login = async (req, res) => {
    
    const token = jwt.sign(
        { 
            id_akun: Akun.id_akun,
            username: Akun.username,
            password: Akun.password,
        }, 'secret-key');
    try {
      const { username, password } = req.body;
  
      // Cari akun berdasarkan username
      const akun = await Akun.findOne({
        where: { username: username },
        include : [DataDiri],
      });
  
      // Jika akun tidak ditemukan, kembalikan pesan kesalahan
      if (!akun) {
        return res.status(401).json({ error: 'Username atau password salah' });
      }
  
      // Cek apakah password sesuai
      if (akun.password !== password) {
        return res.status(401).json({ error: 'Username atau password salah' });
      }
  
      res.status(200).json({ message: 'Login berhasil', data: token, infoAkun: akun });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Terjadi kesalahan saat login' });
    }
  };

