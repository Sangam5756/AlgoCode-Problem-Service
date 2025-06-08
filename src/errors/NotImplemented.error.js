const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class NotImplemented extends baseError {
  constructor(methodName) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented yet`,
      {}
    );
  }
}

module.exports = NotImplemented;
