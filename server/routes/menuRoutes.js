const express = require("express");
const router = express.Router();
const { getMenu } = require("../controllers/menuControllers");
router.get("/", getMenu);
module.exports = router;
