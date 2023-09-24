import Pendidikan from '../models/PendidikanModels.js';

export const createPendidikan = async (req, res) => {
    try {
        const pendidikan = await Pendidikan.create(req.body);
        res.status(201).json({ msg: "Pendidikan Created", data: pendidikan });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data pendidikan.' });
    }
}

export const showAllPendidikan = async (req, res) => {
    const { id_person } = req.params;
    try {
        const response = await Pendidikan.findAll(
            {
                where: { id_person: id_person }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data pendidikan.' });
    }
}

export const getPendidikanById = async (req, res) => {
    const { id_person, id_pendidikan } = req.params;
    try {
        const response = await Pendidikan.findOne(
            {
                where: { id_person: id_person, id_pendidikan: id_pendidikan }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data pendidikan.' });
    }
}

export const updatePendidikan = async (req, res) => {
    try {
        await Pendidikan.update(req.body, {
            where: {
                id_pendidikan: req.params.id_pendidikan
            }
        });
        res.status(201).json({ msg: "Berhasil update pendidikan" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate pendidikan" });
    }
}

export const deletePendidikan = async (req, res) => {
    try {
        const id = req.params.id_pendidikan; // Ambil ID dari parameter URL

        // Menggunakan klausa 'where' untuk menghapus pendidikan dengan ID yang sesuai
        const data = await Pendidikan.destroy({
            where: {
                id_pendidikan: id
            }
        });

        if (data === 1) {
            // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
            res.status(200).json({ msg: "Pendidikan berhasil dihapus" });
        } else {
            // Data tidak ditemukan
            res.status(404).json({ msg: "Pendidikan tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus pendidikan" });
    }
};
