const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET);
};

exports.loginUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.login(email, password);

  const token = createToken(user._id);

  if (!user) next(new ErrorHandler("Could not log in"), 400);
  return res.status(200).json({
    success: true,
    message: "Successfully log in",
    data: { email, token },
  });
});

exports.signupUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.signup(email, password);

  const token = createToken(user._id);

  if (!user) next(new ErrorHandler("Could not create a user"), 400);
  return res.status(200).json({
    success: true,
    message: "User created successfully",
    data: { email, token },
  });
});
