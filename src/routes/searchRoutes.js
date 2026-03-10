const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

/**
 * @swagger
 * /api/search/index:
 *   post:
 *     summary: Index a new document
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Document indexed
 */
router.post('/index', searchController.index);

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search documents
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query
 *       - in: query
 *         name: from
 *         schema:
 *           type: integer
 *         description: Pagination start
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: Number of results
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Search results
 */
router.get('/', searchController.search);

module.exports = router;
