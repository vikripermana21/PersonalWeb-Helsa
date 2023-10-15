import DataDiri from "../models/DataDiriModels.js";
import Organisasi from "../models/OrganisasiModels.js";
import Pendidikan from "../models/PendidikanModels.js";
import Portofolio from "../models/PortoModels.js";
import Skill from "../models/SkillModels.js";


export const convertToWeb = async (req, res) => {
  try {
    const username = req.body.username;
    const id_akun = req.body.id_akun;

    // Buat URL baru dengan username
    const newUrl = `http://localhost:5000/${username}`;
    const response = await DataDiri.findOne({
      where: { id_akun: id_akun },
      include: [ Portofolio, Organisasi, Pendidikan, Skill],
    });

    // Kirim respon dengan data CV dan URL baru
    res.status(200).json({
      newUrl,
      response,
    });
  } catch (error) {
    // Tangani kesalahan jika ada
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat mengkonversi CV ke web');
  }
};