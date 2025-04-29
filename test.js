const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

const studentId = "24GCEBCS056";
const studentPass = "6207085480";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://gu.icloudems.com/corecampus/index.php", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("#useriid");
  await page.type("#useriid", studentId);
  await page.type("#actlpass", studentPass);
  await page.select("#selectbridd", "30");
  await delay(1000);

  await page.click("#psslogin");
  await page.waitForNavigation({ waitUntil: "networkidle2" });

  const cookies = await page.cookies();
  const session = cookies.find((c) => c.name === "PHPSESSID");
  await browser.close();
  if (session) {
    return session.value;
  } else {
    return 0;
  }
})();
