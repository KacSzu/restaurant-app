const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  cart: { type: [{}], required: true },
  {timestamps:true}
});
