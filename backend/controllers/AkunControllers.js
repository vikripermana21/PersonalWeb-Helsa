//AdminControllers.js

import Akun from '../models/AkunModels.js';


export const createAdmin = async(req, res) =>{
    try {
        await Akun.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const getAdmin = async(req, res) =>{
    try {
        const response = await Akun.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}