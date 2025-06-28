/**
 * Loads environment variables from a .env file into process.env.
 * @module dotenv
 */
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 4000,
  ATLAS_DB_URL: process.env.PROD_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  LOG_DB_URL: process.env.LOG_DB_URL || "mongodb://localhost:27017/logs",
};

