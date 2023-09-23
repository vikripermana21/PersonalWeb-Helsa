//PortoControllers.js

import Portofolio from '../models/PortoModels.js';

export const createPorto = async(req, res) =>{
    try {
        const porto = await Portofolio.create(req.body);
        res.status(201).json({msg: "Portofolio Created", data: porto});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data portofolio.' });
    }
}

export const showAllPorto = async(req, res) =>{
    const { id_person } = req.params;
    try {
        const response = await Portofolio.findAll(
            {
                where: { id_person: id_person}
            }
        );
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data portofolio.' });
    }
}

export const getPortoById = async(req, res) =>{
    const { id_person, id_portofolio } = req.params;
    try {
        const response = await Portofolio.findOne(
            {
                where: { id_person: id_person, id_portofolio: id_portofolio }
            }
        );
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data portofolio.' });
    }
}

export const updatePorto = async (req,res) => {
    try {
        // console.log(req.body);
        await Portofolio.update(req.body, {
            where: {
                id_portofolio: req.params.id_portofolio
            }
        });
        res.status(201).json({msg: "Berhasil update portofolio"})
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePorto = async (req, res) => {
    try {
        const id = req.params.id_portofolio; // Ambil ID dari parameter URL

        // Menggunakan klausa 'where' untuk menghapus pengguna dengan ID yang sesuai
        const data = await Portofolio.destroy({
            where: {
                id_portofolio: id
            }
        });

        if (data === 1) {
            // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
            res.status(200).json({ msg: "User berhasil dihapus" });
        } else {
            // Data tidak ditemukan
            res.status(404).json({ msg: "User tidak ditemukan" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus user" });
    }
};