const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

router.get("/", async (req, res) => {
  const response = await axios.get(
    "https://gu.icloudems.com/corecampus/student/myprofile/myprofile_nw.php",
    {
      headers: {
        Cookie: "PHPSESSID=14bdab5409dbc37cd62c3a68823f7c4d",
        Referer:
          "https://gu.icloudems.com/corecampus/student/student_index.php",
      },
    }
  );
  const $ = cheerio.load(response.data);
  const userInfo = $(".profile-user-info");
  const rows = userInfo.find(".row");
  const dataArray = [];
  rows.each((i, el) => {
    const row = $(el);
    const dataRow = row.find("div");
    const store = [];
    dataRow.each((ii, eel) => {
      const rrow = $(eel);
      store.push(rrow.text().trim());
    });
    dataArray.push(store);
  });
  res.send(dataArray);
});

module.exports = router;
