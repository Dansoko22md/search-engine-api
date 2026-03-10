const { indexDocument, searchDocuments } = require('../services/searchService');

exports.index = async (req, res) => {
  try {
    const doc = req.body;
    const result = await indexDocument(doc);
    res.status(201).json({ message: 'Document indexed', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.search = async (req, res) => {
  try {
    const { q, from, size, sort, ...filters } = req.query;
    // Convert filters to ES filter terms if needed
    const filterArr = Object.entries(filters).map(([key, value]) => ({ term: { [key]: value } }));
    const result = await searchDocuments(q, filterArr, parseInt(from) || 0, parseInt(size) || 10, sort);
    res.json(result.hits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
