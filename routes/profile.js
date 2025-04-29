const express = require("express");
const router = express.Router();

const { profile_handler } = require("../controllers/profile");
const cookieFetcher = require("../controllers/cookieFetcher");

router.get("/:mcookie", profile_handler);
router.post("/login", cookieFetcher);

module.exports = router;
