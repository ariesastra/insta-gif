const { User, Post, Profile } = require('../models');

class Controller {
  static getInstaGif(req, res) {
    let dataUser
    User.findAll({
      include: [{
        model: Profile,
        required: true
      }, {
        model: Post,
        required: true
      }], order: [
        ['id', 'DESC']
      ],
    })
      .then(user => {
        dataUser = user
        res.render('index', { dataUser })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static postGifPage(req, res) {
    res.render('pages/postGif')
  }

  static postInstaGif(req, res) {

  }

  static getAddInstaGif(req,res){
    const { err } = req.query
    res.render('pages/postGif', {err})
  }

  static postAddInstaGif(req,res){
     const {title,gifUrl,content} = req.body
     const {userId} = req.session
     console.log(userId)
     Post.create({title,gifUrl,content, UserId : userId})
     .then(post=>{
       res.redirect('/')
     })
     .catch(err=>{
      if (err.name === 'SequelizeValidationError') {
        let errMessage = err.errors.map(item => item.message)
        res.redirect(`/post?err=${errMessage}`)
    } else {
        console.log(err);
        res.send(err)
    }
     })
     
  }

}

module.exports = Controller;