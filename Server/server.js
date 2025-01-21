const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Các route

app.post("/api/v1/register", (req, res) => {
  console.log(req.body, "re");

  res.send("Hello World!");
});

app.listen(9000, () => {
  console.log(`Server is running on http://localhost:`);
});
