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
}

module.exports = Controller;