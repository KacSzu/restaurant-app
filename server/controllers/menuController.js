const Menu = require("../models/menuModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFilters = require("../utils/apiFilters");
const mongoose = require("mongoose");

exports.getMenu = catchAsyncErrors(async (req, res) => {
  const apiFilters = new APIFilters(Menu.find(), {
    category: req.query.category,
  }).filter();

  const menu = await apiFilters.query;
  const count = menu.length;

  const size = process.env.PAGE_SIZE;

  const currentPage = parseInt(req.query.page, 10) || 1;
  const startIndex = (currentPage - 1) * Number(size);
  const endIndex = startIndex + Number(size);
  const paginatedData = menu.slice(startIndex, endIndex);

  if (!menu) next(new ErrorHandler("Menu not found", 404));
  return res.status(200).json({
    success: true,
    message: "Successfully retrieved menu",
    data: { count, paginatedData },
  });
});

exports.updateMenuSoldOut = catchAsyncErrors(async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const menuItem = await Menu.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!menuItem) {
      return next(new ErrorHandler("Could not found menu item"));
    }
    return res.status(200).json({
      success: true,
      message: "Menu item updated sucessfully",
      data: menuItem,
    });
  } else {
    return next(new ErrorHandler("Invalid menu item ID", 404));
  }
});
exports.createMenuItem = catchAsyncErrors(async (req, res) => {
  const { category, name, unitPrice, ingredients } = req.body;
  const menuItem = await Menu.create({
    category,
    name,
    unitPrice,
    ingredients,
  });
  if (!menuItem) {
    return next(new ErrorHandler("Could not create menu item", 404));
  }
  return res.status(201).json({
    success: true,
    message: "Menu item created sucessfully",
    data: menuItem,
  });
});

exports.deleteMenuItem = catchAsyncErrors(async (req, res) => {
  const id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const menuItem = await Menu.findOneAndDelete({ _id: id });

    if (!menuItem) {
      return next(new ErrorHandler("Menu item can not be found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Menu item deleted sucessfully",
      data: menuItem,
    });
  } else {
    return next(new ErrorHandler("Invalid menu item ID", 400));
  }
});
