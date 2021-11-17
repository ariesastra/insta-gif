const route = require('express').Router();
const IndexController = require('../controller');
const LoginController = require('../controller/loginController');
const RegisterController = require('../controller/registerController');
const ProfileController = require('../controller/profileController');

route.get('/', IndexController.getInstaGif);
// route.post('/post', IndexController.postInstaGif);
// route.get('/login', LoginController.getLoginPage);
// route.post('/login', LoginController.postLogin);
// route.get('/register', RegisterController.getRegisterPage);
// route.post('/register', RegisterController.postRegister);
// route.get('/profile', ProfileController.getProfilePage);
// route.get('/profile/edit', ProfileController.getEditProfile);
// route.post('/profile/edit', ProfileController.postEditProfile);

module.exports = route;