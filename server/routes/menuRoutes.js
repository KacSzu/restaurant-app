const express = require("express");
const router = express.Router();
const { getMenu, getCategoryMenu } = require("../controllers/menuControllers");
router.get("/menu", getMenu);
module.exports = router;
