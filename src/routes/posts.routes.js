const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/', postsController.getAllPosts);

// GET /api/v1/posts/:id (This fixes your 404 for specific IDs)
router.get('/:id', postsController.getPostById);

module.exports = router;
