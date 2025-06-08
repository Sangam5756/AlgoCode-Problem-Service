const { StatusCodes } = require("http-status-codes");
const baseError = require("./base.error");

class BadRequestError extends baseError {
  constructor(propertyName, details) {
    super(
      "BadRequest ",
      StatusCodes.BAD_REQUEST,
      `Invalid stucture for ${propertyName} provided`,
      details
    );
  }
}


module.exports = BadRequestError;