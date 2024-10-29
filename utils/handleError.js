const jsend = require('jsend');

const handleError = (err, res) => {
  err.httpStatusCode = err.httpStatusCode || 500;

  if (process.env.NODE_ENV !== 'development') {
    err.httpStatusCode = 500;
    err.message = 'Algo deu errado';
  } else {
    console.error(err.stack);
  }

  res.status(err.httpStatusCode).json(
    jsend.fail({
      message: err.message
    })
  );
};

module.exports = handleError;
