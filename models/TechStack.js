const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechStackSchema = new Schema({
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

const TechStack = mongoose.model("TechStacks", TechStackSchema);


module.exports = TechStack;
