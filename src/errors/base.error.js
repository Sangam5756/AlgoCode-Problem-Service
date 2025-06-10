class BaseError extends Error {
  constructor(name, statusCode, description,details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    // Error.captureStackTrace(this);
    this.details = details || null;


    // console.log("printing Stack Trace");
    // console.log(this.stack);
  }
}



module.exports = BaseError;
