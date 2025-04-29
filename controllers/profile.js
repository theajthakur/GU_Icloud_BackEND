const axios = require("axios");
const cheerio = require("cheerio");

const profile_handler = async (req, res) => {
  const mdata = {};
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
  mdata.generalInfo = dataArray;
  mdata.picture = $("#avatar2").attr("src");
  res.json(mdata);
};

module.exports = { profile_handler };
