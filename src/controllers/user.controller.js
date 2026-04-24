const UserModel = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../utils/bcrypt.js');




const registerUser = async (req, res, next) => {
try{
  const { email, password, name } = req.body;
  const existingUser = await UserModel.findOne({ email: email });
  if(existingUser) {
  return res.status(400).json({ message: 'User already exist' })
}

await hashPassword(password);
  
  const user = new UserModel({
    email: email,
    password: hashed,
    name: name,
  });
  
  await user.save();
  
  return res.status(200).json({ message : 'User registered successfully'});

} catch (error) {
  next(error);
  }

};



//
const loginUser = async (req, res, next) => {
try{
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
  return res.status(404).json({ message: 'User does not exist' }); 
  }
 const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid Credentials');


  const token = jwt.sign(
  { userId: user._id, name: user.name }, // Payload
    process.env.JWT_SECRET, // Secret
  { expiresIn: '7d' } // options 
  ); 

  const resUser = {
    id: user._id,
    email: user.email,
    name: user.name
  };
  
  res.status(200).json({ message: "logged In", user: resUser, token });
 } catch (error) {
  next(error);
  } 
 };


module.exports = { loginUser, registerUser }
