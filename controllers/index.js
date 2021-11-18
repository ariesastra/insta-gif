const {User , Post , Profile} = require('../models');

class Controller {
  static getInstaGif(req, res) {
    let dataUser
    User.findAll({
      include :  [{
        model: Profile,
        }, {
        model: Post,
    }]
    })
    .then(user=>{
       dataUser =user
       console.log(dataUser[0].Posts[0].title)
       res.render('index',{dataUser})
        })
        .catch(err=>{
          res.send(err)
        })

  }
}

module.exports = Controller;