const ArticleModel = require('../models/article.model.js');
const articleSchema = require('../Validators/article.validator.js')


//POST ARTICLE
const postArticle = async (req, res, next) => {


const { error, value } = articleSchema.validate(req.body);
 if(error) { 
 return res.status(400).json({ error: error.details[0].message });
}
try {
   const newArticle = new ArticleModel({
    title: req.body.title,
    content: req.body.content,
    author: req.user._id,
    category: req.body.category,
   });
  await newArticle.save();

return res.status(200).json({ 
    message: 'Article created',
    data: newArticle }) 
  
  } catch(error) {
    console.error(error)
    next(error) 
    }
}



//GET ALL ARTICLES
const getAllArticle = async (req, res, next) => {
 const { limit = 10, page = 1 } = req.query;
 const skip = (page - 1) * limit;
 

try { 
  const articles = await ArticleModel.find({}).populate('author', 'name _id email')
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);

   return res.status(200).json({
  message: 'Articles fetced',
  data: articles
})

   } catch(error) {
   console.error(error)
   next(error)
    }
}



//GET KEYWORD
const getBySearch = async (req, res, next) => {
  try{
      const { q } = req.query;
   if (!q) { return res.status(400).json({ message: 'Query parameter q required' })};
   const articles = await ArticleModel.find({
      $or:[ 
     { title: { $regex: q, $options: 'i' } },
     { content: { $regex: q, $options: 'i' } }
    ]  
  });
 if (articles.length === 0) { return res.status(404).json({ message: 'No articles found' });
  }
  res.status(200).json({ message: `${articles.length} articles found`,
          data: articles});

   } catch(error) {
   console.error(error)
   next(error)
  }
}



//GET AN ARTICLE
const getArticleById = async (req, res, next) => {
try {
  const id = req.params.id
  const article = await ArticleModel.findById(id)
 if(!article) {
 return res.status(404).json({ message: `Article id ${id} not found`}) }
  res.status(200).json({
   message: 'Article found',
   data: article
 })
   } catch(error) {
console.error(error)
   next(error)
    }
}



//EDIT AN ARTICLE
const updateArticleById = async (req, res, next) => {
 

const { error, value } = articleSchema.validate(req.body);
 if(error) {
 return res.status(400).json({ error: error.details[0].message });
}
try {
  const id = req.params.id;
  const updatedArticle = await ArticleModel.findOneAndUpdate(
  {
    _id: id,
   author: req.user._id, 
  },
   {
    $set: value
    }, 
  {
   new: true,
   runValidators: true 
   }
 );

if (!updatedArticle) {
return res.status(403).json({ message: `Article not found or not allowed to edit` });
    }
 return res.status(200).json({
 message:`Article updated`,
 data: updatedArticle })
 
  } catch(error) {
   console.error(error)
   next(error)
  }
}




//DELETE ARTICLE
const deleteArticleById = async (req, res, next) => {
try {
  const id = req.params.id;
 const article = await ArticleModel.findByIdAndDelete({
    _id: id,
    author: req.user.id
     });
  if(!article) { return res.status(403).json({
   message: `Article not found or not allowed to delete`}) }
  return res.status(200).json({
   message: 'Article deleted'
  })

} catch(error) {
console.error(error)
   next(error)
}
}



module.exports = {
  postArticle,
  getAllArticle,
  getBySearch,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
