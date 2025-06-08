/**
 * Loads environment variables from a .env file into process.env.
 * @module dotenv
 */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT:process.env.PORT || 4000,
}