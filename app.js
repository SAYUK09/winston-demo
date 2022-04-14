const express = require("express");
const log = require("./logger");
const app = express();
const userRoute = require("./routes/user");
var morgan = require("morgan");

// app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send("Hello Express app!");
  } catch (err) {
    log.error(err);
  }
});

app.listen(5000, () => {
  log.error("Error Log");
  log.warn(" WARN Log");
  log.info("INFO Log");
  log.http("HTTP Log");
  log.verbose("VERBOSE Log");
  log.debug("DEBUG Log");
  log.silly("SILLY Log");
});

app.use("/user", userRoute);

// log.warn("This is how WARN looks like");
// log.info("This how INFO looks");
// log.http("This how HTTP looks");
// log.verbose("This how VERBOSE looks");
// log.debug("This how DEBUG looks");
// log.silly("This how SILLY looks");
// log.error("Some weird but silly error that will make your life hell.");

// const morgan = require("morgan");
// app.use(morgan("common"));
