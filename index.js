const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("done " + PORT);
});
app.get("/", (req, res) => {
  res.send("<h1>hi1</h1>");
});
