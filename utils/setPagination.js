/**
 * Configura a paginação para a consulta do MongoDB.
 * @param {string} pageFromQuery - Número da página solicitada.
 * @param {string} limitFromQuery - Limite de itens por página.
 * @param {mongoose.Query} query - Consulta do MongoDB a ser modificada.
 */
const setPagination = (pageFromQuery, limitFromQuery, query) => {
  if (pageFromQuery && limitFromQuery) {
    const pageNumber = parseInt(pageFromQuery) || 1;
    const limitNumber = parseInt(limitFromQuery) || 100;
    const skip = (pageNumber - 1) * limitNumber;

    query.skip(skip).limit(limitNumber);
  }
};

module.exports = setPagination;
