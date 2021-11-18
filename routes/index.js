const route = require('express').Router();
const IndexController = require('../controllers');
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const ProfileController = require('../controllers/profileController');

route.get('/', IndexController.getInstaGif);
route.get('/post', IndexController.postInstaGif);
// route.post('/post', IndexController.postInstaGif);
// route.get('/post/edit/:id', IndexController.postInstaGif);
// route.post('/post/edit/:id', IndexController.postInstaGif);
// route.get('/post/delete/:id', IndexController.postInstaGif);
route.get('/login', LoginController.getLoginPage);
route.post('/login', LoginController.postLogin);
route.get('/register', RegisterController.getRegisterPage);
route.post('/register', RegisterController.postRegister);
route.get('/profile', ProfileController.getProfilePage);
route.get('/profile/edit', ProfileController.getEditProfile);
route.post('/profile/edit', ProfileController.postEditProfile);

module.exports = route;