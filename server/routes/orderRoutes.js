const express = require("express");
const router = express.Router();
const { getOrders, createOrder } = require("../controllers/orderControllers");

router.get("/", getOrders);
router.post("/new", createOrder);

module.exports = router;
