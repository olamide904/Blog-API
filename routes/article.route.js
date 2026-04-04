const express = require('express');

const router = express.Router()

const { 
  postArticle,
  getAllArticle,
  getBySearch,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  } = require('../controllers/article.controller.js')



router.post('/articles', postArticle);


router.get('/articles', getAllArticle);


router.get('/articles', getAllArticle)

router.get('/articles/search', getBySearch);


router.put('/articles/:id', updateArticleById);


router.delete('/articles/:id', deleteArticleById)


module.exports = router
