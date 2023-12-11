const express = require("express");
const router = express.Router();
const { getMenu, updateMenuSoldOut } = require("../controllers/menuController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getMenu);
router.patch("/:id", updateMenuSoldOut);
module.exports = router;
