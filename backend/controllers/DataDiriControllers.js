//DataDiriControllers.js

import DataDiri from '../models/DataDiriModels.js';
import Porto from '../models/PortoModels.js';
import Organisasi from '../models/OrganisasiModels.js';
import Pendidikan from '../models/PendidikanModels.js';
import Skill from '../models/SkillModels.js';


export const getAllPersonal = async (req, res) => {
    try {
      const personalWithRelation = await DataDiri.findAll({
        include: [Porto, Organisasi, Pendidikan, Skill],
      });
      res.status(200).json(personalWithRelation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

export const createPersonal = async(req, res) =>{
    try {
        const personal = await DataDiri.create(req.body);
        res.status(201).json({msg: "New DataDiri Created", data: personal});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput' });
    }
};

export const getPersonalById = async (req, res) => {
  const { id_person } = req.params;
  try {
    const response = await DataDiri.findOne({
      where: { id_person: id_person },
      include: [Porto, Organisasi, Pendidikan, Skill],
    });

    if (!response) {
      return res.status(404).json({ error: 'Data diri tidak ditemukan' });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data diri' });
  }
}

