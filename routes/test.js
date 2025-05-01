const express = require("express");
const router = express.Router();

router.get("/live", (req, res) => {
  try {
    return res
      .status(200)
      .json({ status: "success", message: "Server is working Properly!" });
  } catch (error) {
    return res
      .status(200)
      .json({ status: "error", message: "Server is facing issue!" });
  }
});
module.exports = router;
