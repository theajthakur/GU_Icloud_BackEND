require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use(express.json());

const testRoute = require("./routes/test");
app.use("/", testRoute);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
  console.log(`Access URL: http://localhost:${PORT}`);
});
