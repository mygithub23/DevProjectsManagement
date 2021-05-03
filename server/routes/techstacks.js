import express from 'express';

import { getTechstacks, getTechstack,  createTechstack, updateTechstack,  deleteTechstack } from '../controllers/techstacks.js';

const router = express.Router();

router.get('/', getTechstacks);
router.post('/', createTechstack);
router.get('/:id', getTechstack);
router.patch('/:id', updateTechstack);
router.delete('/:id', deleteTechstack);



export default router;