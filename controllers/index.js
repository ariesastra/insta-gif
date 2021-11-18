const { User, Post, Profile } = require('../models');

class Controller {
  static getInstaGif(req, res) {
    let userData;
    Profile.findAll({
      include: [{
        model: User,
        required: true
      }]
    })
      .then(user => {
        userData = user;
        return Post.findAll({
          include: [{
            model: User,
            required: true
          }]
        })
      })
      .then(post => {
        let postData = post
        console.log(userData, postData);
        res.render('index', { userData, postData });
      })
      .catch(err => {
        res.render('errorPages', { error: err });
      })

  }

  static postGifPage(req, res) {
    res.render('pages/postGif')
  }

  static postInstaGif(req, res) {

  }

  static getAddInstaGif(req, res) {
    res.render('pages/postGif')
  }

  static getPostInstaGif(req, res) {
    const { title, gifUrl, content } = req.body
    const { userId } = req.session
    console.log(userId)
    Post.create({ title, gifUrl, content, UserId: userId })
      .then(post => {
        res.redirect('/')
      })
      .catch(err => {
        res.send(err)
      })

  }

}

module.exports = Controller;