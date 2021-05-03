import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const TechstackSchema = new Schema({
  _id: {
      type: Schema.Types.ObjectId,
      required: true
  },
  stackName: {
      type: String,
      required: true
  },
  stackDesc: {
      type: String
  }
});

const Techstack = mongoose.model("Techstacks", TechstackSchema);


export default Techstack;
