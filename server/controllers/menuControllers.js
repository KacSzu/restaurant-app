const Menu = require("../models/menuModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFilters = require("../utils/apiFilters");

exports.getMenu = catchAsyncErrors(async (req, res) => {
  const apiFilters = new APIFilters(Menu.find(), req.query).filter();
  const menu = await apiFilters.query;
  if (!menu) next(new ErrorHandler("Menu not found", 404));
  return res
    .status(200)
    .json({ success: true, message: "Successfully get menu", data: menu });
});
