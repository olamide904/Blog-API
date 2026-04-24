const Joi = require("joi");


const articleSchema = Joi.object({
 title: Joi.string().min(5).required(),
 content: Joi.string().min(15).required(),
 category: Joi.string().min(5).required(),
})


module.exports = articleSchema;