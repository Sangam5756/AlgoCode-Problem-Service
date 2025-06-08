const express = require("express");
const problemController = require("../../controller/problem.controller");

const problemRouter = express.Router();

/**
 * Defines the routes for problem-related operations using the ProblemController.
 * @route GET /ping
 * @route GET /
 * @route GET /:id
 * @route POST /
 * @route DELETE /:id
 * @route PUT /:id
 */
problemRouter.get("/ping",problemController.ping)

problemRouter.get("/:id", problemController.getProblems);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.AddProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.put("/:id", problemController.updateProblem);


module.exports = problemRouter;
