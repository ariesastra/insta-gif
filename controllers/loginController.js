const {User} = require('../models')
const bcrypt = require('bcryptjs');

class LoginController{
     static  getLoginPage(req,res){
         res.render('auth-pages/loginform')
     }
}

module.exports =LoginController