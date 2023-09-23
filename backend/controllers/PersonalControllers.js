import Personal from '../models/PersonalModels.js';
import Porto from '../models/PortoModels.js';

export const getAllPersonal = async (req, res) => {
    try {
      const personalWithPorto = await Personal.findAll({
        include: Porto,
      });
      res.status(200).json(personalWithPorto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
};

export const createPersonal = async(req, res) =>{
    try {
        const personal = await Personal.create(req.body);
        res.status(201).json({msg: "New Personal Created", data: personal});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Terjadi kesalahan dalam menginput' });
    }
}
