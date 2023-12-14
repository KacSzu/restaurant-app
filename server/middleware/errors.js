const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors)
        .map((value) => value.message)
        .join(". ");
      error = new ErrorHandler(message, 400);
    }

    if (err.code === 11000) {
      const message = `Duplicate field value entered: ${JSON.stringify(
        err.keyValue
      )}. Please use another value!`;
      error = new ErrorHandler(message, 400);
    }

    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 404);
    }

    res.status(error.statusCode).json({
      status: error.status,
      message: error.message || "Internal Server Error",
    });
  }
};
