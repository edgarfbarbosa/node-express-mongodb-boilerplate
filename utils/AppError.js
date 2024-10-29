class AppError extends Error {
  constructor(message, httpStatusCode) {
    super(message);

    this.httpStatusCode = httpStatusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
