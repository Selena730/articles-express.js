const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const articles = await db.any('SELECT * FROM articles');
        res.json(articles);
    } catch (err) {
        console.error('Error fetching articles:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const articleId = req.params.id;
    const article = await db.oneOrNone('SELECT * FROM articles WHERE id = $1', [articleId]);
    res.json(article);
});

module.exports = router;
