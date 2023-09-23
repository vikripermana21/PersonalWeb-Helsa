//SkillControllers.js

import Skill from '../models/SkillModels.js';

export const createSkill = async(req,res) =>{
    try{
        const skill = await Skill.create(req.body);
        res.status(201).json({msg: "Skill Created", data: skill});
    }catch(error){
        console.log(error.message);
        res.status(500).json({ error : 'Terjadi kesalahan dalam menginput data skill' });
    }
}

export const showAllSkill = async(req,res) =>{
    const {id_person} = req.params;
    try{
        const response = await Skill.findAll(
            {
                where: {id_person: id_person}
            }
        );
        res.status(200).json(response)
    }catch(error){
        console.log(error.message);
        res.status(500).json({ error : 'Terjadi kesalahan dalam mengambil data skill' });
    }
}

export const getSkillById = async(req,res) =>{
    const {id_person, id_skill} = req.params;
    try{
        const response = await Skill.findOne(
            {
                where: {id_person: id_person, id_skill: id_skill}
            }
        );
        res.status(200).json(response)
    }catch(error){
        console.log(error.message);
        res.status(500).json({ error : 'Terjadi kesalahan dalam mengambil data skill' });
    }
}

export const updateSkill = async(req,res) =>{
    try{
        await Skill.update(req.body, {
            where: {
                id_skill : req.params.id_skill
            }
        });
        res.status(201).json({msg: "Berhasil update skill"})
    }catch(error){
        console.log(error.message);
    }
}

export const deleteSkill = async (req, res) => {
    try {
        const id = req.params.id_skill; // Ambil ID dari parameter URL

        // Menggunakan klausa 'where' untuk menghapus pengguna dengan ID yang sesuai
        const data = await Skill.destroy({
            where: {
                id_skill: id
            }
        });

        if (data === 1) {
            // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
            res.status(200).json({ msg: "Skill berhasil dihapus" });
        } else {
            // Data tidak ditemukan
            res.status(404).json({ msg: "Skill tidak ditemukan" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan saat menghapus skill" });
    }
};