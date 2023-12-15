require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errors");
const ErrorHandler = require("./utils/errorHandler");

app.use(
  cors({
    origin: ["https://restaurant-app-api.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/orders", orderRoutes);
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route not found`, 404));
});

app.use(errorMiddleware);

process.on("uncaughtException", (err) => {
  console.error(`Error:${err.message}`);
  console.error(`Shutting down due to uncaught exception.`);
  process.exit(1);
});

const server = mongoose
  .connect(process.env.DB_LOCAL_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening to port  ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.on("unhandledRejection", (err) => {
  console.error(`Error:${err.message}`);
  console.error(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
