const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "sucess",
    message: "this is testing",
  });
});

module.exports = app;
