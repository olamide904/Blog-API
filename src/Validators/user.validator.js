const Joi = require("joi");


const registerSchema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
   });

   const validateRegister = (req, res, next) =>{
       const { error } = registerSchema.validate(req.body);
        if (error) {
          return  res.status(400).json({ message: error.details[0].message });
        }
       console.log(error)
       next();
   }

 const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
   });

const validateLogin = (req, res, next) =>{
    const { error } = loginSchema.validate(req.body);
  if (error) {
   return res.status(400).json({ message: error.details[0].message });
  }
  console.log(error)
       next();
   }

   module.exports = { validateRegister, validateLogin };