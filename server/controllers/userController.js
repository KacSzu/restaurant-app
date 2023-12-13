const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

exports.loginUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const token = createToken(user._id);

  if (!user) next(new ErrorHandler("Could not log in"), 400);
  return res.status(200).json({
    success: true,
    message: "Successfully log in",
    data: { email, token, firstName: user.firstName, role: user.role },
  });
});

exports.signupUser = catchAsyncErrors(async (req, res) => {
  const { email, password, role, firstName } = req.body;
  const user = await User.signup(email, password, role, firstName);

  const token = createToken(user._id);

  if (!user) next(new ErrorHandler("Could not create a user"), 400);
  return res.status(200).json({
    success: true,
    message: "User created successfully",
    data: { email, token, firstName: user.firstName, role: user.role },
  });
});

exports.updateUserPassword = catchAsyncErrors(async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  const { email, firstName, role } = req.user;
  const { password, confirmPassword } = req.body;

  const user = User.setPassword(email, password, confirmPassword);

  if (!user) next(new ErrorHandler("User not found"), 404);
  const token = createToken(user._id);

  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
    data: { email, token, firstName, role },
  });
});
