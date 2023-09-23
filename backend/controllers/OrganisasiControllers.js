//OrganisasiControllers.js

import Organisasi from '../models/OrganisasiModels.js';

export const createOrganisasi= async (req, res) => {
    try {
        const organisasi = await Organisasi.create(req.body);
        res.status(201).json({ msg: "Organisasi Created", data: organisasi });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data Organisasi.' });
    }
}

export const showAllOrganisasi = async (req, res) => {
    const { id_person } = req.params;
    try {
        const response = await Organisasi.findAll(
            {
                where: { id_person: id_person }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Organisasi.' });
    }
}

export const getOrganisasiById = async (req, res) => {
    const { id_person, id_organisasi } = req.params;
    try {
        const response = await Organisasi.findOne(
            {
                where: { id_person: id_person, id_organisasi: id_organisasi }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data Organisasi.' });
    }
}

export const updateOrganisasi = async (req, res) => {
    try {
        await Organisasi.update(req.body, {
            where: {
                id_organisasi: req.params.id_organisasi
            }
        });
        res.status(201).json({ msg: "Berhasil update Organisasi" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate Organisasi" });
    }
}

export const deleteOrganisasi = async (req, res) => {
    try {
        const id = req.params.id_organisasi; // Ambil ID dari parameter URL

        // Menggunakan klausa 'where' untuk menghapus Organisasi dengan ID yang sesuai
        const data = await Organisasi.destroy({
            where: {
                id_organisasi: id
            }
        });

        if (data === 1) {
            // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
            res.status(200).json({ msg: "Organisasi berhasil dihapus" });
        } else {
            // Data tidak ditemukan
            res.status(404).json({ msg: "Organisasi tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Organisasi" });
    }
};
