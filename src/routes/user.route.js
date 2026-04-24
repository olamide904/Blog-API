const express = require('express');
const router = express.Router();
const { registerUser, loginUser} = require('../controllers/user.controller.js');
const { validateRegister, validateLogin } = require('../Validators/user.validator.js');


router.post('/auth/sign_up', validateRegister, registerUser);

router.post('/auth/login', validateLogin, loginUser);


module.exports = router;
