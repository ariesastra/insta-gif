const { User, Profile } = require('../models')

class RegisterController {
    static getRegisterPage(req, res) {
        const { err } = req.query
        res.render('auth-pages/registerform', {err})
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
                if (err.name === 'SequelizeValidationError') {
                    console.log(err.errors)
                    let errMessage = err.errors.map(item => item.message)
                    res.redirect(`/register?err=${errMessage}`)
                } else {
                    console.log(err);
                    res.send(err)
                }
            })
    }
}

module.exports = RegisterController