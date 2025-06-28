const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];


allowedTransports.push(
  new winston.transports.Console({
    level: "info",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`)
    ),
  })
);


allowedTransports.push(
  new winston.transports.MongoDB({
    level: "info",
    db: LOG_DB_URL, 
    options: { useUnifiedTopology: true },
    collection: "log_entries",
    format: winston.format.combine(
      winston.format.timestamp(),
    ),
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf((info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: allowedTransports,
});

module.exports = { logger };
