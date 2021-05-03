import express from 'express';

import { getProjects, getProject,  createProject, updateProject,  deleteProject } from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);



export default router;