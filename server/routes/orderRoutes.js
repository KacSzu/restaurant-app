const express = require("express");
const router = express.Router();
const {
  getOrders,
  createOrder,
  getOrdersByStatus,
  updateOrderStatus,
} = require("../controllers/orderController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getOrders);
router.patch("/:id", updateOrderStatus);
router.get("/:status", getOrdersByStatus);
router.post("/new", createOrder);

module.exports = router;
