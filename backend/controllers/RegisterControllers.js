//RegisterControllers.js

import Admin from '../models/AkunModels.js';

export const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cek apakah admin dengan username yang sama sudah ada
    const existingAdmin = await Admin.findOne({
      where: { username: username },
    });

    // Jika admin dengan username yang sama sudah ada, kembalikan pesan kesalahan
    if (existingAdmin) {
      return res.status(409).json({ error: 'Username sudah digunakan' });
    }

    // Buat admin baru
    const newAdmin = await Admin.create({
      username: username,
      password: password,
    });

    // Jika registrasi berhasil, Sistem dapat mengizinkan akses atau memberikan respons sesuai kebijakan Sistem.
    // Misalnya, Sistem dapat mengirim pesan sukses atau token akses jika diperlukan.

    // Jika menggunakan JWT, Sistem dapat menghasilkan token JWT dan mengirimkannya sebagai respons.
    // Contoh menggunakan library jsonwebtoken:
    // const jwt = require('jsonwebtoken');
    // const token = jwt.sign({ adminId: newAdmin.id_admin }, 'secret-key');

    // Jika tidak menggunakan JWT, Sistem dapat mengirim pesan sukses tanpa token:
    res.status(201).json({ message: 'Registrasi berhasil' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat registrasi' });
  }
};
