const { User, Profile } = require('../models')

class RegisterController {
    static getRegisterPage(req, res) {
        res.render('auth-pages/registerform')
    }

    static postRegister(req, res) {
        const { email, password } = req.body
        const { name, age } = req.body
        let dataUser
        User.create({ email, password })
            .then(user => {
                dataUser = user
                return Profile.create({ name, age, UserId: dataUser.id })
            })
            .then(profile => {
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = RegisterController