const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");

const requireAuth = catchAsyncErrors(async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(new ErrorHandler("Authorization token required"), 401);
  }
  const token = authorization.split(" ")[1];
  const { _id } = jwt.verify(token, process.env.SECRET);

  req.user = await User.findOne({ _id });
  next();
});

module.exports = requireAuth;
