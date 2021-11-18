const route = require('express').Router();
const IndexController = require('../controllers');
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const ProfileController = require('../controllers/profileController');
const fileUpload = require('express-fileupload');

route.get('/login', LoginController.getLoginPage);
route.post('/login', LoginController.postLogin);
route.get('/register', RegisterController.getRegisterPage);
route.post('/register', RegisterController.postRegister);
route.get('/logout', LoginController.getLogOut)

route.use(function (req, res, next) {
  //console.log(req.session)
  if (!req.session.userId) {
    const error = `You need to login!`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
})

// For Upload
route.use(fileUpload());
route.get('/', IndexController.getInstaGif);
route.get('/post', IndexController.getAddInstaGif);
route.post('/post', IndexController.postAddInstaGif);
// route.get('/post/edit/:id', IndexController.postInstaGif);
// route.post('/post/edit/:id', IndexController.postInstaGif);
// route.get('/post/delete/:id', IndexController.postInstaGif);
route.get('/profile/:id', ProfileController.getProfilePage);
route.get('/profile/edit/:id', ProfileController.getEditProfile);
route.post('/profile/edit/:id', ProfileController.postEditProfile);

module.exports = route;