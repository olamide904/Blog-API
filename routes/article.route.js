const express = require('express');

const router = express.Router()

const { 
  postArticle,
  getAllArticle,
  getBySearch,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  } = require('../controllers/article.controller.js');

const requireAuth = require('../middlewares/requireAuth.js');


router.post('/articles', requireAuth, postArticle);


router.get('/articles', requireAuth, getAllArticle);


router.get('/articles/search', requireAuth, getBySearch);


router.get('/articles/:id', requireAuth, getArticleById);


router.put('/articles/:id', requireAuth, updateArticleById);


router.delete('/articles/:id', requireAuth, deleteArticleById);

module.exports = router
