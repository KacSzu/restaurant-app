const express = require("express");
const router = express.Router();
const { getMenu } = require("../controllers/menuController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getMenu);
module.exports = router;
