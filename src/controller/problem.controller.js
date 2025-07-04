const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repository");
const NotFoundError = require("../errors/notFound.error");

const problemService = new ProblemService(new ProblemRepository());

function ping(req, res, next) {
  res
    .status(StatusCodes.OK)
    .json({ message: "PONG CONTROLLER IS WORKING FINE  " });
}

async function AddProblem(req, res, next) {
  try {
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

      const response = await problemService.getProblem(req.params.id)
      if(!response) {
          throw new NotFoundError(req.params.id);
      }
      res.status(StatusCodes.OK).json({
        success: true,
        message: `SuccessFully retrieved Problem with id ${req.params.id}`,
        error: {},
        data: response,
      });
  } catch (error) {
    next(error);
  }
} 

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    console.log(response)
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const response = await problemService.deleteProblem(req.params.id);
    console.log(response)
    

    res.status(StatusCodes.OK).json({
      success: true,
      message: `SuccessFully deleted Problem with id ${req.params.id}`,
      error: {},
      data: response,
    })
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    
    const response = problemService.updateProblem(req.params.id, req.body);
    
    if (!response) {
      throw new NotFoundError(req.params.id);
    }
    res.status(StatusCodes.OK).json({
      success: true,
      message: `SuccessFully updated Problem with id ${req.params.id}`,
      error: {},
      data: response,
    });

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
