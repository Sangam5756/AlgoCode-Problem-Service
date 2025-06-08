function ping(req, res) {
  res.status(200).json({ message: "PONG CONTROLLER IS WORKING FINE  " });
}

function AddProblem(req, res) {
  return res.status(501).json({
    message: " not implemented yet.",
  });
}

function getProblem(req, res) {
  return res.status(501).json({
    message: " not implemented yet.",
  });
}

function getProblems(req, res) {
  return res.status(501).json({
    message: " not implemented yet.",
  });
}

function deleteProblem(req, res) {
  return res.status(501).json({
    message: " not implemented yet.",
  });
}

function updateProblem(req, res) {
  return res.status(501).json({
    message: " not implemented yet.",
  });
}

module.exports = {
  AddProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  ping,
};
