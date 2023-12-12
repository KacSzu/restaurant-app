const Menu = require("../models/menuModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFilters = require("../utils/apiFilters");
const mongoose = require("mongoose");
exports.getMenu = catchAsyncErrors(async (req, res) => {
  const apiFilters = new APIFilters(Menu.find(), req.query).filter();
  const menu = await apiFilters.query;
  if (!menu) next(new ErrorHandler("Menu not found", 404));
  return res
    .status(200)
    .json({ success: true, message: "Successfully get menu", data: menu });
});

exports.updateMenuSoldOut = catchAsyncErrors(async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  if (mongoose.Types.ObjectId.isValid(id)) {
    const menuItem = await Menu.findOneAndUpdate({ _id: id }, { ...req.body });
    return res.status(200).json({
      success: true,
      message: "Menu item updated sucessfully",
      data: menuItem,
    });
  } else {
    return next(new ErrorHandler("Order not found", 404));
  }
});
exports.createMenuItem = catchAsyncErrors(async (req, res) => {
  const { category, name, unitPrice, ingredients } = req.body;
  console.log(req.body);
  const menuItem = await Menu.create({
    category,
    name,
    unitPrice,
    ingredients,
  });
  return res.status(200).json({
    success: true,
    message: "Menu item created sucessfully",
    data: menuItem,
  });
});
exports.deleteMenuItem = catchAsyncErrors(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (mongoose.Types.ObjectId.isValid(id)) {
    const menuItem = await Menu.findOneAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Menu item deleted sucessfully",
      data: menuItem,
    });
  } else {
    return next(new ErrorHandler("Order not found", 404));
  }
});
