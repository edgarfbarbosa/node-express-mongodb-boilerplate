/**
 * Configura a ordenação para a consulta do MongoDB.
 * @param {string} sort - String com os parâmetros de ordenação. Os campos devem ser separados por vírgula e podem incluir um prefixo de ordem.
 * @param {Object} query - Consulta do MongoDB a ser modificada.
 */
const setSort = (sort, query) => {
  if (sort) {
    const sortBy = sort.split(',').join(' ');

    query.sort(sortBy);
  }
};

module.exports = setSort;
