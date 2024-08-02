/**
 * Configura a paginação para a consulta do MongoDB.
 * @param {string} page - Número da página solicitada.
 * @param {string} limit - Limite de itens por página.
 * @param {mongoose.Query} query - Consulta do MongoDB a ser modificada.
 */
const setPagination = (page, limit, query) => {
  if (page && limit) {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 100;
    const skip = (pageNumber - 1) * limit;

    query.skip(skip).limit(limitNumber);
  }
};

module.exports = setPagination;
