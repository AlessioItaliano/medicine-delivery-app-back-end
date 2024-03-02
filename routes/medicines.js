const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.json("<h2>main</h2>");
});

router.get("/:id", (req, res) => {});

module.exports = router;
