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

router.use(requireAuth);


router.post('/articles', postArticle);


router.get('/articles', getAllArticle);


router.get('/articles/search', getBySearch);


router.get('/articles/:id', getArticleById);


router.put('/articles/:id', updateArticleById);


router.delete('/articles/:id', deleteArticleById);


module.exports = router
