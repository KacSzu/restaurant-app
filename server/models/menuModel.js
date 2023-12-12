const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuSchema = new Schema({
  category: {
    type: String,
    required: [true, "Please add category"],
    enum: {
      values: ["pizza", "pasta", "wines", "alcoholfree "],
      message: " Please select correct option for category",
    },
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Please add name"],
    trim: true,
  },
  unitPrice: {
    type: Number,
    required: [true, "Please add price"],
  },
  ingredients: {
    type: [String],
    required: [true, "Please add ingredients"],
  },
  soldOut: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("Menu", menuSchema);
