const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);

  if (!user) {
    return next(new ErrorHandler("Could not log in", 400));
  }
  const token = createToken(user._id);

  return res.status(200).json({
    success: true,
    message: "Successfully logged in",
    data: { email, token, firstName: user.firstName, role: user.role },
  });
});

exports.signupUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role, firstName } = req.body;
  const user = await User.signup(email, password, role, firstName);

  if (!user) {
    return next(new ErrorHandler("Could not create a user", 400));
  }
  const token = createToken(user._id);

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: { email, token, firstName: user.firstName, role: user.role },
  });
});

exports.updateUserPassword = catchAsyncErrors(async (req, res, next) => {
  const { email, firstName, role } = req.user;
  const { password, confirmPassword } = req.body;

  const user = await User.setPassword(email, password, confirmPassword);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const token = createToken(user._id);

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
    data: { email, token, firstName, role },
  });
});
