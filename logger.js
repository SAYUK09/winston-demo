const winston = require("winston");

const options = {
  file: {
    level: "info",
    filename: "./logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  },
  console: {
    level: "silly",
    format: winston.format.combine(
      winston.format.colorize({ all: true }),

      winston.format.timestamp(),
      winston.format.simple(),
      winston.format.printf(
        (info) => `${info.timestamp} --> ${info.level}: ${info.message} `
      )
    ),

    json: true,
  },
};

const log = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "debug.log" }),
    new winston.transports.Console(options.console),
  ],

  exitOnError: false,
});

module.exports = log;
