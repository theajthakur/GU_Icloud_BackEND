const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const cookieFetcher = async (req, res) => {
  try {
    const startTime = new Date();
    const { studentId, studentPass } = req.body;
    if (!studentId || !studentPass)
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Argument!" });
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined, // Safe fallback
    });
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
      const endTime = new Date();
      return res.json({
        status: "success",
        message: "Cookie Fetched!",
        cookie: session.value,
        timeTaken: parseInt((endTime - startTime) / 1000),
      });
    } else {
      return res.status(400).json({ status: "error", message: "Login Failed" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ status: "error", message: error.message || "Server Error" });
  }
};

module.exports = cookieFetcher;
