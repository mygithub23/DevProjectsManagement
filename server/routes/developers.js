import express from 'express';

import { 
    getDevelopers, 
    getDeveloper,  
    createDeveloper, 
    updateDeveloper,  
    deleteDeveloper 
} 
from '../controllers/developers.js';

const router = express.Router();

router.get('/', getDevelopers);
router.post('/', createDeveloper);
router.get('/:id', getDeveloper);
router.patch('/:id', updateDeveloper);
router.delete('/:id', deleteDeveloper);



export default router;