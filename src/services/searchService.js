const esClient = require('../elastic/client');

const INDEX = 'documents';

const indexDocument = async (doc) => {
  return esClient.index({
    index: INDEX,
    body: doc,
  });
};

const searchDocuments = async (query, filters, from = 0, size = 10, sort) => {
  const esQuery = {
    index: INDEX,
    body: {
      query: {
        bool: {
          must: [
            query ? { multi_match: { query, fields: ['title', 'content', 'tags'] } } : { match_all: {} }
          ],
          filter: filters || [],
        },
      },
      from,
      size,
      sort: sort ? [sort] : undefined,
    },
  };
  return esClient.search(esQuery);
};

module.exports = { indexDocument, searchDocuments };
