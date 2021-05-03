import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    devName: {
        type: String,
        required: true
    },
    devRoles: [
        new Schema({
            roleName: {
                type: String,
                required: true
            },
            roleLevel: {
                type: String,
                required: true,
            },
            privileages: {
                type: String,
                required: true
            }
        })
    ],
    currrentProjects:[
        new Schema({
            projectName: {
                type: String,
                required: true
            },
            projectStartDate: {
                type: Date,
                required: true,
            },
            projectEndDate: {
                type: Date,
                required: true
            }
        })
    ]
        
        
});


const Developer = mongoose.model("Developers", DeveloperSchema);


export default  Developer;


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const DeveloperSchema = new Schema({
//     _id: {
//         type: Schema.Types.ObjectId,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     }
// });
// const Developers = mongoose.model("developers", DeveloperSchema,"Developers");
// module.exports = Developers