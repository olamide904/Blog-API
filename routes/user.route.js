const express = require('express');
const router = express.Router();
const { registerUser, loginUser} = require('../controllers/user.controller.js');


router.post('/auth/sign_up', registerUser);

router.post('/auth/login', loginUser);


module.exports = router;
