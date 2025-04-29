const express = require("express");
const router = express.Router();

const { profile_handler } = require("../controllers/profile");

router.get("/", profile_handler);

module.exports = router;
