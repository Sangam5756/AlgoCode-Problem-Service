const { logger } = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemById(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const problem = await Problem.findByIdAndDelete(problemId);

      if (!problem) {
        logger.error(`Problem with id ${problemId} not found for deletion`);
        throw new NotFoundError(problemId);
      }
      return problem;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }

  async updateProblem(problemId, problemData) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(
        problemId,
        problemData,
        { new: true }
      );
      return updatedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
