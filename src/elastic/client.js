const { Client } = require('elasticsearch');

const esClient = new Client({
  host: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  log: 'error',
});

module.exports = esClient;
