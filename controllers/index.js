const { User, Post, Profile } = require('../models');

class Controller {
  static getInstaGif(req, res) {
    res.render('index');
  }

  static postInstaGif(req, res) {
    res.render('pages/postGif');
  }
}

module.exports = Controller;