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

export const createPersonal = async (req, res) => {
  try {
    const id_akun = req.body.id_akun;

    const existingDataDiri = await DataDiri.findOne({
      where: { id_akun: id_akun },
    });

    if (existingDataDiri) {
      return res.status(409).json({ error: 'Akun sudah ada' });
    }

    const personal = await DataDiri.create({
      ...req.body,
      id_akun: id_akun, 
    });

    res.status(201).json({ msg: 'New DataDiri Created', data: personal });
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
      include: [ Porto, Organisasi, Pendidikan, Skill],
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

export const updatePersonal = async (req, res) => {
  const { id_person } = req.params;

  try {
    // Remove enum fields from req.body to prevent conflicts
    delete req.body.agama;
    delete req.body.jenis_kelamin;

    const [updated] = await DataDiri.update(req.body, {
      where: { id_person: id_person },
    });

    if (updated) {
      const updatedPersonal = await DataDiri.findOne({
        where: { id_person: id_person },
        include: [Porto, Organisasi, Pendidikan, Skill],
      });
      return res.status(200).json({ message: 'Data diri updated', data: updatedPersonal });
    }

    return res.status(404).json({ error: 'Data diri tidak ditemukan' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Terjadi kesalahan dalam mengupdate data diri' });
  }
};

export const deletePersonal = async (req, res) => {
  const { id_person } = req.params;

  try {
    // Mengambil data yang akan dihapus
    const dataToDelete = await DataDiri.findOne({
      where: { id_person: id_person },
    });

    if (!dataToDelete) {
      return res.status(404).json({ error: 'Data diri tidak ditemukan' });
    }

    // Hapus data yang telah ditemukan
    await dataToDelete.destroy();

    dataToDelete.agama = null;
    dataToDelete.jenis_kelamin = null;

    res.status(200).json({ message: 'Data diri deleted' });
  } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Terjadi kesalahan dalam menghapus data diri' });
  }
};