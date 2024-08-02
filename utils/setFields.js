/**
 * Define os campos retornados em uma consulta Mongoose.
 * @param {string} fields - String com os parâmetros de limitação de campos.
 * @param {Object} query - Objeto de consulta do Mongoose.
 * @returns {Object} Objeto de consulta do Mongoose com a limitação de campos aplicada.
 */
const setFields = (fields, query) => {
  if (fields) {
    const selectedFieldsAsString = fields.split(',').join(' ');

    query = query.select(selectedFieldsAsString);
  } else {
    query = query.select('-__v');
  }

  return query;
};

module.exports = setFields;
