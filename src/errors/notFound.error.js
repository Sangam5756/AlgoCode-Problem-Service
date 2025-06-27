const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFoundError extends BaseError {
  constructor(data) {
    super(
      "NOT_FOUND",
      StatusCodes.NOT_FOUND,
      `The requested resource was not found`,
      data
    );
  }
}

module.exports = NotFoundError;
