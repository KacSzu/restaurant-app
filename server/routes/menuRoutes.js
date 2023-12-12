const express = require("express");
const router = express.Router();
const {
  getMenu,
  updateMenuSoldOut,
  deleteMenuItem,
  createMenuItem,
} = require("../controllers/menuController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getMenu);
router.patch("/:id", updateMenuSoldOut);
router.post("/new", createMenuItem);
router.delete("/:id", deleteMenuItem);
module.exports = router;
