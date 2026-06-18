const express = require('express');
const { registerUser, loginUser, uploadImage } = require('../controllers/user.controller.js');
const { validateRegister, validateLogin } = require('../Validators/user.validator.js');
const upload = require('../middlewares/upload.js');



const router = express.Router();


router.post('/upload', upload.array('images', 5), uploadImage);

router.post('/auth/sign-up', validateRegister, registerUser);

router.post('/auth/login', validateLogin, loginUser);


module.exports = router;
