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

module.exports = router;
