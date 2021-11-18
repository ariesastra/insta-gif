const route = require('express').Router();
const IndexController = require('../controllers');
const LoginController = require('../controllers/loginController');
const RegisterController = require('../controllers/registerController');
const ProfileController = require('../controllers/profileController');

route.get('/login', LoginController.getLoginPage);
route.post('/login', LoginController.postLogin);
route.get('/register', RegisterController.getRegisterPage);
route.post('/register', RegisterController.postRegister);
<<<<<<< HEAD

route.use(function (req, res, next) {
  console.log(req.session)
  if (!req.session.userId) {
    const error = `You need to login!`
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
});

route.get('/', IndexController.getInstaGif);
route.get('/post', IndexController.postGifPage);
route.post('/post', IndexController.postInstaGif);
=======


route.use(function (req, res, next) {
    //console.log(req.session)
    if (!req.session.userId) {
        const error = `You need to login!`
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
})

route.get('/', IndexController.getInstaGif);
route.get('/post', IndexController.getAddInstaGif);
route.post('/post', IndexController.getPostInstaGif);
>>>>>>> e9bcda676179d6dd0a4a0ce79b1aedd73e84f9a0
// route.get('/post/edit/:id', IndexController.postInstaGif);
// route.post('/post/edit/:id', IndexController.postInstaGif);
// route.get('/post/delete/:id', IndexController.postInstaGif);
route.get('/profile', ProfileController.getProfilePage);
route.get('/profile/edit', ProfileController.getEditProfile);
route.post('/profile/edit', ProfileController.postEditProfile);

<<<<<<< HEAD
=======
route.get('/logout',LoginController.getLogOut)



>>>>>>> e9bcda676179d6dd0a4a0ce79b1aedd73e84f9a0

module.exports = route;