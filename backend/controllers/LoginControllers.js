//LoginControllers.js

import Admin from '../models/AdminModels.js';

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari admin berdasarkan username
    const admin = await Admin.findOne({
      where: { username: username },
    });

    // Jika admin tidak ditemukan, kembalikan pesan kesalahan
    if (!admin) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Cek apakah password sesuai
    if (admin.password !== password) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    // Jika username dan password sesuai, Sistem dapat mengizinkan akses
    // atau menghasilkan token akses di sini, misalnya menggunakan JSON Web Token (JWT).

    // Misalnya, Sistem dapat menghasilkan token JWT dengan payload sesuai kebutuhan,
    // seperti ID admin atau peran, dan mengirimkannya sebagai respons.
    // Sistem perlu mengimpor library JWT untuk melakukannya.

    // Contoh menggunakan library jsonwebtoken:
    // const jwt = require('jsonwebtoken');
    // const token = jwt.sign({ adminId: admin.id_admin }, 'secret-key');

    // Jika menggunakan JWT, Sistem dapat mengirim token sebagai respons:
    // res.status(200).json({ token: token });

    // Jika tidak menggunakan JWT, Sistem dapat mengirim pesan sukses tanpa token:
    res.status(200).json({ message: 'Login berhasil' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat login' });
  }
};
