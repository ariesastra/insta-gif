const {User} = require('../models')
const bcrypt = require('bcryptjs');

class LoginController{
     static  getLoginPage(req,res){
         const {error} = req.query
         console.log(req.query);
         res.render('auth-pages/loginform', {err : error})
     }

     static postLogin(req,res){
        const {email, password} = req.body
         User.findOne({
             where :{
                 email
             }
         })
         .then(user=>{
            //  console.log(user)
            if (user) {
                let validPassword = bcrypt.compareSync(password, user.password)
                console.log(validPassword)
                if (validPassword) {
                    return res.redirect('/')
                } else {
                    const errmessage = (`Invalid User / password`)
                    return res.redirect(`/login?error=${errmessage}`)
                }
            } else {
                const errmessage = (`Invalid User / password`)
                return res.redirect(`/login?error=${errmessage}`)
            }
         })
         .catch(err=>{
             res.send(err)
         })
     }
}

module.exports =LoginController