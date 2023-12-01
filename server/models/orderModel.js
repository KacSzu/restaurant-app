const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  status: {
    type: String,
    required: [true, "Please add status"],
    default: "waiting",
    enum: {
      values: ["waiting", "preparing", "ready", "done"],
      message: "Please select correct option for status",
    },
  },
  cart: { type: [{}], required: [true, "Cart can not be empty"] },
  tableNumber: { type: Number, required: [true, "Please add table number"] },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Order", orderSchema);
