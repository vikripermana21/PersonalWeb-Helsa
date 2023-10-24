import DataDiri from "../models/DataDiriModels.js";
import Organisasi from "../models/OrganisasiModels.js";
import Pendidikan from "../models/PendidikanModels.js";
import Portofolio from "../models/PortoModels.js";
import Skill from "../models/SkillModels.js";
import Akun from "../models/AkunModels.js";


export const convertToWeb = async (req, res) => {
  try {
    const username = req.params.username;

    const response = await Akun.findOne({
      where: { username: username },
      include: [
        {
          model: DataDiri,
          include: [Portofolio, Organisasi, Pendidikan, Skill],
        }
      ],
      attributes: {exclude: ['password', 'role', 'refresh_token']}
    });

    // Kirim respon dengan data CV dan URL baru

    res.status(201).json({ msg: 'berhasil convert', data: response });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Terjadi kesalahan saat mengkonversi CV ke web' });
  }
};