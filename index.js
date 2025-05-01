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

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
  console.log(`Access URL: http://localhost:${PORT}`);
});
