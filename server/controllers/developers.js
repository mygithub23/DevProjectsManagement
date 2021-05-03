import express from 'express';
import mongoose from 'mongoose';


import DeveloperRequirement  from '../models/Developer.js';

const router = express.Router();

export const getDevelopers = async (req, res) => { 
    try {
        const developerRequirements = await DeveloperRequirement.find();
                
        res.status(200).json(developerRequirements);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getDeveloper = async (req, res) => { 
    const { id } = req.params;

    try {
        const developer = await DeveloperRequirement.findById(id);
        
        res.status(200).json(developer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDeveloper = async (req, res) => {
    const { duedate, message, selectedFile, developer, tags } = req.body;

    const newDeveloperRequirement = new DeveloperRequirement({ duedate, message, selectedFile, developer, tags })

    try {
        await newDeveloperRequirement.save();

        res.status(201).json(newDeveloperRequirement );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDeveloper = async (req, res) => {
    const { id } = req.params;
    const { duedate, message, developer, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No developer with id: ${id}`);

    const updatedDeveloper = { developer, duedate, message, tags, selectedFile, _id: id };

    await DeveloperRequirement.findByIdAndUpdate(id, updatedDeveloper, { new: true });

    res.json(updatedDeveloper);
}

export const deleteDeveloper = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No developer with id: ${id}`);

    await DeveloperRequirement.findByIdAndRemove(id);

    res.json({ message: "Developer deleted successfully." });
}

// export const UpdateDeveloper = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No developer with id: ${id}`);
    
//     const developer = await DeveloperRequirement.findById(id);

//     const updatedDeveloper = await DeveloperRequirement.findByIdAndUpdate(id, { likeCount: developer.likeCount + 1 }, { new: true });
    
//     res.json(updatedDeveloper);
// }


export default router;