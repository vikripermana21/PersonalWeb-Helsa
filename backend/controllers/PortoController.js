//PortoControllers.js

import Portofolio from '../models/PortoModels.js';
import multer from 'multer';
import mime from 'mime';

//define multer for uploads any files
const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, './uploads/portofolio');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-').replace(/ /g, '-') + file.originalname);
    }
});

//inisialisasi upload
export const uploadPorto = multer({storage:storage});

export const createPorto = async(req, res) =>{
    try {
        // const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        // const fotoPorto = req.file ? req.file.path : null;

        // const porto = await Portofolio.create({
        //     nama_portofolio: req.body.nama_portofolio,
        //     deskripsi_portofolio: req.body.deskripsi_portofolio,
        //     file_portofolio: fotoPorto,
        //     id_person: req.body.id_person
        // });
        // console.log("Received file: ", req.file);

        // res.status(201).json({msg: "Portofolio Created", data: porto});

        if (req.file) {
            const allowedFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            const fileExtension = mime.getExtension(req.file.mimetype);
      
            if (allowedFileTypes.includes(req.file.mimetype)) {
              const fotoPorto = req.file.path;
      
              const porto = await Portofolio.create({
                nama_portofolio: req.body.nama_portofolio,
                deskripsi_portofolio: req.body.deskripsi_portofolio,
                file_portofolio: fotoPorto,
                id_person: req.body.id_person
              });
      
              console.log("Received file: ", req.file);
      
              res.status(201).json({ msg: "Portofolio Created", data: porto });
            } else {
              res.status(400).json({ msg: 'Tipe file harus berupa jpg, jpeg, atau png!' });
            }
          } else {
            res.status(400).json({ msg: 'No file uploaded.' });
          }
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
        const fotoPorto = req.file ? req.file.path : null;
        // console.log(req.body);
        await Portofolio.update({...req.body, file_portofolio:fotoPorto}, {
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