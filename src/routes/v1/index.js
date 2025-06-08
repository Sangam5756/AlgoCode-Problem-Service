/**
 * Creates a new Express router for version 1 of the API.
 * @requires express
 * @requires ./problems.route
 * @returns {Router} A router object that handles routes for version 1 of the API.
 */
const express = require("express");
const problemRouter = require("./problems.route");

const v1Router = express.Router();

v1Router.use("/problems", problemRouter);

module.exports = v1Router;
