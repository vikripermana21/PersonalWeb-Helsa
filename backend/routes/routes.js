import express from "express";
import { createAdmin, getAllAdmin } from "../controllers/AdminControllers.js";
import { createPorto, showAllPorto, getPortoById, updatePorto, deletePorto } from "../controllers/PortoController.js";
import { getAllPersonal, createPersonal } from "../controllers/PersonalControllers.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

//ADMIN
router.post('/admin', createAdmin);
router.get('/admin', getAllAdmin);
router.post('/add-porto', createPorto);

//DATA DIRI
router.post('/personal', createPersonal);
router.get('/personal', getAllPersonal);

//PORTOFOLIO
router.get('/show-portofolio/:id_person', showAllPorto);
router.get('/show-portofolio/:id_person/:id_portofolio', getPortoById);
router.patch('/edit-portofolio/:id_portofolio', updatePorto);
router.delete('/delete-portofolio/:id_portofolio', deletePorto);


export default router;