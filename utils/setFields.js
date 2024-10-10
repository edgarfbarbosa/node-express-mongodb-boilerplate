/**
 * Define os campos retornados em uma consulta Mongoose.
 * @param {string} selectedFieldsFromQuery - String com os parâmetros de limitação de campos.
 * @param {Object} query - Objeto de consulta do Mongoose.
 * @returns {Object} Objeto de consulta do Mongoose com a limitação de campos aplicada.
 */
const setFields = (selectedFieldsFromQuery, query) => {
  if (selectedFieldsFromQuery) {
    const fieldsWithSpaces = selectedFieldsFromQuery.split(',').join(' ');

    query = query.select(fieldsWithSpaces);
  } else {
    query = query.select('-__v');
  }

  return query;
};

module.exports = setFields;
