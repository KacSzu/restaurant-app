const express = require("express");
const router = express.Router();
const { getOrders, createOrder } = require("../controllers/orderController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getOrders);
router.post("/new", createOrder);

module.exports = router;
