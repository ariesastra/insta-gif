const {User} = require('../models')

class RegisterController {
    static getRegisterPage(req,res){
        res.render('auth-pages/registerform')
    }

    static postRegister(req,res){
        // console.log(req.body)
        const {email, password} = req.body
        User.create({email, password})
        .then(user=>{
            res.redirect('/login')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = RegisterController