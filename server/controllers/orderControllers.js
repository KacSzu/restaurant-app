const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Orders = require("../models/orderModel");

exports.getOrders = catchAsyncErrors(async (req, res) => {
  const orders = await Orders.find();
  if (!orders) next(new ErrorHandler("Orders not found"), 404);
  return res
    .status(200)
    .json({ success: true, messsage: "Successfully get orders", data: orders });
});

exports.createOrder = catchAsyncErrors(async (req, res) => {
  const cart = req.body;
  const order = await Orders.create({ cart });
  return res.status(201).json({
    success: true,
    message: "Successfully created order",
    data: order,
  });
});
