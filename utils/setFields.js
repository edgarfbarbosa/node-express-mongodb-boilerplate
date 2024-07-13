/**
 * Define os campos retornados em uma consulta Mongoose.
 * @param {Object} queryParameters - Query string com os parâmetros de limitação de campos.
 * @param {Object} query - Objeto de consulta do Mongoose.
 * @returns {Object} Objeto de consulta do Mongoose com a limitação de campos aplicada.
 */
const setFields = (queryParameters, query) => {
  if (queryParameters.fields) {
    const selectedFieldsAsString = queryParameters.fields.split(',').join(' ');

    query = query.select(selectedFieldsAsString);
  } else {
    query = query.select('-__v');
  }

  return query;
};

module.exports = setFields;
