

function ping(req, res) {
  res.status(200).json({ message: "PONG CONTROLLER IS WORKING FINE  " });
}



function AddProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}


module.exports = {
  AddProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  ping
};
