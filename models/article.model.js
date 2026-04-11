
const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema(
{
 title: { type: String, required: true, minLength: 5, },
 content: { type: String, required: true, minLength: 15, },
 author: { type: mongoose.Schema.Types.ObjectId, 
           ref: "User", 
           required: true,
         },
 category: { type: String, required: true, minLength: 5, },

}, { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);



module.exports = Article;
