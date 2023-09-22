import express from "express";
import { createAdmin, getAllAdmin } from "../controllers/AdminControllers.js";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

router.post('/admin', createAdmin);
router.get('/admin', getAllAdmin);

export default router;