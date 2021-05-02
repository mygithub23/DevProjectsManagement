const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDesc: {
        type: String,
        required: true
    },
    projectStartDate: {
        type: Date,
        required: true
    },
    projectEndDate: {
        type: Date,
        required: true
    },
    reqTechstacks: [
        new Schema({
            reqTechStackId: {
                type: String,
                require: true
            },
            techStackName: {
                type: String,
                required: true
            },
            numOfDev: {
                type: Number,
                required: true
            },
            taskStartDate: {
                type: Date,
                required: true
            },
            taskEndDate: {
                type: Date,
                required: true
            }
        })
    ],
    developers: [
        new Schema({
            devName: {
                type: String,
                required: true
            }
        })
    ]
});

const Project = mongoose.model("Projects", ProjectSchema);


module.exports = Project;