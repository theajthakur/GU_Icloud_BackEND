require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const profileRoute = require("./routes/profile");
const testRoute = require("./routes/test");

app.use("/test", testRoute);
app.use("/", profileRoute);

const checkServer = () => {
  fetch(process.env.CRON_URL)
    .then((response) => {
      if (response.status !== 200) {
        console.log(response.data);
        throw new Error("Server is not responding");
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === "success") {
        console.log("Server is alive");
      } else {
        console.log("Server is not alive");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  setTimeout(checkServer, 5 * 60000); // Check every 5 minutes
};
checkServer();

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
  console.log(`Access URL: http://localhost:${PORT}`);
});
