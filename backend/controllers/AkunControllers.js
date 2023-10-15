// AkunControllers.js

import Akun from '../models/AkunModels.js';
import jwt from 'jsonwebtoken';
import DataDiri from '../models/DataDiriModels.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    try {
      const { nama, username, password, confPassword, role } = req.body;
  
      if(password !== confPassword) return res.status(400).json({msg: "Password tidak sesuai."});

      // Cek apakah admin dengan username yang sama sudah ada
      const existingUser = await Akun.findOne({
        where: { username: username },
      });
  
      // Jika admin dengan username yang sama sudah ada, kembalikan pesan kesalahan
      if (existingUser) {
        return res.status(409).json({ msg: 'Username sudah digunakan' });
      }

      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
  
      // Buat admin baru
      const newUser = await Akun.create({
        nama: nama,
        username: username,
        password: hashPassword,
        role: role,
      });
  
      res.status(201).json({ message: 'Registrasi berhasil', data: newUser });
  
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
      include : [DataDiri],
    });

    // Jika akun tidak ditemukan, kembalikan pesan kesalahan
    if (!akun) {
      return res.status(401).json({ msg: 'Username atau password salah' });
    }

    // Cek apakah password sesuai
    const match = await bcrypt.compare(password, akun.password);
    if (!match) {
      return res.status(401).json({ msg: 'Username atau password salah' });
    }

    const id_akun = akun.id_akun;
    const nama = akun.nama;
    const username_akun = akun.username;
    const role_akun = akun.role;

    const refreshToken = jwt.sign({id_akun, nama, username_akun, role_akun}, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    const accessToken = jwt.sign({id_akun, nama, username_akun, role_akun}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15s'
    });

    await Akun.update({refresh_token: refreshToken}, {
      where: {
        id_akun: id_akun
      }
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: 'Login berhasil', access_token: accessToken, info_akun: akun });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat login' });
  }
};

export const logout = async(req, res) => {
  const refreshTokens = req.cookies.refreshToken;
  if(!refreshTokens){
      return res.sendStatus(204);
  }

  const user = await Akun.findAll({
      where: {
          refresh_token: refreshTokens
      }
  });

  if(!user){
      return res.sendStatus(204);
  }

  await Akun.update({refresh_token: null}, {
    where: {
      id_akun: user[0].id_akun
    }
  });

  res.clearCookie('refreshToken');
  res.status(200).json({msg: "berhasil logout"});
}

//     // Cari akun berdasarkan username
//     const akun = await Akun.findOne({
//       where: { username: username },
//       include : [DataDiri],
//     });

//     // Jika akun tidak ditemukan, kembalikan pesan kesalahan
//     if (!akun) {
//       return res.status(401).json({ error: 'Username atau password salah' });
//     }

//     // Cek apakah password sesuai
//     const match = await bcrypt.compare(password, akun.password);
//     if (!match) {
//       return res.status(401).json({ error: 'Username atau password salah' });
//     }

//     const id_akun = akun.id_akun;
//     const username_akun = akun.username;
//     const role_akun = akun.role;

//     const refreshToken = jwt.sign({id_akun, username_akun, role_akun}, process.env.REFRESH_TOKEN_SECRET, {
//       expiresIn: '1d'
//     });

//     const accessToken = jwt.sign({id_akun, username_akun, role_akun}, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: '15s'
//     });

//     await Akun.update({refresh_token: refreshToken}, {
//       where: {
//         id_akun: id_akun
//       }
//     });

//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000
//     });

//     res.status(200).json({ message: 'Login berhasil', access_token: accessToken, info_akun: akun });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: 'Terjadi kesalahan saat login' });
//   }
// };

// export const logout = async(req, res) => {
//   const refreshTokens = req.cookies.refreshToken;
//   if(!refreshTokens){
//       return res.sendStatus(204);
//   }

//   const user = await Akun.findAll({
//       where: {
//           refresh_token: refreshTokens
//       }
//   });

//   if(!user){
//       return res.sendStatus(204);
//   }

//   await Akun.update({refresh_token: null}, {
//     where: {
//       id_akun: user[0].id_akun
//     }
//   });

//   res.clearCookie('refreshToken');
//   res.status(200).json({msg: "berhasil logout"});
// }