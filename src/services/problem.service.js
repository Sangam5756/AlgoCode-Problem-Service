const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // 1. Sanitize the markdown for description
    problemData.description = sanitizeMarkdownContent(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblemById(problemId);
    return problem;
  }

  async deleteProblem(problemId) {
    const problem = await this.problemRepository.deleteProblem(problemId);
    return problem;
  }
  async updateProblem(problemId, problemData) {
    // 1. Sanitize the markdown for description
    problemData.description = sanitizeMarkdownContent(problemData.description);
    const updatedProblem = await this.problemRepository.updateProblem(
      problemId,
      problemData
    );
    return updatedProblem;
  }
}

module.exports = ProblemService;
