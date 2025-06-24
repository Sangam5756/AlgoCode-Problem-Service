const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repository");

const problemService = new ProblemService(new ProblemRepository());

function ping(req, res, next) {
  res
    .status(StatusCodes.OK)
    .json({ message: "PONG CONTROLLER IS WORKING FINE  " });
}

async function AddProblem(req, res, next) {
  try {
    console.log("incoming Request Body",req.body);
    const newproblem = await problemService.createProblem(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "SuccessFully Created New Problem",
      error: {},
      data: newproblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const response = await ProblemService.getAllProblems();
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("updateProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  AddProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  ping,
};
