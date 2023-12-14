const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Orders = require("../models/orderModel");
const APIFilters = require("../utils/apiFilters");
const mongoose = require("mongoose");

exports.getOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Orders.find();

  if (!orders || orders.length === 0) {
    return next(new ErrorHandler("Orders not found", 404));
  }
  return res.status(200).json({
    success: true,
    message: "Successfully retrieved orders",
    data: orders,
  });
});

exports.getOrdersByStatus = catchAsyncErrors(async (req, res, next) => {
  const { last } = req.query;
  let orders;
  let apiFilters;
  if (last) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(last));
    orders = await Orders.find({
      created_at: { $gte: startDate },
      status: req.params.status,
    });
  } else {
    apiFilters = new APIFilters(Orders.find(), req.params).filter();
    orders = await apiFilters.query;
  }

  return res.status(200).json({
    success: true,
    message: "Successfully retrieved orders",
    data: orders,
  });
});

exports.createOrder = catchAsyncErrors(async (req, res) => {
  const { cart, tableNumber } = req.body;
  const order = await Orders.create({ cart, tableNumber });
  return res.status(201).json({
    success: true,
    message: "Order created successfully",
    data: order,
  });
});

exports.updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const order = await Orders.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!order) {
      return next(new ErrorHandler("Order not found", 404));
    }
    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  } else {
    return next(new ErrorHandler("Invalid order ID", 400));
  }
});
