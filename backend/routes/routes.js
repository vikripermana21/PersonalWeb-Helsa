import express from "express";
import { createAdmin, getAllAdmin } from "../controllers/AdminControllers.js";
import { createPorto, showAllPorto, getPortoById, updatePorto, deletePorto } from "../controllers/PortoController.js";
import { createPendidikan, showAllPendidikan, getPendidikanById, updatePendidikan, deletePendidikan } from "../controllers/PendidikanControllers.js";
import { createDataDiri, showDataDiriById, updateDataDiri, deleteDataDiri } from "../controllers/DataDiriControllers.js";
import { createOrganisasi, showAllOrganisasi, getOrganisasiById, updateOrganisasi, deleteOrganisasi } from "../controllers/OrganisasiControllers.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

router.post('/admin', createAdmin);
router.get('/admin', getAllAdmin);

router.post('/add-porto', createPorto);
router.get('/show-portofolio/:id_person', showAllPorto);
router.get('/show-portofolio/:id_person/:id_portofolio', getPortoById);
router.patch('/edit-portofolio/:id_portofolio', updatePorto);
router.delete('/delete-portofolio/:id_portofolio', deletePorto);

router.post('/add-pendidikan', createPendidikan);
router.get('/show-pendidikan/:id_person', showAllPendidikan);
router.get('/show-pendidikan/:id_person/:id_pendidikan', getPendidikanById);
router.patch('/edit-pendidikan/:id_pendidikan', updatePendidikan);
router.delete('/delete-pendidikan/:id_pendidikan', deletePendidikan);

router.post('/add-datadiri', createDataDiri);
router.get('/show-datadiri/:id_person', showDataDiriById);
router.patch('/edit-datadiri/:id_person', updateDataDiri);
router.delete('/delete-datadiri/:id_person', deleteDataDiri);

router.post('/add-organisasi', createOrganisasi);
router.get('/show-organisasi/:id_person', showAllOrganisasi); //tampilkan semua organisasi berdasarkan id_person
router.get('/show-organisasi/:id_person/:id_organisasi', getOrganisasiById); //tampilkan berdasarkan id_organisasi (spesifik)
router.patch('/edit-organisasi/:id_organisasi', updateOrganisasi);
router.delete('/delete-organisasi/:id_organisasi', deleteOrganisasi);

export default router;