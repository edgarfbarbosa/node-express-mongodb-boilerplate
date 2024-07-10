/**
 * Limita os campos retornados em uma consulta.
 * @param {Object} queryParameters - Query string com os parâmetros de limitação de campos.
 * @param {Object} query - Objeto de consulta do Mongoose.
 * @returns {Object} Objeto de consulta do Mongoose com a limitação de campos aplicada.
 */
const limitFields = (queryParameters, query) => {
  if (queryParameters.fields) {
    const selectedFields = queryParameters.fields.split(',').join(' ');

    query = query.select(selectedFields);
  } else {
    query = query.select('-__v');
  }

  return query;
};

module.exports = limitFields;
