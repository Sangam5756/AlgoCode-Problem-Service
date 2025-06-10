const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class InternalServerError extends baseError {
  constructor(details) {
    super(
      "internalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `something went wrong`,
      details
    );
  }
}


module.exports = InternalServerError;