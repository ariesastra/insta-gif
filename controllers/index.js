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
    res.render('pages/postGif')
  }

  static getPostInstaGif(req,res){
     const {title,gifUrl,content} = req.body
     const {userId} = req.session
     console.log(userId)
     Post.create({title,gifUrl,content, UserId : userId})
     .then(post=>{
       res.redirect('/')
     })
     .catch(err=>{
       res.send(err)
     })
     
  }

}

module.exports = Controller;