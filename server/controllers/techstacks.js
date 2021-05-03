import express from 'express';
import mongoose from 'mongoose';

import TechstackRequirement from '../models/Techstack.js';

const router = express.Router();

export const getTechstacks = async (req, res) => { 
    try {
        const techstackRequirements = await TechstackRequirement.find();
                
        res.status(200).json(techstackRequirements);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTechstack = async (req, res) => { 
    const { id } = req.params;

    try {
        const techstack = await TechstackRequirement.findById(id);
        
        res.status(200).json(techstack);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTechstack = async (req, res) => {
    const { duedate, message, selectedFile, techstack, tags } = req.body;

    const newTechstackRequirement = new TechstackRequirement({ duedate, message, selectedFile, techstack, tags })

    try {
        await newTechstackRequirement.save();

        res.status(201).json(newTechstackRequirement );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTechstack = async (req, res) => {
    const { id } = req.params;
    const { duedate, message, techstack, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No techstack with id: ${id}`);

    const updatedTechstack = { techstack, duedate, message, tags, selectedFile, _id: id };

    await TechstackRequirement.findByIdAndUpdate(id, updatedTechstack, { new: true });

    res.json(updatedTechstack);
}

export const deleteTechstack = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No techstack with id: ${id}`);

    await TechstackRequirement.findByIdAndRemove(id);

    res.json({ message: "Techstack deleted successfully." });
}

// export const UpdateDeveloper = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No techstack with id: ${id}`);
    
//     const techstack = await TechstackRequirement.findById(id);

//     const updatedTechstack = await TechstackRequirement.findByIdAndUpdate(id, { likeCount: techstack.likeCount + 1 }, { new: true });
    
//     res.json(updatedTechstack);
// }


export default router;