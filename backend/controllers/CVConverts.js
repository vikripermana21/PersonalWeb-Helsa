import DataDiri from "../models/DataDiriModels.js";
import Organisasi from "../models/OrganisasiModels.js";
import Pendidikan from "../models/PendidikanModels.js";
import Portofolio from "../models/PortoModels.js";
import Skill from "../models/SkillModels.js";


export const convertToWeb = async (req, res) => {
  try {
    const username = req.body.username;
    const id_akun = req.body.id_akun;

    const response = await DataDiri.findOne({
      where: { id_akun: id_akun },
      include: [ Portofolio, Organisasi, Pendidikan, Skill],
    });

    // Kirim respon dengan data CV dan URL baru

    res.status(201).json({ msg: 'berhasil convert', data: response });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Terjadi kesalahan saat mengkonversi CV ke web');
  }
};