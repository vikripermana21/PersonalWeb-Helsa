import DataDiri from '../models/DataDiriModels.js';

export const createDataDiri = async (req, res) => {
    try {
        const dataDiri = await DataDiri.create(req.body);
        res.status(201).json({ msg: "Data Diri Created", data: dataDiri });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput data data_diri.' });
    }
}

export const showDataDiriById = async (req, res) => {
    const { id_person } = req.params;
    try {
        const response = await DataDiri.findOne(
            {
                where: { id_person: id_person }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam mengambil data data_diri.' });
    }
}

export const updateDataDiri = async (req, res) => {
    try {
        await DataDiri.update(req.body, {
            where: {
                id_person: req.params.id_person
            }
        });
        res.status(201).json({ msg: "Berhasil update data_diri" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat mengupdate data_diri" });
    }
}

export const deleteDataDiri = async (req, res) => {
    try {
        const id = req.params.id_person; // Ambil ID dari parameter URL

        // Menggunakan klausa 'where' untuk menghapus data_diri dengan ID yang sesuai
        const data = await DataDiri.destroy({
            where: {
                id_person: id
            }
        });

        if (data === 1) {
            // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
            res.status(200).json({ msg: "Data Diri berhasil dihapus" });
        } else {
            // Data tidak ditemukan
            res.status(404).json({ msg: "Data Diri tidak ditemukan" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus data_diri" });
    }
};
