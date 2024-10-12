const jsend = require('jsend');

const handleError = (err, res) => {
  let { httpStatusCode, message } = err;

  if (process.env.NODE_ENV !== 'development') {
    httpStatusCode = 500;
    message = 'Algo deu errado';
  }

  res.status(httpStatusCode).json(
    jsend.fail({
      message
    })
  );
};

module.exports = handleError;
