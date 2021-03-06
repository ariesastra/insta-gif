const { User } = require('../models')
const bcrypt = require('bcryptjs');

class LoginController {
    static getLoginPage(req, res) {
        const { error } = req.query
        //  console.log(req.query);
        res.render('auth-pages/loginform', { err: error })
    }

    static postLogin(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                //  console.log(user)
                if (user) {
                    let validPassword = bcrypt.compareSync(password, user.password)

                    if (validPassword) {
                        req.session.userId = user.id

                        return res.redirect('/')
                    } else {
                        const errmessage = (`Invalid Password`)
                        return res.redirect(`/login?error=${errmessage}`)
                    }
                } else {
                    const errmessage = (`Invalid Email & Password`)
                    return res.redirect(`/login?error=${errmessage}`)
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getLogOut(req, res) {
        req.session.destroy((err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = LoginController