const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");

function ping(req, res,next) {
  res
    .status(StatusCodes.OK)
    .json({ message: "PONG CONTROLLER IS WORKING FINE  " });
}

function AddProblem(req, res,next) {
  try {
    throw new NotImplemented("AddProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res,next) {
  try {
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res,next) {
  try {
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res,next) {
  try {
    throw new NotImplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res,next) {
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
