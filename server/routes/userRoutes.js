const express = require("express");
const router = express.Router();
const {
  loginUser,
  signupUser,
  updateUserPassword,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

router.post("/login", loginUser);

router.use(requireAuth);

router.post("/signup", signupUser);
router.post("/password/update", updateUserPassword);
module.exports = router;
