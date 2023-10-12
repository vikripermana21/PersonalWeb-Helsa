// routes.js

import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshTokenControllers.js";
import { createUser, login, logout } from "../controllers/AkunControllers.js";
import { createPorto, showAllPorto, getPortoById, updatePorto, deletePorto } from "../controllers/PortoController.js";
import { upload, getAllPersonal, createPersonal, getPersonalById, updatePersonal, deletePersonal } from "../controllers/DataDiriControllers.js";
import { createPendidikan, showAllPendidikan, getPendidikanById, updatePendidikan, deletePendidikan } from "../controllers/PendidikanControllers.js";
import { createOrganisasi, showAllOrganisasi, getOrganisasiById, updateOrganisasi, deleteOrganisasi } from "../controllers/OrganisasiControllers.js";
import { createSkill, showAllSkill, getSkillById, updateSkill, deleteSkill } from "../controllers/SkillController.js";
// import { registerAdmin } from "../controllers/RegisterControllers.js";
// import { loginAdmin } from "../controllers/LoginControllers.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

// Refresh Token
router.get('/token', refreshToken);

//AKUN
router.post('/create-user', createUser);

// router.get('/admin', getAdmin);
// router.post('/user', createUser);
// router.get('/user/:id_akun', getUserById);
// router.get('/user/', getAllUser);
router.post('/login', login)
router.delete('/logout', logout)

//DATA DIRI
router.post('/personal', upload.single('foto'), createPersonal);
router.get('/personal', verifyToken ,getAllPersonal);
router.get('/personal/:id_person', getPersonalById);
router.patch("/personal/:id_person", upload.single('foto'), updatePersonal);
router.delete("/personal/:id_person", deletePersonal);

//PORTOFOLIO
router.post('/portofolio', createPorto);
router.get('/portofolio/:id_person', showAllPorto);
router.get('/portofolio/:id_person/:id_portofolio', getPortoById);
router.patch('/portofolio/:id_portofolio', updatePorto);
router.delete('/portofolio/:id_portofolio', deletePorto);

//PENDIDIKAN
router.post('/pendidikan', createPendidikan);
router.get('/pendidikan/:id_person', showAllPendidikan);
router.get('/pendidikan/:id_person/:id_pendidikan', getPendidikanById);
router.patch('/pendidikan/:id_pendidikan', updatePendidikan);
router.delete('/pendidikan/:id_pendidikan', deletePendidikan);

//ORGANISASI
router.post('/organisasi', createOrganisasi);
router.get('/organisasi/:id_person', showAllOrganisasi); //tampilkan semua organisasi berdasarkan id_person
router.get('/organisasi/:id_person/:id_organisasi', getOrganisasiById); //tampilkan berdasarkan id_organisasi (spesifik)
router.patch('/organisasi/:id_organisasi', updateOrganisasi);
router.delete('/organisasi/:id_organisasi', deleteOrganisasi);

//SKILL
router.post('/skill', createSkill);
router.get('/skill/:id_person', showAllSkill);
router.get('/skill/:id_person/:id_skill', getSkillById);
router.patch('/skill/:id_skill', updateSkill);
router.delete('/skill/:id_skill', deleteSkill);

export default router;