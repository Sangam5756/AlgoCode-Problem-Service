/**
 * Creates an Express router for the API endpoints.
 * Uses the v1Router for version 1 endpoints.
 * @returns {Object} The Express router for the API.
 */
const express = require('express');
const v1Router = require('./v1');


const apiRouter = express.Router();


apiRouter.use("/v1",v1Router)



module.exports = apiRouter;
