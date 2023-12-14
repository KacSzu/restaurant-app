const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new ErrorHandler("Authorization token required", 401));
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ _id });

    if (!user) {
      return next(new ErrorHandler("User not found", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
};

module.exports = requireAuth;
