// AkunControllers.js

import DataDiri from '../models/DataDiriModels.js';
import Akun from '../models/AkunModels.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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

    // Hash password dengan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat admin baru dengan password yang di-hash
    const newAdmin = await Akun.create({
      nama: nama,
      username: username,
      password: hashedPassword,
      role: role,
    });

    res.status(201).json({ message: 'Registrasi berhasil', data: newAdmin });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat registrasi' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari akun berdasarkan username
    const akun = await Akun.findOne({
      where: { username: username },
      include: [DataDiri],
    });

    // Jika akun tidak ditemukan, kembalikan pesan kesalahan
    if (!akun) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Bandingkan password yang diberikan dengan password hash di database
    const passwordMatch = await bcrypt.compare(password, akun.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Ambil secret key dari environment variable
    const secretKey = process.env.JWT_SECRET;

    // Tambahkan opsi expiresIn dalam milisekon (1 hari = 24 jam x 60 menit x 60 detik x 1000 milisekon)
    const expiresIn = 24 * 60 * 60 * 1000;

    // Buat JWT token dengan secret key dan opsi expiresIn
    const token = jwt.sign(
      {
        id_akun: akun.id_akun,
        username: akun.username,
      },
      secretKey,
      { expiresIn } // Add expiresIn option here
    );

    res.status(200).json({ message: 'Login berhasil', data: token, infoAkun: akun });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat login' });
  }
};
