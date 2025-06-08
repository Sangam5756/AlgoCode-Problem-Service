const express = require("express");
const problemController = require("../../controller/problem.controller");

const problemRouter = express.Router();

problemRouter.get("/ping",problemController.ping)

problemRouter.get("/:id", problemController.getProblems);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.AddProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.put("/:id", problemController.updateProblem);


module.exports = problemRouter;
