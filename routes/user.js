const express = require("express");
const res = require("express/lib/response");
let router = express.Router();

router.get("/", (req, res) => {
  res.send(";a;a");
});

module.exports = router;
