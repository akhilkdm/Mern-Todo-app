const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true
    },
    userId:{
      type:String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", TodoSchema);
